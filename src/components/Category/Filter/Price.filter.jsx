import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Price = () => {
  const [isShow, setIsShow] = useState(true);
  const { filter } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleSetPrice = () => {
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

  const handleGetPrice = (rangePrice) => {
    console.log(rangePrice);
    const minPrice = Number(document.getElementsByName("minPrice")[0].value);
    const maxPrice = Number(document.getElementsByName("maxPrice")[0].value);
    // kiem tra khoang gia khi click ap dung
    if (!rangePrice && minPrice >= maxPrice) return;
    // xoa cac select khi click ap dung
    if (!rangePrice) {
      document.getElementsByName("priceFilter").forEach((item) => {
        item.checked = false;
      });
    }
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.price = {
      $gte: rangePrice ? rangePrice[0] : minPrice,
      $lte: rangePrice ? rangePrice[1] : maxPrice,
    };
    console.log("dispatching render");
    dispatch(setFilter(newFilter));
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
                  onChange={handleSetPrice}
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
                  onChange={handleSetPrice}
                />
              </div>
            </div>
          </div>
          <div
            className="w-full rounded bg-red-500 text-white my-2 py-1 text-center text-sm font-semibold cursor-not-allowed opacity-50"
            id="submit-priceFilter"
            onClick={() => handleGetPrice()}
          >
            Áp dụng
          </div>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => handleGetPrice([0, 50000])}>
          <input className="mb-1" type="radio" id="5" name="priceFilter" value="5" />
          <label className="ml-2 cursor-pointer" htmlFor="5">
            Dưới 50k
          </label>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => handleGetPrice([50000, 150000])}>
          <input className="mb-1" type="radio" id="4" name="priceFilter" value="4" />
          <label className="ml-2 cursor-pointer" htmlFor="4">
            50K - 150K
          </label>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => handleGetPrice([150000, 300000])}>
          <input className="mb-1" type="radio" id="3" name="priceFilter" value="3" />
          <label className="ml-2 cursor-pointer" htmlFor="3">
            150K - 300K
          </label>
        </div>
        <div className="mb-4" onClick={() => handleGetPrice([300000, 1000000000])}>
          <input className="mb-1" type="radio" id="2" name="priceFilter" value="2" />
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
