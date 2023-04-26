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
    <div className="flex flex-col flex-start w-full items-start xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      <div className="text-sm text-blue-600">
        <a href="/">Sendo.vn</a>
        <span className="ml-2 text-gray-700">/ Kết quả tìm kiếm</span>
      </div>
      <div className="">
        <span className="text-xl font-bold">
          {filter?.name ? filter.name : nameFilter ? nameFilter : "Tất cả sản phẩm"}
        </span>
        <span className="ml-4 text-sm text-gray-800">tim thay {paginatedProducts?.total} san pham</span>
      </div>
    </div>
  );
};
