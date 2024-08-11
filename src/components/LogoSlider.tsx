import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import google from "../assets/Google_2015_logo.svg.png";
const LogoSlider = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });
  const logos = [google, google, google, google, google, google];
  return (
    <div className="py-8 bg-gradient-to-tr from-gray-200 via-white to-gray-500">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-10">
            <img src={logo} alt="logo" className="w-32" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default LogoSlider;
