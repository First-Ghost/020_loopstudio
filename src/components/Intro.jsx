import React from "react";
import vr from "../imgs/images/desktop/image-interactive.jpg";
import vr2 from "../imgs/images/mobile/image-interactive.jpg";

export const Intro = () => {
  return (
    <div
      className=" relative md:top-[350px] top-[100px] md:max-w-[1111px] md:h-[500px]  h-[530px]  max-w-[327px]  mx-auto flex items-center justify-star md:mt-0 
      
    "
    >
      <img className=" md:block hidden mx-auto " src={vr} alt="vr" />
      <img className=" block md:hidden mx-auto" src={vr2} alt="vr2" />

      <div className="absolute md:top-[250px] top-[400px]   md:left-[575px] md:w-[540px] md:h-[315px] bg-[white] flex flex-col items-center justify-center  w-[280px] h-[255px] ml-[24px] ">
        <h1 className="md:text-[48px] md:leading-[48px] uppercase md:ml-[100px]  text-[32px] leading-[32px] md:text-left text-center mb-[20px]">
          The leader in interactive VR
        </h1>
        <p className="text-Dark-Gray md:ml-[100px] md:text-left text-center text-[#696969]  ">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};
