import React from "react";
import { HEADERSLIDE } from "../../data/headerSlide";

export const SlideHeader = () => {
  return (
    <div className="mt-[140px] mb-8 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      <div className="flex flex-wrap mx-auto w-[550px] xl:w-full">
        {HEADERSLIDE.mainSlide.map((item, index) => {
          return <SectionItem item={item} key={index} />;
        })}
      </div>
      <a href="#">
        <img src={HEADERSLIDE.imgBannerSrc} />
      </a>
    </div>
  );
};

const SectionItem = ({ item }) => {
  return (
    <div className="w-[100px] m-[5px] p-[10px] bg-white hover:scale-110">
      <a href="#">
        <img data-src={item.imgUrl} src={item.imgUrl} alt="shortcut-block" className="w-[44px] mx-[17px] mt-4" />
        <div className="text-xs text-center mt-4">{item.name}</div>
      </a>
    </div>
  );
};
