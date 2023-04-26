import React from "react";
import { FOOTERBANNER } from "../../data/footerBanner";

export const Banner = () => {
  return (
    <div className="bg-white sm:h-[250px] xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      <div className="flex flex-row flex-wrap sm:flex-nowrap justify-between">
        {FOOTERBANNER.map((item, index) => {
          return (
            <a href="#" className="w-6/12 sm:w-3/12 p-8 sm:p-10 cursor-pointer" key={index}>
              <div>
                <img className="w-[100px] sm:w-[130px] m-auto" src={item.imgUrl} />
              </div>
              <div>
                <p className="text-sm text-center font-semibold mt-4">{item.title}</p>
              </div>
              <div>
                <p className="text-xs text-center mt-1 opacity-50">{item.des}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
