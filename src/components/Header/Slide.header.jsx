import React from "react";
import { useSelector } from "react-redux";

export const SlideHeader = () => {
  const categoryList = useSelector((state) => state.category?.list);
  const selectedCategoryId = useSelector((state) => state.category?.selectedCategoryId);

  return (
    <div className="mt-[140px] mb-8 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      {categoryList.map((item) => {
        return (
          <div
            className={`${
              item.category._id === selectedCategoryId ? "flex" : "hidden"
            } flex-wrap mx-auto w-[550px] xl:w-full`}
            key={item.category._id}
          >
            {item.detail.map((itemDetail) => {
              return <SectionItem itemDetail={itemDetail} key={itemDetail._id} />;
            })}
          </div>
        );
      })}
      <a href="#">
        <img src="https://media3.scdn.vn/img4/2023/04_17/5AWi058TEIkxz1aSVVKZ.png" />
      </a>
    </div>
  );
};

const SectionItem = ({ itemDetail }) => {
  return (
    <div className="w-[100px] m-[5px] p-[10px] bg-white hover:scale-110">
      <a href="#">
        <img
          data-src={itemDetail.imgUrl}
          src={itemDetail.imgUrl}
          alt="shortcut-block"
          className="w-[44px] mx-[17px] mt-4"
        />
        <div className="text-xs text-center mt-4">{itemDetail.name}</div>
      </a>
    </div>
  );
};
