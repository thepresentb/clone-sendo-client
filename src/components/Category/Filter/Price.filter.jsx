import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";

export const Price = () => {
  const [isShow, setIsShow] = useState(true);

  const handleGetPrice = () => {
    const minElement = document.getElementsByName("minPrice")[0];
    const maxElement = document.getElementsByName("maxPrice")[0];
    const submitElement = document.getElementById("submit-priceFilter");

    if (Number(minElement.value) > Number(maxElement.value)) {
      submitElement.style.cursor = "not-allowed";
      submitElement.style.opacity = "0.5";
    } else {
      submitElement.style.cursor = "pointer";
      submitElement.style.opacity = "1";
    }
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-bold grow">Khoảng giá</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer">
          <div className="flex opacity-60 text-xs">
            <div className="w-[47%]">
              <p className="w-full text-center mb-1">Thấp nhất</p>
              <div>
                <input
                  className="w-full rounded h-8 pl-1 pr-0 text-sm"
                  type="number"
                  onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                  name="minPrice"
                  style={style}
                  onChange={handleGetPrice}
                />
              </div>
            </div>
            <div className="grow relative">
              <div className="absolute text-base font-bold text-center w-full mt-[23px]">-</div>
            </div>
            <div className="w-[47%]">
              <p className="w-full text-center mb-1">Cao nhất</p>
              <div>
                <input
                  className="w-full rounded h-8 pl-1 pr-0 text-sm"
                  type="number"
                  onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                  name="maxPrice"
                  onChange={handleGetPrice}
                />
              </div>
            </div>
          </div>
          <div
            className="w-full rounded bg-red-500 text-white my-2 py-1 text-center text-sm font-semibold cursor-not-allowed opacity-50"
            id="submit-priceFilter"
          >
            Áp dụng
          </div>
        </div>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="5" name="delivery" value="5" />
          <label className="ml-2 cursor-pointer" htmlFor="5">
            Dưới 50k
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="4" name="delivery" value="4" />
          <label className="ml-2 cursor-pointer" htmlFor="4">
            50K - 150K
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="3" name="delivery" value="3" />
          <label className="ml-2 cursor-pointer" htmlFor="3">
            150K - 300K
          </label>
        </div>
        <div className="mb-4">
          <input className="mb-1" type="radio" id="2" name="delivery" value="2" />
          <label className="ml-2 cursor-pointer" htmlFor="2">
            Trên 300K
          </label>
        </div>
      </div>
    </div>
  );
};

let style = {
  "::WebkitInnerSpinButton": {
    "-webkit-appearance": "none",
  },
};
