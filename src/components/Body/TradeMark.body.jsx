import React, { useEffect, useState } from "react";
import "../../assets/slide.css";
import { BODYSLIDE } from "../../data/bodySlide";

export const TradeMark = () => {
  return (
    <div className="mx-auto relative bg-white rounded-md xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px]">
      <div className="flex p-4">
        <div className="flex grow">
          <div className="mr-4">
            <img className="w-6" src="https://media3.scdn.vn/img4/2022/11_17/s7HAXcpHJO08LZS6AAGo.png" />
          </div>
          <div className="font-semibold leading-6">Thương hiệu chính hãng</div>
        </div>
        <div>
          <a className="hover:opacity-50" href="#">
            Xem tất cả
          </a>
        </div>
      </div>
      <a href="#">
        <img
          className="w-11/12 m-auto rounded-lg"
          src="https://media3.scdn.vn/img4/2023/03_22/BCHo7tiq4xr7TwWRNNFv.png"
        />
      </a>
      <Silde></Silde>
    </div>
  );
};

const Silde = () => {
  return (
    <>
      <div className="h-[290px] w-[94%] m-auto flex relative overflow-x-scroll mt-4">
        {BODYSLIDE.map((item, index) => {
          return (
            <div className="relative top-3 h-[240px] rounded-lg mx-3 shadow-center" key={index}>
              <a href="#">
                <div>
                  <div className="w-[198px]">
                    <img className="w-[198px]" src={item.imgUrl} alt="" />
                  </div>
                  <div className="h-[42px]">
                    <p className="text-center leading-[42px] font-semibold">{item.name}</p>
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
