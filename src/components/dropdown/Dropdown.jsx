import DropdownWrapper from "./Dropdown.style";

const Dropdown = ({ variant, selectedImg, payWithText }) => {
  return (
    <DropdownWrapper variant={variant}>
      <button className="dropdown-toggle">
        <img src={selectedImg} alt="icon" />
        <span>{payWithText}</span>
      </button>
    </DropdownWrapper>
  );
};

export default Dropdown;
