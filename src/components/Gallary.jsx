import React from "react";
import earth from "../imgs/images/desktop/image-deep-earth.jpg";
import arcade from "../imgs/images/desktop/image-night-arcade.jpg";
import socce from "../imgs/images/desktop/image-soccer-team.jpg";
import grid from "../imgs/images/desktop/image-grid.jpg";
import above from "../imgs/images/desktop/image-from-above.jpg";
import bore from "../imgs/images/desktop/image-pocket-borealis.jpg";
import curi from "../imgs/images/desktop/image-curiosity.jpg";
import fish from "../imgs/images/desktop/image-fisheye.jpg";

import earth2 from "../imgs/images/mobile/image-deep-earth.jpg";
import arcade2 from "../imgs/images/mobile/image-night-arcade.jpg";
import socce2 from "../imgs/images/mobile/image-soccer-team.jpg";
import grid2 from "../imgs/images/mobile/image-grid.jpg";
import above2 from "../imgs/images/mobile/image-from-above.jpg";
import bore2 from "../imgs/images/mobile/image-pocket-borealis.jpg";
import curi2 from "../imgs/images/mobile/image-curiosity.jpg";
import fish2 from "../imgs/images/mobile/image-fisheye.jpg";

export const Gallary = () => {
  return (
    <div className="md:max-w-[1111px] relative md:top-[500px] top-[300px] max-w-[327px] h-[1130px] md:px-[93px] mx-auto">
      <div className="flex justify-between">
        <h1 className="md:leading-[48px] md:text-[48px] text-[32px] mx-auto">
          OUR CREATIONS
        </h1>
        <button className="text-[14px] w-[160px] h-[40px] border-[2px] border-Dark-Gray hover:text-[white] hover:bg-[black] hover:scale-110 ease-in duration-300 hidden md:block ">
          SEE ALL
        </button>
      </div>

      <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 gap-6 pt-12 text-[white] ">
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              DEEP <span className="block">EARTH</span>
            </p>
          </div>
          <img className="md:block hidden" src={earth} alt="earth" />
          <img className="md:hidden block" src={earth2} alt="earth" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              NIGHT <span className="block">ARCADE</span>
            </p>
          </div>
          <img className="md:block hidden" src={arcade} alt="arcade" />
          <img className="md:hidden block" src={arcade2} alt="arcade" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              SOCCER <span className="block">TEAM VR</span>
            </p>
          </div>
          <img className="md:block hidden" src={socce} alt="soccer" />
          <img className="md:hidden block" src={socce2} alt="soccer" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              THE <span className="block">GRID</span>
            </p>
          </div>
          <img className="md:block hidden" src={grid} alt="grid" />
          <img className="md:hidden block" src={grid2} alt="grid" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              FROM UP <span className="block">ABOVE VR</span>
            </p>
          </div>
          <img className="md:block hidden" src={above} alt="above" />
          <img className="md:hidden block" src={above2} alt="above" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              POCKET <span className="block">BOREALIS</span>
            </p>
          </div>
          <img className="md:block hidden" src={bore} alt="borealis" />
          <img className="md:hidden block" src={bore2} alt="borealis" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              THE <span className="block">CURIOSITY</span>
            </p>
          </div>
          <img className="md:block hidden" src={curi} alt="curiosity" />
          <img className="md:hidden block" src={curi2} alt="curiosity" />
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-[white] hover:bg-opacity-35 ease-in duration-300 hover:text-[black] bg-gradient-to-t from-slate-800/60 via-slate-800/10 to-slate-600/10 hover:tracking-widest">
            <p className="absolute bottom-3 left-6 text-[24px] md:text-[32px]">
              MAKE IT <span className="block">FISHEYE</span>
            </p>
          </div>
          <img className="md:block hidden" src={fish} alt="fisheye" />
          <img className="md:hidden block" src={fish2} alt="fisheye" />
        </div>
      </div>
      <div className=" pt-[20px] ">
        <button className=" mx-auto text-[14px] w-[160px] h-[40px] border-[2px] border-Dark-Gray hover:text-[white] hover:bg-[black] hover:scale-110 ease-in duration-300 md:hidden block">
          SEE ALL
        </button>
      </div>
    </div>
  );
};
