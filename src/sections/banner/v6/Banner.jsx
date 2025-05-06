import BannerWrapper from "./Banner.style";
import Progressbar from "../../../components/progressbar/Progressbar";
import Countdown from "../../../components/countdown/Countdown";
import SliderData from "../../../assets/data/boxSlider";
import PayWith from "../../../components/payWith/PayWith";
import Slider from "react-slick";
import BannerData from "../../../assets/data/bannerV6";
import { usePresaleData } from "../../../utils/PresaleContext";

const Banner = () => {
  const {
    currentStage,
    currentBonus,
    stageEnd,
    raisedToken,
    goalToken,
    tokenPercent,
  } = usePresaleData();

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: true,
  };

  return (
    <BannerWrapper>
      <div className="mb-20 container">
        <div className="row">
          <div className="col-md-12">
            <div className="mb-20 text-center">
              <h1 className="banner-title">
                {BannerData.title} <br /> {BannerData.title2}
              </h1>
              <p className="banner-subtitle">{BannerData.subtitle}</p>

              <div className="presale-card-wrapper">
                <div className="presale-card">
                  <div className="presale-card-header">
                    <h5 className="ff-outfit fw-600 text-white text-uppercase">
                      ⚡ BUY IN BEFORE PRICE INCREASES!
                    </h5>
                  </div>

                  <div className="presale-card-counter">
                    <Countdown endDate={stageEnd} font="title2" />
                  </div>

                  <div className="presale-card-body">
                    <div className="mb-1 d-flex align-items-center justify-content-between flex-wrap">
                      <h5 className="fw-600 text-uppercase text-white">
                        Stage {currentStage} : {currentBonus}% Bonus !
                      </h5>
                      <h5 className="fw-600 text-uppercase text-white">
                        {raisedToken} / {goalToken}
                      </h5>
                    </div>

                    <div className="mb-35">
                      <Progressbar done={tokenPercent} variant="green2" />
                    </div>

                    <PayWith variant="v6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-slider-wrapper">
        <div className="scroll-slider-content">
          <Slider {...settings} className="presale-slider">
            {SliderData?.map((item, i) => (
              <div key={i} className="slider-item">
                {item.text && <p>{item.text}</p>}
                {item.socialLinks?.map((socialLinkItem, sid) => (
                  <a key={sid} href={socialLinkItem.url}>
                    <img src={socialLinkItem.icon} alt="icon" />
                  </a>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
