import styled from "styled-components";

const NotificationStyleWrapper = styled.div`
  .presale-toast {
    position: fixed;
    z-index: 9999;
    bottom: 20px;
    right: 20px;
    border-radius: 10px;
    padding: 10px 14px;
    background-color: #70707059;
    border: 1px solid ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(5px);

    &__content {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 15px;
        font-weight: 500;
        line-height: 24px;
        color: white;
      }

      .icon-spin {
        width: 16px;
        height: 16px;
        animation: SpinAnimate 3s infinite linear;
      }
    }
  }

  @keyframes SpinAnimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .presale-toast.done {
    width: 306px;
    max-width: 100%;
    border-radius: 10px;
    padding: 20px 15px;
    background-color: #70707059;
    border: 1px solid ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(5px);

    .presale-toast__content {
      gap: 15px;

      .icon-successful {
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 480px) {
    .presale-toast {
      width: 80%;
      bottom: 10px;
      right: 10px;
      padding: 10px;

      &__content {
        gap: 10px;

        p {
          font-size: 14px;
        }
      }
    }

    .presale-toast.done {
      width: 80%;
      padding: 10px;

      .presale-toast__content {
        gap: 10px;

        .icon-successful {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default NotificationStyleWrapper;
