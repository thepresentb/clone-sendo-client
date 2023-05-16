import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderBy } from "../../redux/slice/category.slice";
import { HideIcon } from "./Filter/HideIcon.filter";
import Check from "../../assets/svg/Check";
import ChevronDown from "../../assets/svg/ChevornDown";
import ChevronUp from "../../assets/svg/ChevronUp";

export const Sort = () => {
  const [isShow, setIsShow] = useState(false);
  const { orderBy } = useSelector((state) => state.category);
  const [sort, setSort] = useState("Mới nhất");
  const dispatch = useDispatch();

  const handleSetOrderBy = (name) => {
    setIsShow(false);
    const newOrderBy = {};
    newOrderBy[name] = name === "price" ? 1 : -1;
    dispatch(setOrderBy(newOrderBy));
  };

  return (
    <div className="hidden relative sm:flex items-center text-center h-14 mb-2 mt-1">
      <p className="mr-2 py-2 text-[14px] ">Sắp xếp theo:</p>
      <button
        id="dropdownDelayButton"
        className="flex text-slate-500 w-[180px] h-[32px] rounded border-[1px] border-slate-300 bg-white text-xs py-1 px-2 items-center "
        type="button"
        onClick={() => setIsShow(!isShow)}
      >
        <span className="text-start grow text-[14px]">{sort}</span>
        <div className="opacity-60">
          {isShow ? (
            <ChevronUp color="black" strokeWidth="2.0" size={16} />
          ) : (
            <ChevronDown color="black" strokeWidth="2.0" size={16} />
          )}
        </div>
      </button>
      <div
        id="dropdownDelay"
        className={`z-10 ${
          isShow ? null : "hidden"
        } bg-white divide-y absolute top-[50px] left-[92px] w-[180px] divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li
            className={`flex ${sort === "Mới nhất" ? "font-semibold" : null} hover:bg-gray-100`}
            onClick={() => {
              setSort("Mới nhất");
              handleSetOrderBy("createdAt");
            }}
          >
            <a href="#" className="grow block px-4 py-2 text-start  dark:hover:bg-gray-600 dark:hover:text-white">
              Mới nhất
            </a>
            <div className={`mt-1 mr-2 flex ${sort === "Mới nhất" ? "font-semibold" : "hidden"}`}>
              <Check />
            </div>
          </li>
          <li
            className={`flex ${sort === "Đánh giá sao" ? "font-semibold" : null} hover:bg-gray-100`}
            onClick={() => {
              setSort("Đánh giá sao");
              handleSetOrderBy("rate");
            }}
          >
            <a
              href="#"
              className="grow block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Đánh giá sao
            </a>
            <div className={`mt-1 mr-2 flex ${sort === "Đánh giá sao" ? "font-semibold" : "hidden"}`}>
              <Check />
            </div>
          </li>
          <li
            className={`flex ${sort === "Giá cả" ? "font-semibold" : null} hover:bg-gray-100`}
            onClick={() => {
              setSort("Giá cả");
              handleSetOrderBy("price");
            }}
          >
            <a
              href="#"
              className="grow block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Giá cả
            </a>
            <div className={`mt-1 mr-2 flex ${sort === "Giá cả" ? "font-semibold" : "hidden"}`}>
              <Check />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
