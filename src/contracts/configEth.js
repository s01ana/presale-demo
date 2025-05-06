//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import PresaleContractAbi from "./PresaleContractAbi.json";

//network link
export const networkLink = "https://sepolia.etherscan.io/tx";

//token contract address
const tokenContractAddress = "0xF1CD03880758F286a167438B787Be3facc285e65";

//token presale contract address
export const presaleContractAddress = "0xE429f7A2BDac87e8B02C9a14E68C668f417Ec6ec";

//contract chainid
const contractChainId = 11155111;

//token contract configuration
export const tokenContractConfig = {
  address: tokenContractAddress,
  abi: TokenContractAbi,
  chainId: contractChainId,
};

//token name read
export const tokenNameCall = {
  ...tokenContractConfig,
  functionName: "name",
  watch: true,
};

//token symbol read
export const tokenSymbolCall = {
  ...tokenContractConfig,
  functionName: "symbol",
  watch: true,
};

//token decimals read
export const tokenDecimalsCall = {
  ...tokenContractConfig,
  functionName: "decimals",
  watch: true,
};

//token balanceOf read
export const tokenBalanceOfCall = {
  ...tokenContractConfig,
  functionName: "balanceOf",
  watch: true,
};

//token Presale contract configuration
export const presaleContractConfig = {
  address: presaleContractAddress,
  abi: PresaleContractAbi,
  chainId: contractChainId,
};

//presale token amount read
export const presaleTokenAmountCall = {
  ...presaleContractConfig,
  functionName: "presaleTokenAmount",
  watch: true,
};

//token total sold read
export const totalSoldCall = {
  ...presaleContractConfig,
  functionName: "totalSold",
  watch: true,
};

//maximum stage read
export const maxStageCall = {
  ...presaleContractConfig,
  functionName: "maxStage",
  watch: true,
};

//current stage id read
export const currentStageIdCall = {
  ...presaleContractConfig,
  functionName: "getCurrentStageIdActive",
  watch: true,
};

//stage info read
export const currentStageInfoCall = {
  ...presaleContractConfig,
  functionName: "stages",
  watch: true,
};

//buy token write
export const buyTokenCall = {
  ...presaleContractConfig,
  functionName: "buyToken",
  watch: true,
};

//ETH to USD exchange rate
export const GetUSDExchangeRate = async () => {
  var requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=ETH",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data.rates.USD;
    })
    .catch((error) => {
      return "error", error;
    });
};
