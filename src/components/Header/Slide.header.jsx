import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slice/category.slice";
import { Link, redirect } from "react-router-dom";

export const SlideHeader = () => {
  const { list, selectedCategoryId, isCategoryPage } = useSelector((state) => state.category);
  const { isBagPage } = useSelector((state) => state.bag);
  const { selectedProduct } = useSelector((state) => state.product);
  const { isCheckOutPage } = useSelector((state) => state.checkOut);

  return (
    <div
      className={`flex flex-col sm:mt-[140px] mt-[180px] mb-8 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] sm:mx-auto ${
        isCategoryPage || selectedProduct || isBagPage || isCheckOutPage ? "hidden" : null
      } `}
    >
      {list.map((item) => {
        return (
          <div
            className={`${
              item.category._id === selectedCategoryId ? "flex" : "hidden"
            } flex-wrap mx-auto w-[94vw] sm:w-[550px] xl:w-full`}
            key={item.category._id}
          >
            {item.detail.map((itemDetail) => {
              return <SectionItem itemDetail={itemDetail} key={itemDetail._id} />;
            })}
          </div>
        );
      })}
      <a href="#" className="">
        <img className="hidden sm:block" src="https://media3.scdn.vn/img4/2023/04_17/5AWi058TEIkxz1aSVVKZ.png" />
        <img className="sm:hidden mt-4" src="https://media3.scdn.vn/img4/2023/04_25/xkOqjNQWEy3JpEktImuQ.png" alt="" />
      </a>
    </div>
  );
};

const SectionItem = ({ itemDetail }) => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state?.category);

  const setFilterStore = (id) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.categoryDetailId = id;
    if (newFilter.createdAt) delete newFilter.createdAt;
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="w-[20%] sm:w-[100px] sm:m-[5px] p-2 sm:p-[10px] bg-white hover:scale-110">
      <Link to="category" onClick={() => setFilterStore(itemDetail._id)}>
        <img
          data-src={itemDetail.imgUrl}
          src={itemDetail.imgUrl}
          alt="shortcut-block"
          className="w-[38px] sm:w-[44px] m-auto sm:mx-[17px] sm:mt-4"
        />
        <div className=" text-[11px] sm:text-xs text-center mt-2 sm:mt-4">{itemDetail.name}</div>
      </Link>
    </div>
  );
};
