import React, { useEffect, useState } from "react";
import "../../assets/slide.css";

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
  const [leftInc, setLeftInc] = useState(0);

  // slide controls
  useEffect(() => {
    let cnt = 0;
    let item = document.querySelector(".slider-item");
    let items = document.getElementsByClassName("slider-item");
    let increment = 0;
    const slideWidth = window.innerWidth;
    let itemWidth = item?.offsetWidth + 10;
    let displayedElement = slideWidth >= 1280 ? 7 : itemWidth >= 1024 ? 6 : 5;

    document.querySelector(".next")?.addEventListener("click", () => {
      if (items.length - displayedElement - cnt > 0) {
        cnt++;
        increment -= itemWidth;
        setLeftInc(increment);
      }
    });

    document.querySelector(".prev")?.addEventListener("click", () => {
      if (cnt > 0) {
        cnt--;
        increment += itemWidth;
        setLeftInc(increment);
      }
    });
  }, []);

  return (
    <>
      <div className="h-[250px] relative overflow-x-hidden m-3">
        <div
          className="absolute  flex top-0 items-start justify-start ease-out duration-300"
          style={{ left: `${leftInc}px` }}
        >
          <div className="slider-item cursor-pointer hover:scale-105 w-[144px] h-[206px] mx-[5px] my-4 shadow-xl rounded">
            <a>
              <div>
                <div className="relative">
                  <div>
                    <img
                      className="rounded-t"
                      src="https://media3.scdn.vn/img4/2023/04_17/BjygoNl5GIjpgIp1sTiR_simg_de2fe0_250x250_maxb.jpg"
                    />
                  </div>
                  <div id="flashsale-ps" className="flex  absolute bottom-[-8px] rounded-r w-fit bg-red-600">
                    <div>
                      <svg className="svg-icon h-4 " viewBox="0 0 20 20">
                        <path
                          className=""
                          fill="#fff"
                          d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-xs mr-2 text-white italic font-medium">Flashsale</p>
                  </div>
                </div>
                <div className="m-[11px] mt-3">
                  <div className="text-end text-base font-bold text-red-500">68.000đ</div>
                  <div className="flex justify-end">
                    <div className="text-end text-xs line-through opacity-40">100.000đ</div>
                    <div className="ml-2 text-end text-xs text-red-500">-55%</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="slider__controls top-[250px] xl:w-[1100px] lg:w-[900px] md:w-[750px]">
        <button type="button" className="prev">
          <div className="btn--icon"></div>
        </button>
        <button type="button" className="next">
          <div className="btn--icon"></div>
        </button>
      </div>
    </>
  );
};
