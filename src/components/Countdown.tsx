import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("June 12, 2025") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents: any = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <span key={interval} style={{ marginRight: "10px", fontSize: "18px" }}>
        {timeLeft[interval] === 0 ? "1" : timeLeft[interval]} {interval}
      </span>
    );
  });

  return (
    <div style={{ marginBottom: "20px" }}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};
export default Countdown;
