import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectedCategoryId } from "../../../redux/slice/category.slice";

export const SubNav = () => {
  const { list, selectedCategoryId, isCategoryPage } = useSelector((state) => state?.category);
  const { selectedProduct } = useSelector((state) => state.product);
  const { isBagPage } = useSelector((state) => state.bag);
  const { isCheckOutPage } = useSelector((state) => state.checkOut);

  const dispatch = useDispatch();

  return (
    <div
      className={`xl:max-w-[1308px] mt-[13px] sm:mt-[6px] lg:max-w-[900px] md:max-w-[750px] mx-auto ${
        isCategoryPage || selectedProduct || isBagPage || isCheckOutPage ? "hidden" : ""
      } `}
    >
      <div className="w-full m-auto flex relative hideScroll">
        <div className="relative flex cursor-pointer">
          {list?.map((item) => {
            return (
              <div
                className={`w-[130px] sm:text-[1rem] truncate whitespace-nowrap px-2 sm:w-[218px] h-[46px] text-center leading-[46px] hover:bg-red-500 text-white ${
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
