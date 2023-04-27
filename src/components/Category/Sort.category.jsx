import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderBy } from "../../redux/slice/category.slice";

export const Sort = () => {
  const { orderBy } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleSetOrderBy = (name) => {
    const newOrderBy = {};
    newOrderBy[name] = name === "price" ? 1 : -1;
    dispatch(setOrderBy(newOrderBy));
  };

  return (
    <div className="hidden sm:flex items-center text-center text-[14px] h-14 my-4 rounded bg-white shadow-center">
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
          orderBy?.price === 1 ? "bg-orange-600 text-white" : "bg-slate-200"
        }  w-[130px] rounded focus:bg-orange-600 focus:text-white`}
        onClick={() => handleSetOrderBy("price")}
      >
        Giá cả
      </button>
    </div>
  );
};
