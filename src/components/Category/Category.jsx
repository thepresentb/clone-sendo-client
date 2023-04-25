import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../Body/Products/css/products.css";
import { setIsCategoryPage } from "../../redux/slice/category.slice";
import { Nav } from "./Nav.category";
import { Product } from "./Product.category";
import { Filter } from "./Filter/Filter";

export const Category = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsCategoryPage(true));
  }, []);

  return (
    <div className=" bg-gray-100 pt-4">
      <div className="flex flex-col items-center justify-center mt-[105px]">
        <Nav />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="hidden  relative mt-4 lg:col-span-1 xl:col-span-1 lg:flex xl:flex">
            <Filter />
          </div>
          <div className="col-span-full lg:col-span-3 xl:col-span-4">
            <div className="flex items-center text-center text-[14px] h-14 my-4 rounded bg-white shadow-center">
              <p className="mx-4  text-[16px]">Sắp xếp theo :</p>
              <div className="h-[44px] cursor-pointer hover:opacity-60 leading-[44px] mx-3 bg-slate-200 w-[130px] rounded bg-orange-600 text-white">
                Đánh giá sao
              </div>
              <div className="h-[44px] cursor-pointer hover:opacity-60 leading-[44px] mx-3 bg-slate-200 w-[130px] rounded">
                Giá cả
              </div>
              <div className="h-[44px] cursor-pointer hover:opacity-60 leading-[44px] mx-3 bg-slate-200 w-[130px] rounded">
                Mới nhất
              </div>
            </div>
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};
