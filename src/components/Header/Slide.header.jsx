import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slice/category.slice";
import { redirect } from "react-router-dom";

export const SlideHeader = () => {
  const categoryList = useSelector((state) => state.category?.list);
  const selectedCategoryId = useSelector((state) => state.category?.selectedCategoryId);
  const isCategoryPage = useSelector((state) => state.category?.isCategoryPage);

  return (
    <div
      className={`mt-[140px] mb-8 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto ${
        isCategoryPage ? "hidden" : ""
      }`}
    >
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
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state?.category);

  const setLocalStorage = (id) => {
    // let filter = JSON.parse(localStorage.getItem("filter"));
    let newFilter = {};
    // if (filter && filter?.categoryDetailId) {
    //   newFilter.categoryDetailId = id;
    // } else {
    newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.categoryDetailId = id;

    // }
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="w-[100px] m-[5px] p-[10px] bg-white hover:scale-110">
      <a href="/category" onClick={() => setLocalStorage(itemDetail._id)}>
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
