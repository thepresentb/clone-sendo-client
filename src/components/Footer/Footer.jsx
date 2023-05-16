import React from "react";
import { Banner } from "./Banner.footer";
import { Contact } from "./Contact.footer";
import { Info } from "./Info.footer";
import { FOOTERSEARCH } from "../../data/searchTop";
import ChevronDown from "../../assets/svg/ChevornDown";

export const Footer = () => {
  return (
    <div id="footer">
      <Banner></Banner>
      <Contact></Contact>
      <Info></Info>
      <div className="hidden xl:flex flex-col  h-[86px] sm:flex-row py-6 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
        <div className="">
          <div className="flex pb-1">
            <div className="font-bold text-[12px]">TOP TÌM KIẾM</div>
            <div className="ml-1">
              <ChevronDown color="black" />
            </div>
          </div>
          <div className="flex">
            {FOOTERSEARCH.map((item, index) => {
              return (
                <div className="mr-4 text-blue-600 font-light text-[12px] whitespace-nowrap " key={index}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
