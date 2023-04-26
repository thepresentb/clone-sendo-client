import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Body/Products/css/products.css";
import { setIsCategoryPage, setOrderBy } from "../../redux/slice/category.slice";
import { Nav } from "./Nav.category";
import { Product } from "./Product.category";
import { Filter } from "./Filter/Filter";

export const Category = () => {
  const { orderBy } = useSelector((state) => state.category);
  const { paginatedProducts } = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsCategoryPage(true));
  }, [paginatedProducts]);

  const handleSetOrderBy = (name) => {
    const newOrderBy = {};
    newOrderBy[name] = name === "price" ? 1 : -1;
    dispatch(setOrderBy(newOrderBy));
  };

  return (
    <div className=" bg-gray-100 pt-4">
      <div className="flex flex-col items-center justify-center mt-[105px]">
        <Nav />
        <div className="grid min-h-screen grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="hidden  relative mt-4 lg:col-span-1 xl:col-span-1 lg:flex xl:flex">
            <Filter />
          </div>
          <div className={`col-span-full lg:col-span-3 xl:col-span-4`}>
            <div className="flex items-center text-center text-[14px] h-14 my-4 rounded bg-white shadow-center">
              <p className="mx-4  text-[16px]">Sắp xếp theo :</p>
              <button
                className={`h-[44px] cursor-pointer hover:opacity-60 leading-[44px] mx-3  ${
                  orderBy?.createdAt === -1 ? "bg-orange-600 text-white" : "bg-slate-200"
                }  w-[130px] rounded focus:bg-orange-600 focus:text-white`}
                onClick={() => handleSetOrderBy("createdAt")}
              >
                Mới nhất
              </button>
              <button
                className={`h-[44px] cursor-pointer hover:opacity-60 leading-[44px] mx-3  ${
                  orderBy?.rate === -1 ? "bg-orange-600 text-white" : "bg-slate-200"
                }  w-[130px] rounded focus:bg-orange-600 focus:text-white`}
                onClick={() => handleSetOrderBy("rate")}
              >
                Đánh giá sao
              </button>
              <button
                className={`h-[44px] cursor-pointer hover:opacity-60 leading-[44px] mx-3  ${
                  orderBy?.price === -1 ? "bg-orange-600 text-white" : "bg-slate-200"
                }  w-[130px] rounded focus:bg-orange-600 focus:text-white`}
                onClick={() => handleSetOrderBy("price")}
              >
                Giá cả
              </button>
            </div>
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};
