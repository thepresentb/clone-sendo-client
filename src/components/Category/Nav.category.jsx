import React from "react";
import { useSelector } from "react-redux";

export const Nav = () => {
  const { filter, list, selectedCategoryId } = useSelector((state) => state.category);
  const { paginatedProducts } = useSelector((state) => state.product);

  let nameFilter = "";
  list?.map((item) => {
    item.detail.map((itemDetail) => {
      if (itemDetail._id === filter?.categoryDetailId) {
        nameFilter = itemDetail.name;
      }
    });
  });

  return (
    <div
      className="hidden
     sm:flex flex-col flex-start w-full items-start xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto"
    >
      <div className="text-sm text-blue-600">
        <a href="/">Sendo.vn</a>
        <div className="inline relative top-[-1px]">
          <span className="text-[11px] mb-1 text-slate-700 mx-2">/</span>
        </div>
        <a href="/">{filter?.name ? filter.name : nameFilter ? nameFilter : "Tất cả sản phẩm"}</a>
        <div className="inline relative top-[-1px]">
          <span className="text-[11px] mb-1 text-slate-700 mx-2">/</span>
        </div>
        <a href="/" className="text-slate-500">
          Tất cả
        </a>
      </div>
      <div className="flex mt-1">
        <span className="text-xl font-bold">
          {filter?.name ? filter.name : nameFilter ? nameFilter : "Tất cả sản phẩm"}
        </span>
        <span className="ml-2 text-sm text-gray-800 mt-1">Tìm thấy {paginatedProducts?.total} sản phẩm</span>
      </div>
    </div>
  );
};
