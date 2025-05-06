import styled, { css } from "styled-components";

const ConnectWalletButtonStyleWrapper = styled.div`
  .connect-wallet-btn {
    border: 0;
    padding: 12px;
    min-width: 185px;
    border-radius: 25px;
    background: ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(10px);
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.white}33;
    }

    .short-address {
      display: none;
    }
  }

  ${({ variant }) =>
    variant === "yellow" &&
    css`
      .connect-wallet-btn {
        background: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: ${({ theme }) => theme.colors.yellow};
        }
      }
    `}

    ${({ variant }) =>
    variant === "gradient" &&
    css`
      .connect-wallet-btn {
        background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        }
      }
    `}

    ${({ variant }) =>
    variant === "v6" &&
    css`
      .connect-wallet-btn {
        background: linear-gradient(90deg, #3c38ff 0%, #7838ff 100%);
        color: ${({ theme }) => theme.colors.white};

        &:hover {
          background: linear-gradient(90deg, #3c38ff 0%, #7838ff 100%);
        }
      }
    `}

  @media screen and (max-width: 767px) {
    .connect-wallet-btn {
      padding: 10px 20px;
      min-width: auto;
      span {
        display: none;
      }
      .short-address {
        display: block;
      }
    }
  }
`;

export default ConnectWalletButtonStyleWrapper;
