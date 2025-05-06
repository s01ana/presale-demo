import PayWithStyleWrapper from "./PayWith.style";
import StatusIcon from "../../assets/images/icons/status.png";
import Dropdown from "./Dropdown/Dropdown";
import { usePresaleData } from "../../utils/PresaleContext";

const PayWith = ({ variant }) => {
  const {
    handleBuyOn,
    setIsActiveBuyOnEth,
    setIsActiveBuyOnBnb,
    switchChain,
    buyOnItem,
    buyOnText,
    buyOnIcon,
    selectedImg,
    payWithText,
    titleText,
    bnbChainId,
    ethChainId,
    currentPrice,
    tokenSymbol,
    paymentAmount,
    totalAmount,
    presaleStatus,
    makeEmptyInputs,
    handlePaymentInput,
    buyToken,
  } = usePresaleData();

  return (
    <PayWithStyleWrapper variant={variant}>
      <div className="pay-with-content">
        <div className="pay-with-content-left">
          <Dropdown
            variant="v4"
            selectedImg={selectedImg}
            titleText={titleText}
            setIsActiveBuyOnEth={setIsActiveBuyOnEth}
            setIsActiveBuyOnBnb={setIsActiveBuyOnBnb}
            switchChain={switchChain}
            makeEmptyInputs={makeEmptyInputs}
            ethChainId={ethChainId}
            bnbChainId={bnbChainId}
          />
        </div>

        <div className="pay-with-content-right">

        <ul className="pay-with-list">
          <li>
            <button className="active">
              <img src={selectedImg} alt="icon" />
            </button>
          </li>
        </ul>
        </div>
      </div>

      <form action="/" method="post">
        <div className="presale-item mb-30">
          <div className="presale-item-inner">
            <label>Pay token ({payWithText})</label>
            <input
              type="number"
              placeholder="0"
              value={paymentAmount}
              onChange={handlePaymentInput}
            />
          </div>
          <div className="presale-item-inner">
            <label>Get Token</label>
            <input type="number" placeholder="0" value={totalAmount} disabled />
          </div>
        </div>
      </form>

      <div className="presale-item-msg">
        {presaleStatus && (
          <div className="presale-item-msg__content">
            <img src={StatusIcon} alt="icon" />
            <p>{presaleStatus}</p>
          </div>
        )}
      </div>

      <button className="presale-item-btn" onClick={buyToken}>
        Buy now
      </button>
    </PayWithStyleWrapper>
  );
};

export default PayWith;
