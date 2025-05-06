import styled, { css } from "styled-components";

import MeshGradModal from "../../assets/images/modal/overlay1.png";
import MeshGradModal2 from "../../assets/images/modal/overlay2.png";

const ModalWrapper = styled.div`
  display: block;
  background: ${({ theme }) => theme.colors.bgModalOverlay};
  backdrop-filter: blur(5px);

  .presale-modal-dialog {
    justify-content: center;
  }

  .presale-modal-content {
    width: 530px;
    max-width: 100%;
    background: ${({ theme }) => theme.colors.bgModal};
    border: 0;
    border-radius: 20px;
    overflow: hidden;
    padding: 40px;
    position: relative;
    z-index: 0;
    animation: 0.3s modalContentAnimation;

    &::before {
      position: absolute;
      content: "";
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-image: url(${MeshGradModal});
      background-repeat: no-repeat;
      background-position: top center;
      z-index: -1;
    }
  }

  @keyframes modalContentAnimation {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0%);
    }
  }

  .presale-modal-header {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    button {
      border: 0;
      background: transparent;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .token-info-list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      padding-bottom: 11px;
      border-bottom: 1px dashed ${({ theme }) => theme.colors.white}1a;
    }

    li p {
      font-weight: 500;
      font-size: 15px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  h6 {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }

  input {
    width: 100%;
    padding: 18px 16px 17px;
    background: ${({ theme }) => theme.colors.white}0d;
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    -moz-appearance: textfield; /* Firefox */

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }

  .presale-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  }

  .input-group {
    width: 100%;
    display: flex;

    input {
      width: 60%;
    }

    &-dropdown {
      width: 40%;
    }

    button {
      border-radius: 0 10px 10px 0;
    }
  }

  .btn-approve {
    min-width: unset;
  }

  .presale-item-btn-groups {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .presale-item-msg {
    text-align: center;
    .text-msg {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.white};
    }

    a {
      text-decoration: underline !important;
    }

    &__content {
      margin-bottom: 20px;
      border-radius: 10px;
      padding: 10px 14px;
      background-color: rgba(255, 63, 63, 0.15);
      border: 1px solid rgba(255, 63, 63, 0.15);
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: #ff3f3f;
      }
    }
  }

  @media screen and (max-width: 575px) {
    .presale-modal-content {
      width: calc(100% - 40px);
      max-width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    .presale-modal-content {
      padding: 20px;
    }

    .presale-modal-header {
      margin-bottom: 20px;
      h4 {
        font-size: 13px;
      }
    }

    .presale-modal-body {
      h5 {
        font-size: 14px;
      }
    }

    .input-group {
      flex-direction: column;
      gap: 10px;

      input,
      &-dropdown {
        width: 100%;
      }

      input,
      button {
        border-radius: 10px !important;
      }
    }

    .presale-item-btn-groups {
      flex-direction: column;
    }
  }
`;

export default ModalWrapper;
