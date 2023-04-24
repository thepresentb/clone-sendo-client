import React, { useEffect, useState } from "react";
import "../../assets/slide.css";
import { useDispatch, useSelector } from "react-redux";
import { getFlashSaleList } from "../../redux/apiRequest/product.api";
import { StringHelper } from "../../utils/StringHelper";

export const FlashSale = () => {
  // countdown events
  let countDownDate = new Date("2023-06-01 23:59:59").getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(x);
      seconds = 0;
    }

    // document.querySelector(".countdown-d").innerHTML = days;
    // document.querySelector(".countdown-h").innerHTML = hours;
    // document.querySelector(".countdown-m").innerHTML = minutes;
    // document.querySelector(".countdown-s").innerHTML = seconds;
  }, 1000);

  return (
    <div className="mx-auto relative bg-white rounded-md xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px]">
      <div className="flex p-4">
        <div className="flex grow">
          <div className="mt-1">
            <img
              className="w-[130px]"
              src="https://web-static.scdn.vn/sendo-buyers-flash-sale-widget/6d27bf93-web/media/flashsale-icon.6d0b98fffda3d7d526b45c53de367840.svg"
            />
          </div>
          <div className="flex text-center ml-2 font-bold leading-8">
            <div className="m-1 h-7 w-7 leading-7 rounded text-white bg-slate-950">
              <span className="font-mono">
                <span className="countdown-d">00</span>
              </span>
            </div>
            :
            <div className="m-1 h-7 w-7 leading-7 rounded text-white bg-slate-950">
              <span className="font-mono">
                <span className="countdown-h">00</span>
              </span>
            </div>
            :
            <div className="m-1 h-7 w-7 leading-7 rounded text-white bg-slate-950">
              <span className="font-mono">
                <span className="countdown-m">00</span>
              </span>
            </div>
            :
            <div className="m-1 h-7 w-7 leading-7 rounded text-white bg-slate-950">
              <span className="font-mono">
                <span className="countdown-s">00</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <a className="hover:opacity-50" href="#">
            Xem tất cả
          </a>
        </div>
      </div>
      <Silde></Silde>
    </div>
  );
};

const Silde = () => {
  const [leftInc, setLeftInc] = useState(0);
  const flashSaleList = useSelector((state) => state?.product?.flashSale);
  const dispatch = useDispatch();

  useEffect(() => {
    getFlashSaleList(dispatch);
  }, []);

  // slide controls
  useEffect(() => {
    let cnt = 0;
    let items = document.getElementsByClassName("slider-item");
    let increment = 0;
    const slideWidth = window.innerWidth;
    let displayedElement = slideWidth >= 1280 ? 7 : slideWidth >= 1024 ? 6 : 5;

    document.querySelector(".next")?.addEventListener("click", () => {
      if (items.length - displayedElement - cnt > 0) {
        cnt++;
        increment -= 155;
        setLeftInc(increment);
      }
    });

    document.querySelector(".prev")?.addEventListener("click", () => {
      if (cnt > 0) {
        cnt--;
        increment += 155;
        setLeftInc(increment);
      }
    });
  }, []);

  return (
    <>
      <div className="h-[250px] relative overflow-x-hidden mx-3 mb-3">
        <div
          className="absolute  flex top-0 items-start justify-start ease-out duration-300"
          style={{ left: `${leftInc}px` }}
        >
          {flashSaleList?.map((item) => {
            return (
              <div
                className="slider-item cursor-pointer hover:scale-105 w-[144px] h-[206px] mx-[5px] my-4 shadow-center rounded"
                key={item._id}
              >
                <a>
                  <div>
                    <div className="relative">
                      <div>
                        <img className="rounded-t" src={item.imgUrl} />
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
                      <div className="text-end text-base font-bold text-red-500">
                        {StringHelper.toPrice(Math.floor((item.price * (100 - item.saleId.salePercent)) / 100))}đ
                      </div>
                      <div className="flex justify-end">
                        <div className="text-end text-xs line-through opacity-40">
                          {StringHelper.toPrice(item.price)}
                        </div>
                        <div className="ml-2 text-end text-xs text-red-500">-{item.saleId.salePercent}%</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="slider__controls top-[170px] xl:w-[1100px] lg:w-[900px] md:w-[750px]">
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
