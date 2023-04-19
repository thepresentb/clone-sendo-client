import React from "react";
import { SLIDEHEADER } from "../../data/slideHeader";

export const SlideHeader = () => {
  return (
    <div className="mt-[115px] mb-8 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      <div className="flex flex-wrap mx-auto w-[550px] xl:w-full">
        {SLIDEHEADER.sectionSilce.map((item, index) => {
          return <SectionItem item={item} key={index} />;
        })}
      </div>
      <a href="#">
        <img src={SLIDEHEADER.imgBannerSrc} />
      </a>
    </div>
  );
};

const SectionItem = ({ item }) => {
  return (
    <div className="w-[100px] m-[5px] p-[10px] bg-white hover:scale-110">
      <a href="#">
        <img data-src={item.url} src={item.url} alt="shortcut-block" className="w-[44px] mx-[17px] mt-4" />
        <div className="text-xs text-center mt-4">{item.name}</div>
      </a>
    </div>
  );
};
