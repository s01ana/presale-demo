import styled, { css } from "styled-components";

import ChevronDownIcon from "../../../assets/images/icons/chevron-down.svg";

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-toggle {
    border: 0;
    width: 100%;
    padding: 13px 20px;
    background: ${({ theme }) => theme.colors.white}0d;
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: 14px;

    &.active {
      &::after {
        top: 25px;
        transform: rotate(225deg);
      }
    }

    &::after {
      position: absolute;
      top: 20px;
      right: 20px;
      border: 0;
      transition: 0.3s;
      width: 12px;
      height: 12px;
      border: solid ${({ theme }) => theme.colors.white};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
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
