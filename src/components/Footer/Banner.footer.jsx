import React from "react";
import { FOOTERBANNER } from "../../data/footerBanner";

export const Banner = () => {
  return (
    <div className="bg-white sm:h-[200px] sm:p-4 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between">
        {FOOTERBANNER.map((item, index) => {
          return (
            <a className="w-6/12 flex flex-col sm:w-3/12 p-8 sm:py-2 cursor-pointer" key={index}>
              <div>
                <img className="w-[100px] sm:w-[130px] sm:h-[88px] m-auto" src={item.imgUrl} />
              </div>
              <div>
                <p className="text-xs text-center font-semibold mt-3">{item.title}</p>
              </div>
              <div className="flex mx-auto">
                <p className="text-[12px] text-center mt-1 opacity-50 w-[210px] leading-[16px]">{item.des}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
