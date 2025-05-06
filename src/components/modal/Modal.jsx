import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import ModalWrapper from "./Modal.style";
import { CgClose } from "react-icons/cg";
import StatusIcon from "../../assets/images/icons/status.png";
import { usePresaleData } from "../../utils/PresaleContext";
import { usePresaleModal } from "../../utils/ModalContext";

const Modal = ({ variant }) => {
  const {
    userBalance,
    userTokenBalance,
    selectedImg,
    payWithText,
    currentBonus,
    currentPrice,
    tokenSymbol,
    paymentUsd,
    paymentAmount,
    buyAmount,
    bonusAmount,
    totalAmount,
    presaleStatus,
    handlePaymentInput,
    buyToken,
  } = usePresaleData();

  const { modalHandle } = usePresaleModal();

  return (
    <ModalWrapper className="modal" variant={variant}>
      <div className="modal-dialog modal-dialog-centered presale-modal-dialog">
        <div className="modal-content presale-modal-content">
          <div className="presale-modal-header">
            <h4 className="ff-orbitron fw-700 text-white text-uppercase">
              Be an early investor
            </h4>
            <button onClick={modalHandle}>
              <CgClose />
            </button>
          </div>

          <div className="presale-modal-body">
            <div className="mb-20 presale-header">
              <h5 className="ff-outfit fw-600 text-white text-uppercase">
                Balance : {userBalance}
              </h5>
              <h5 className="ff-outfit fw-600 text-white text-uppercase">
                Balance: {userTokenBalance} {tokenSymbol}
              </h5>
            </div>

            <div className="presale-item mb-25">
              <h6>Amount</h6>
              <div className="input-group">
                <input
                  type="number"
                  min={currentPrice}
                  step={currentPrice}
                  placeholder="0.5"
                  value={paymentAmount}
                  onChange={handlePaymentInput}
                />

                <div className="input-group-dropdown">
                  <Dropdown
                    selectedImg={selectedImg}
                    payWithText={payWithText}
                  />
                </div>
              </div>
            </div>
            <div className="presale-item mb-25">
              <h6>Get Amount ( {tokenSymbol} )</h6>
              <input
                type="text"
                name="usd-amount"
                id="usd-amount"
                placeholder="569633"
                value={buyAmount}
                disabled
              />
            </div>

            <ul className="token-info-list mb-35">
              <li>
                <p>$ Price</p>
                <p>{paymentUsd}</p>
              </li>
              <li>
                <p>Bonus {currentBonus}%</p>
                <p>{bonusAmount}</p>
              </li>
              <li>
                <p>Total Amount</p>
                <p>{totalAmount}</p>
              </li>
            </ul>

            <div className="presale-item-msg">
              {presaleStatus && (
                <div className="presale-item-msg__content">
                  <img src={StatusIcon} alt="icon" />
                  <p>{presaleStatus}</p>
                </div>
              )}
            </div>

            <Button
              size="large"
              variant="gradient"
              onClick={buyToken}
              className="btn-approve"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
