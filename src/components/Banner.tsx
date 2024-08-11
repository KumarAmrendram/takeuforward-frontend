import { useEffect, useState } from "react";
// import banner from "../assets/tuf banner.jpg";
import { countDown } from "../helpers/functions";
const Banner = () => {
  return (
    <div className="flex items-start justify-center pt-10 w-full">
      <div className="relative">
        <img
          src="https://marketplace.canva.com/EAFIddmg8b0/1/0/1600w/canva-white-minimalist-corporate-personal-profile-linkedin-banner-t5iKXmGyEtU.jpg"
          alt="banner"
          className="w-[95vw] h-[30vh] rounded-3xl"
        />
        <div className="absolute right-10 bottom-5">
          <Clock />
        </div>
      </div>
    </div>
  );
};
const Clock = () => {
  const [time, setTime] = useState(countDown(Date.now() + 10000));

  useEffect(() => {
    const targetTime = Date.now() + 10000;
    const interval = setInterval(() => {
      const newTime = countDown(targetTime);
      setTime(newTime);

      // Stop the countdown when it reaches 0
      if (newTime === "0d 0h 0m 0s") {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="text-5xl">{time}</div>
    </div>
  );
};
export default Banner;
