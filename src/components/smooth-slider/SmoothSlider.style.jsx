import styled from "styled-components";

const SmoothSliderWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 27px 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white}0d;
  backdrop-filter: blur(10px);

  .smooth-slider-container {
    width: calc(250px * 16);
    display: flex;
    align-items: center;
    gap: 0px;
    animation: smoothSlider 25s infinite linear;
  }

  .slider-item {
    width: 250px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes smoothSlider {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 8));
    }
  }
`;

export default SmoothSliderWrapper;
