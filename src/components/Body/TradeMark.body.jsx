import React, { useEffect, useState } from "react";
import "../../assets/css/slide.css";
import { BODYSLIDE } from "../../data/bodySlide";

export const TradeMark = () => {
  return (
    <div className="mx-auto relative mt-4 bg-white rounded-md xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px]">
      <div className="flex p-6">
        <div className="flex grow">
          <div className="mr-2 sm:mr-4">
            <img className="w-6" src="https://media3.scdn.vn/img4/2022/11_17/s7HAXcpHJO08LZS6AAGo.png" />
          </div>
          <div className="text-[14px] sm:text-base font-semibold leading-6">Thương hiệu chính hãng</div>
        </div>
        <div>
          <a className="hover:opacity-50 text-[13px] sm:text-base" href="#">
            Xem tất cả
          </a>
        </div>
      </div>
      <a href="#">
        <img
          className="hidden sm:block w-11/12 m-auto rounded-lg"
          src="https://media3.scdn.vn/img4/2023/03_22/BCHo7tiq4xr7TwWRNNFv.png"
        />
        <img
          className="sm:hidden w-11/12 m-auto rounded-lg"
          src="https://media3.scdn.vn/img4/2023/03_22/LdcGMH2HEHL1j5VkF5HK.png"
        />
      </a>
      <Silde></Silde>
    </div>
  );
};

const Silde = () => {
  return (
    <>
      <div className="h-[230px] sm:h-[290px] w-[94vw] sm:w-[94%] m-auto flex relative hideScroll mt-4">
        {BODYSLIDE.map((item, index) => {
          return (
            <div className="relative top-3 h-[190px] sm:h-[240px] rounded-lg mx-3 shadow-center" key={index}>
              <a href="#">
                <div>
                  <div className="w-[140px] sm:w-[198px]">
                    <img className="w-[140px] sm:w-[198px]" src={item.imgUrl} alt="" />
                  </div>
                  <div className="h-[42px]">
                    <p className="text-center leading-[42px] text-sm sm:text-base font-semibold">{item.name}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
