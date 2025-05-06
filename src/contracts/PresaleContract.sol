// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Presale is Ownable {
    IERC20 public token;
    IERC20Metadata public tokenMetadata;
    AggregatorV3Interface public priceFeed;
    address public paymentAddress;
    uint256 public presaleTokenAmount = 1000000000000000000000000;
    bool public presaleActive = true;
    uint256 public totalSold = 0;

    struct Stage {
        uint256 id;
        uint256 bonus;
        uint256 price;
        uint256 start;
        uint256 end;
    }
    mapping(uint256 => Stage) public stages;
    uint256 public maxStage = 4;
    uint256 currentStageId = 0;

    // constructor
    constructor(
        address _payment,
        address _token,
        address _priceFeed
    ) Ownable(msg.sender) {
        token = IERC20(_token);
        tokenMetadata = IERC20Metadata(_token);
        paymentAddress = _payment;
        priceFeed = AggregatorV3Interface(_priceFeed);

        // stage data
        stages[1] = Stage(1, 20, 100000000000000, 1737881664, 1740506400); //stage 1
        stages[2] = Stage(2, 15, 200000000000000, 1740506401, 1742925600); //stage 2
        stages[3] = Stage(3, 10, 300000000000000, 1742925601, 1745604000); //stage 3
        stages[4] = Stage(4, 5, 400000000000000, 1745604001, 1748196000); //stage 4
        currentStageId = 4;
    }

    // Get the latest ETH/USD price from the Aggregator
    function getEthToUsdPrice() public view returns (int256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();

        return price;
    }

    // Convert ETH to USD based on the latest price from the Aggregator
    function convertEthToUsd(uint256 ethAmount) public view returns (uint256) {
        int256 ethToUsdPrice = getEthToUsdPrice();

        uint256 usdAmount = (ethAmount * uint256(ethToUsdPrice)) /
            (10**priceFeed.decimals());
        return usdAmount;
    }

    // buyToken funtion to buy tokens
    // @param _amount No of tokens to buy
    function buyToken(uint256 _amount) public payable {
        require(presaleActive, "Presale is not active!");
        require(_amount >= 0, "Please enter minimum token!");
        uint256 _id = getCurrentStageIdActive();
        require(_id > 0, "Stage info not available!");
        uint256 _bonus = stages[_id].bonus;
        uint256 _price = stages[_id].price;
        uint256 _start = stages[_id].start;
        uint256 _end = stages[_id].end;
        require(_start <= block.timestamp, "Presale has not started yet!");
        require(_end >= block.timestamp, "Presale end!");
        uint256 _totalPayUsd = _amount * _price;
        uint256 _ethToUsd = convertEthToUsd(1e18);
        uint256 _totalPayAmount = _totalPayUsd / _ethToUsd;
        require(msg.value >= _totalPayAmount, "Not enough payment!");
        uint256 _weiAmount = _amount * 1e18;
        uint256 _bonusAmount = (_amount * _bonus) / 100;
        _bonusAmount *= 1e18;
        uint256 _totalAmount = _weiAmount + _bonusAmount;
        uint256 _tokenDecimals = tokenMetadata.decimals();
        uint256 _subDecimals = 18 - _tokenDecimals;
        uint256 _totalTokenAmount = _totalAmount / (10**_subDecimals);
        require(
            _totalTokenAmount <= token.balanceOf(address(this)),
            "Presale contract doesn't have enough token!"
        );
        require(
            (totalSold + _totalTokenAmount) <= presaleTokenAmount,
            "Presale token amount exceeds!"
        );

        //payment price transfer to payement address
        require(
            payable(paymentAddress).send(msg.value),
            "Failed to transfer ETH payment!"
        );

        //purchased tokens transfer to buyer address
        require(
            token.transfer(msg.sender, _totalTokenAmount),
            "Failed to transfer token!"
        );

        //added to totalSold
        totalSold += _totalTokenAmount;
    }

    // update token address
    function setToken(address _token) public onlyOwner {
        require(_token != address(0), "Token is zero address!");
        token = IERC20(_token);
        tokenMetadata = IERC20Metadata(_token);
    }

    // update price feed address
    function setPriceFeed(address _priceFeed) public onlyOwner {
        require(_priceFeed != address(0), "Token is zero address!");
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    // update paementAddress
    function setPaymentAddress(address _paymentAddress) public onlyOwner {
        paymentAddress = _paymentAddress;
    }

    // update presaleTokenAmount
    function setPresaleTokenAmount(uint256 _amount) public onlyOwner {
        presaleTokenAmount = _amount;
    }

    // flip presaleActive as true/false
    function flipPresaleActive() public onlyOwner {
        presaleActive = !presaleActive;
    }

    // update maximum stage
    function setMaxStage(uint256 _maxStage) public onlyOwner {
        maxStage = _maxStage;
    }

    // update totalSold
    function setTotalSold(uint256 _totalSold) public onlyOwner {
        totalSold = _totalSold;
    }

    // adding stage info
    function addStage(
        uint256 _bonus,
        uint256 _price,
        uint256 _start,
        uint256 _end
    ) public onlyOwner {
        uint256 _id = currentStageId + 1;
        require(_id <= maxStage, "Maximum stage excceds!");
        require(_bonus <= 100, "Bonus should be between 0 and 100");
        require(_start > 0 && _end > 0, "Invalid date!");
        require(_start < _end, "End date smaller than start!");
        currentStageId += 1;
        stages[_id] = Stage(_id, _bonus, _price, _start, _end);
    }

    // update stage info
    function setStage(
        uint256 _id,
        uint256 _bonus,
        uint256 _price,
        uint256 _start,
        uint256 _end
    ) public onlyOwner {
        require(stages[_id].id == _id, "ID doesn't exist!");
        require(_bonus <= 100, "Bonus should be between 0 and 100");
        require(_start > 0 && _end > 0, "Invalid date!");
        require(_start < _end, "End date smaller than start!");
        stages[_id] = Stage(_id, _bonus, _price, _start, _end);
    }

    // get current stage id active
    function getCurrentStageIdActive() public view returns (uint256) {
        uint256 _id = 0;
        if (currentStageId == 0) {
            _id = 0;
        } else {
            for (uint256 i = 1; i <= currentStageId; i++) {
                if (
                    (block.timestamp >= stages[i].start) &&
                    (block.timestamp <= stages[i].end)
                ) {
                    _id = i;
                }
            }
        }
        return _id;
    }

    // withdrawFunds functions to get remaining funds transfer
    function withdrawFunds() public onlyOwner {
        require(
            payable(msg.sender).send(address(this).balance),
            "Failed withdraw!"
        );
    }

    // withdrawTokens functions to get remaining tokens transfer
    function withdrawTokens(address _to, uint256 _amount) public onlyOwner {
        uint256 _tokenBalance = token.balanceOf(address(this));
        require(_tokenBalance >= _amount, "Exceeds token balance!");
        bool success = token.transfer(_to, _amount);
        require(success, "Failed to transfer token!");
    }
}
