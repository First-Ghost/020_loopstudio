import React, { useState } from "react";
import logo from "../imgs/images/logo.svg";
import burger from "../imgs/images/icon-hamburger.svg";
import close from "..//imgs/images/icon-close.svg";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="md:max-w-[1440px] max-w-[375px] mx-auto   ">
      <div className="md:max-w-[1110px] md:h-[32px] md:mx-auto md:my-[64px]  h-[24px] mx-[30px] my-[40px]  flex  items-center justify-between   ">
        <img className="mx-5" src={logo} alt="logo" />
        <div className="md:flex  hidden ">
          <p className="text-[white] px-5  hover:cursor-pointer hover:underline">
            About
          </p>
          <p className="text-[white] px-5  hover:cursor-pointer hover:underline  ">
            Careers
          </p>
          <p className="text-[white] px-5 hover:cursor-pointer hover:underline  ">
            Events
          </p>
          <p className="text-[white] px-5  hover:cursor-pointer hover:underline  ">
            Products
          </p>
          <p className="text-[white] px-5 hover:cursor-pointer hover:underline  ">
            Support
          </p>
        </div>

        {!nav ? (
          <div className="md:hidden  ">
            <img
              className="hover:cursor-pointer "
              src={burger}
              alt="menu"
              onClick={handleNav}
            />
          </div>
        ) : (
          <div className=" ease-in-out duration-300 md:hidden fixed left-0 top-0 bg-[black] w-full h-full px-[24px] z-40">
            <div className="    h-[24px] mx-auto my-[40px] flex  items-center justify-between ">
              <img className="mx-5" src={logo} alt="logo" />
              <div className="md:hidden ">
                <img
                  className="hover:cursor-pointer"
                  src={close}
                  alt="menu"
                  onClick={handleNav}
                />
              </div>
            </div>
            <div className="max-w-[130px] h-[223px] mt-[220px] ml-[24px] text-[white] text-[24px] uppercase  flex flex-col justify-between hover:cursor-pointer  ">
              <p className="hover:underline">about</p>
              <p className="hover:underline">careers</p>
              <p className="hover:underline">events</p>
              <p className="hover:underline">products</p>
              <p className="hover:underline">support</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
