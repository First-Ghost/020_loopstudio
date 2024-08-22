import React from "react";
import hero from "../imgs/images/desktop/image-hero.jpg";
import hero2 from "../imgs/images/mobile/image-hero.jpg";

export const Hero = () => {
  return (
    <div className="md:max-w-[1440px] max-w-[375px] mx-auto -z-10">
      {/* This div and image will show on large screens (md and up) */}
      <div className="hidden md:block absolute top-0 w-full mx-auto object-cover -z-10">
        <img src={hero} alt="hero" />
      </div>

      {/* This div and image will show on small screens (sm and below) */}
      <div className="block md:hidden  absolute top-0 w-full mx-auto object-cover -z-10">
        <img className="h-[650px]" src={hero2} alt="hero2" />
      </div>

      <div className="md:w-[650px] md:h-[280px] border-[white] border-[3px] md:ml-[165px] md:mt-[100px]  w-[330px] h-[200px]  ml-[24px] mt-[230px] ">
        <h1 className="text-[white]  md:text-center uppercase md:text-[72px] md:leading-[70px] text-[40px] leading-[38px] md:ml-[50px] md:mt-[30px] mt-[30px] ">
          Immersive experiences that deliver
        </h1>
      </div>
    </div>
  );
};
