import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectedCategoryId } from "../../../redux/slice/category.slice";

export const SubNav = () => {
  const { list, selectedCategoryId, isCategoryPage } = useSelector((state) => state?.category);

  const dispatch = useDispatch();

  return (
    <div className={`xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto ${isCategoryPage ? "hidden" : ""}`}>
      <div className="w-full m-auto flex relative overflow-x-scroll">
        <div className="relative flex cursor-pointer">
          {list?.map((item) => {
            return (
              <div
                className={`w-[218px] h-[46px] text-center leading-[46px] hover:bg-red-500 text-white ${
                  selectedCategoryId === item.category._id ? "font-bold border-b-4 border-white" : ""
                }`}
                onClick={() => dispatch(toggleSelectedCategoryId(item.category._id))}
                key={item.category._id}
              >
                {item.category.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
