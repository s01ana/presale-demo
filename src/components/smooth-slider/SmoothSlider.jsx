import SmoothSliderWrapper from "./SmoothSlider.style";
import Data from "../../assets/data/smoothSliderData";

const SmoothSlider = () => {
  return (
    <SmoothSliderWrapper>
      <div className="smooth-slider-container">
        {Data?.map((item, i) => (
          <div key={i} className="slider-item">
            <img src={item.icon} alt="slider-img" />
          </div>
        ))}
      </div>
    </SmoothSliderWrapper>
  );
};

export default SmoothSlider;
