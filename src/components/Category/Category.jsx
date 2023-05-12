import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/products.css";
import { setIsCategoryPage, setOrderBy } from "../../redux/slice/category.slice";
import { Nav } from "./Nav.category";
import { Product } from "./Product.category";
import { Filter } from "./Filter/Filter";
import { Sort } from "./Sort.category";
import { FilterMobile } from "./FilterMobile/FilterMobile";

export const Category = () => {
  const { paginatedProducts } = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsCategoryPage(true));
    return () => {
      dispatch(setIsCategoryPage(false));
    };
  }, [paginatedProducts]);

  return (
    <div className=" bg-gray-100 pt-4">
      <div className="flex flex-col items-center justify-center sm:mt-[105px] mt-[54px] ">
        <Nav />
        <div className="grid min-h-screen grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="hidden  relative mt-4 lg:col-span-1 xl:col-span-1 lg:flex xl:flex">
            <Filter />
          </div>
          <div className={`col-span-full lg:col-span-3 xl:col-span-4 mb-10`}>
            <Sort />
            <FilterMobile />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};
