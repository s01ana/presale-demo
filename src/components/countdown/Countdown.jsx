import { useEffect } from "react";
import { useState } from "react";
import CountdownWrapper from "./Countdown.style";

const Countdown = ({ endDate, ...props }) => {
  const [remainingTime, setRemainingTime] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = endDate * 1000 - now;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      } else {
        timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }

      return timeLeft;
    };

    setRemainingTime(calculateTimeLeft());

    const timer = setInterval(() => {
      setRemainingTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <CountdownWrapper {...props}>
      <div className="count-item">
        <span className="count">{remainingTime.days}</span>
        <span className="label">d</span>
      </div>
      <div className="count-item">
        <span className="count">{remainingTime.hours}</span>
        <span className="label">h</span>
      </div>
      <div className="count-item">
        <span className="count">{remainingTime.minutes}</span>
        <span className="label">m</span>
      </div>
      <div className="count-item">
        <span className="count">{remainingTime.seconds}</span>
        <span className="label">s</span>
      </div>
    </CountdownWrapper>
  );
};

export default Countdown;
