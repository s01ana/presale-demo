import styled, { css } from "styled-components";

import ChevronDownIcon from "../../assets/images/icons/chevron-down.svg";

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-toggle {
    border: 0;
    width: 100%;
    padding: 13px 16px;
    background: ${({ theme }) => theme.colors.white}0d;
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: 14px;

    &.active {
      &::after {
        transform: rotate(180deg);
      }
    }

    &::after {
      display: none;
      position: absolute;
      top: auto;
      right: 16px;
      content: url(${ChevronDownIcon});
      border: 0;
      transition: 0.3s;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .dropdown-list {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 18px 16px;
    background: ${({ theme }) => theme.colors.bgHeader};
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    li a {
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.white};

      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }
`;

export default DropdownWrapper;
