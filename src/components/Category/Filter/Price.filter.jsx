import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

const RANGE = {
  1: [0, 50000],
  2: [50000, 150000],
  3: [150000, 300000],
  4: [300000, 10000000000],
};

export const Price = () => {
  const [isShow, setIsShow] = useState(true);
  const [range, setRange] = useState(null);
  const [isDisable, setIsDisable] = useState(false);
  const { filter } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleSetPrice = () => {
    const minElement = document.getElementsByName("minPrice")[0];
    const maxElement = document.getElementsByName("maxPrice")[0];

    if (Number(minElement.value) > Number(maxElement.value)) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  };

  const handleGetPrice = (option) => {
    const minPrice = Number(document.getElementsByName("minPrice")[0].value);
    const maxPrice = Number(document.getElementsByName("maxPrice")[0].value);
    // kiem tra khoang gia khi click ap dung
    if (!option && minPrice >= maxPrice) return;

    let newFilter = JSON.parse(JSON.stringify(filter));
    const isSP = option !== null;
    if (isSP && option === range) {
      setRange(null);
      delete newFilter?.price;
    } else {
      setRange(option);
      newFilter.price = {
        $gte: option ? RANGE[option][0] : minPrice,
        $lte: option ? RANGE[option][1] : maxPrice,
      };
    }

    dispatch(setFilter(newFilter));
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-semibold grow text-sm ml-1 leading-6">Khoảng giá</div>
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
            className={`w-full rounded  my-2 py-1 text-center text-xs ${
              !isDisable ? "bg-slate-200 text-slate-400" : "bg-red-500 text-white font-semibold"
            } `}
            id="submit-priceFilter"
            onClick={() => handleGetPrice()}
          >
            Áp dụng
          </div>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => handleGetPrice(1)}>
          <div
            className={`rounded bg-slate-200 py-[6px] px-2 ${
              range === 1 ? "border-[1px] border-red-600 font-semibold" : null
            } `}
          >
            Dưới 50k
          </div>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => handleGetPrice(2)}>
          <div
            className={`rounded bg-slate-200 py-[6px] px-2 ${
              range === 2 ? "border-[1px] border-red-600 font-semibold" : null
            } `}
          >
            50K - 150K
          </div>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => handleGetPrice(3)}>
          <div
            className={`rounded bg-slate-200 py-[6px] px-2 ${
              range === 3 ? "border-[1px] border-red-600 font-semibold" : null
            } `}
          >
            150K - 300K
          </div>
        </div>
        <div className="mb-4 cursor-pointer" onClick={() => handleGetPrice(4)}>
          <div
            className={`rounded bg-slate-200 py-[6px] px-2 ${
              range === 4 ? "border-[1px] border-red-600 font-semibold" : null
            } `}
          >
            Trên 300K
          </div>
        </div>
      </div>
    </div>
  );
};
