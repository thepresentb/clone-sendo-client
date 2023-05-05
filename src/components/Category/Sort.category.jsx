import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderBy } from "../../redux/slice/category.slice";
import { HideIcon } from "./Filter/HideIcon.filter";

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
    <div className="hidden relative sm:flex items-center text-center text-[14px] h-14 my-2 ">
      <p className="mx-4  text-[13px]">Sắp xếp theo :</p>
      <button
        id="dropdownDelayButton"
        className="flex text-slate-500 w-[150px] rounded border-[1px] border-slate-300 bg-white text-xs p-1 pl-3 items-center "
        type="button"
        onClick={() => setIsShow(!isShow)}
      >
        <span className="text-start grow">{sort}</span>
        <div className="opacity-40">
          <HideIcon isShow={isShow} />
        </div>
      </button>
      <div
        id="dropdownDelay"
        className={`z-10 ${
          isShow ? null : "hidden"
        } bg-white divide-y absolute top-[50px] left-[113px] w-[150px] divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li
            onClick={() => {
              setSort("Mới nhất");
              handleSetOrderBy("createdAt");
            }}
          >
            <a
              href="#"
              className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Mới nhất
            </a>
          </li>
          <li
            onClick={() => {
              setSort("Đánh giá sao");
              handleSetOrderBy("rate");
            }}
          >
            <a
              href="#"
              className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Đánh giá sao
            </a>
          </li>
          <li
            onClick={() => {
              setSort("Giá cả");
              handleSetOrderBy("price");
            }}
          >
            <a
              href="#"
              className="block px-4 py-2 text-start hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Giá cả
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
