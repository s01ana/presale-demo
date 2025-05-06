import styled from "styled-components";

import BannerBgImg from "../../../assets/images/banner/banner6-bg.png";
import IconImg from "../../../assets/images/icons/star-square.svg";

const BannerWrapper = styled.section`
  background-image: url(${BannerBgImg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  padding: 223px 0 60px 0;
  position: relative;
  z-index: 0;
  overflow: hidden;

  .banner-title {
    margin-bottom: 10px;
    background: linear-gradient(180deg, #fff 0%, #bcff7b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: ${({ theme }) => theme.fonts.title2};
    font-size: 90px;
    font-weight: 400;
    line-height: 100px;
    color: ${({ theme }) => theme.colors.white};
  }

  .banner-subtitle {
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
  }

  .presale-card-wrapper {
    margin: 0 auto;
    width: 570px;
    max-width: 100%;
    position: relative;

    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 15%;
      left: -20%;
      width: 250px;
      height: 400px;
      transform: rotate(-30deg);
      border-radius: 20px;
      background: linear-gradient(180deg, #052117 0%, rgba(32, 93, 55, 0) 100%);
      backdrop-filter: blur(15px);
    }

    &::after {
      position: absolute;
      z-index: -1;
      content: "";
      top: 15%;
      right: -20%;
      width: 250px;
      height: 400px;
      transform: rotate(30deg);
      border-radius: 20px;
      background: linear-gradient(180deg, rgba(82, 79, 31, 0) 0%, #1d200f 100%);
      backdrop-filter: blur(15px);
    }
  }

  .presale-card {
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    background: rgba(9, 43, 30, 0.9);
    backdrop-filter: blur(20px);

    &-header {
      padding: 20px 40px;
    }

    &-counter {
      padding: 20px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-body {
      padding: 40px;
    }
  }

  /* scroll slider style */
  .scroll-slider-wrapper {
    position: absolute;
    z-index: -2 !important;
    bottom: 269px;
    left: 0;
    width: 100%;
    padding: 100px 0;
    overflow: hidden;
    z-index: 0;

    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 100px;
      left: 0;
      width: 100%;
      height: 80px;
      background: rgba(255, 255, 255, 0.15);
      transform: rotate(6deg);
    }
  }

  .scroll-slider-content {
    width: 100%;
    height: 80px;
    background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
    backdrop-filter: blur(10px);
    transform: rotate(-6deg);
  }

  .presale-slider {
    background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
    backdrop-filter: blur(10px);

    .slider-item {
      margin: 0 30px;
      height: 80px;
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 30px;
      position: relative;
      padding-left: 30px;

      &::before {
        position: absolute;
        content: url(${IconImg});
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
      }

      a {
        display: inline-block;
        img {
          width: 40px;
          height: 40px;
        }
      }

      p {
        color: ${({ theme }) => theme.colors.black};
        font-family: ${({ theme }) => theme.fonts.title2};
        font-size: 60px;
        font-weight: 400;
        line-height: 40px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .banner-title {
      margin-bottom: 10px;
      font-size: 70px;
      line-height: 80px;
    }
  }

  @media screen and (max-width: 575px) {
    .banner-title {
      font-size: 60px;
      line-height: 70px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 150px 0 60px 0;

    .banner-title {
      font-size: 36px;
      line-height: 46px;
    }

    .presale-card {
      border-radius: 20px;

      h5 {
        font-size: 14px;
        line-height: 24px;
      }

      &-header {
        padding: 10px 20px;
      }

      &-counter {
        padding: 10px;
      }

      &-body {
        padding: 20px;
      }
    }
  }
`;

export default BannerWrapper;
