import { useEffect, useState } from "react";
import DropdownWrapper from "./Dropdown.style";
import { chainInfo } from "../../../contracts/chainConfig";

const Dropdown = ({
  variant,
  selectedImg,
  titleText,
  setIsActiveBuyOnEth,
  setIsActiveBuyOnBnb,
  switchChain,
  makeEmptyInputs,
  ethChainId,
  bnbChainId,
}) => {
  const dropdownList = chainInfo;

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const dropdownHandle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownData = (item) => {
    event.preventDefault();

    setIsDropdownActive(false);
    if (item.chainId == ethChainId) {
      setIsActiveBuyOnBnb(false);
      setIsActiveBuyOnEth(true);
      switchChain({ chainId: ethChainId });
      makeEmptyInputs();
    }
    if (item.chainId == bnbChainId) {
      setIsActiveBuyOnEth(false);
      setIsActiveBuyOnBnb(true);
      switchChain({ chainId: bnbChainId });
      makeEmptyInputs();
    }
  };

  return (
    <DropdownWrapper variant={variant}>
      <button
        className={`dropdown-toggle ${isDropdownActive ? "active" : ""}`}
        onClick={dropdownHandle}
      >
        <img src={selectedImg} alt="icon" />
        <span>{titleText}</span>
      </button>
      {isDropdownActive && (
        <ul className="dropdown-list">
          {dropdownList?.map((item, i) => (
            <li key={i}>
              <a href="#" onClick={() => handleDropdownData(item)}>
                <img src={item.icon} alt="icon" />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
