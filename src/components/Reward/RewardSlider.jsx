import { useState } from "react";
import Gift from "../../assets/images/gift-box.png";
import Gift2 from "../../assets/images/Gift2.png";
import Gift3 from "../../assets/images/Gift3.png";
import Gift4 from "../../assets/images/Gift4.png";
import Gift5 from "../../assets/images/gift-box-red.webp";
import Emptybox from "../../assets/images/empty-box1.png";

const RewardSlider = () => {
  const [sliderValue, setSliderValue] = useState(25);
  const [imgSource, SetimgSource] = useState(Gift);

  const handleSliderChange = (event) => {
    let value = Number(event.target.value);
    if (value >= 0 && value <= 20) {
      SetimgSource(Emptybox);
    } else if (value > 20 && value <= 40) {
      SetimgSource(Gift);
    } else if (value > 40 && value <= 60) {
      SetimgSource(Gift5);
    } else if (value > 60 && value <= 80) {
      SetimgSource(Gift3);
    } else if (value > 80) {
      SetimgSource(Gift2);
    }
    setSliderValue(parseInt(event.target.value));
  };

  const imageMap = {
    20: Gift,
    40: Gift2,
    60: Gift3,
    80: Gift4,
  };

  const imageSource = imageMap[sliderValue];
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="popover__wrapper">
        <img
          className="animate-bounce py-4 delay-800 duration-100 "
          src={imgSource}
          alt="gift"
        />
        <div className="popover__content bg-slate-900 text-white rounded-xl">
          <h1 className="text-xl font-semibold">
            Maximum Qualification for Reward
          </h1>
          <ul className="ml-1 list-disc space-y-2">
            <li className="text-white">
              You should have a minimum of 1 B NML tokens
            </li>
            <li className="text-white">
              Higher the NML token, higher the rewards
            </li>
            <li className="text-white">
              Get higher rewards if you opt for donate and give 2% for donation
            </li>
            <li className="text-white">
              If you opt for NML release tax will be applied on your payout
            </li>
          </ul>
        </div>
      </div>
      <p class="flex justify-center relative">
        <span class="absolute text-md font-bold">${sliderValue ? 20 :"2"}</span>
      </p>
      <div className="w-full flex justify-center">
        <p className="text-md font-bold">$0</p>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p className="text-md ml-4 font-bold">$10</p>
      </div>
    </div>
  );
};

export default RewardSlider;
