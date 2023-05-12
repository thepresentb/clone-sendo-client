import React, { useState } from "react";
import { StringHelper } from "../../utils/StringHelper";
import { useDispatch, useSelector } from "react-redux";
import { addBag } from "../../redux/slice/bag.slice";
import { bagApi } from "../../redux/apiRequest/bag.api";
import Trash from "../../assets/svg/Trash";

export const Item = ({ item }) => {
  const { bag } = useSelector((state) => state.bag);
  const dispatch = useDispatch();

  let saleStatus = false;
  if (
    item.productId.saleId !== null &&
    item.productId.saleId.saleStatus &&
    new Date().toISOString() > item.productId.saleId.startAt &&
    new Date().toISOString() < item.productId.saleId.endAt
  ) {
    saleStatus = true;
  }

  const handleClickChose = () => {
    const index = bag.findIndex((bagItem) => bagItem._id == item._id);
    const newBag = JSON.parse(JSON.stringify(bag));
    newBag[index].isChose = !item.isChose;
    console.log(newBag);
    dispatch(addBag(newBag));
  };

  const handleClickPrev = (e) => {
    e.stopPropagation();
    if (item.quantity > 1) {
      const index = bag.findIndex((bagItem) => bagItem._id == item._id);
      const newBag = JSON.parse(JSON.stringify(bag));
      --newBag[index].quantity;
      dispatch(addBag(newBag));
    }
  };

  const handleClickIncre = (e) => {
    e.stopPropagation();
    if (item.quantity < item.productId.quantity) {
      const index = bag.findIndex((bagItem) => bagItem._id == item._id);
      const newBag = JSON.parse(JSON.stringify(bag));
      ++newBag[index].quantity;
      dispatch(addBag(newBag));
    }
  };

  const handleClickDelete = (e) => {
    e.stopPropagation();
    bagApi.deleteBag(dispatch, { bagId: item._id });
  };

  return (
    <div className={`justify-between mb-6 rounded-lg bg-white py-6 pl-4 pr-2 shadow-md sm:flex sm:justify-start`}>
      <div className="flex items-center mr-4">
        <input
          className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
          type="checkbox"
          name="delivery"
          // checked={isState === "sp"}
          readOnly
          onClick={handleClickChose}
        />
      </div>
      <img src={item.productId.imgUrl} alt="product-image" className="w-full rounded-lg sm:w-[100px] object-contain" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0 mr-4">
          <h2 className="text-md font-semibold mb-8 w-full whitespace-normal text-gray-900 h-[3.25rem] truncate">
            {item.productId.name}
          </h2>
          <p className="text-xs text-gray-700 my-4">{item.productId.brandId.name}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-2 sm:mt-0 sm:block sm:space-x-4">
          <div className="flex  mx-4">
            <div
              className={`h-8 w-8 text-[40px] z-10 text-center leading-7 rounded bg-slate-200 opacity-50 ${
                item.quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"
              } `}
              onClick={handleClickPrev}
            >
              -
            </div>
            <div className="h-8 w-12 text-center leading-8 mx-2 border-[1px] rounded border-stale-500">
              {item.quantity}
            </div>
            <div
              className={`h-8 w-8 text-[24px] z-10 text-center leading-8 rounded bg-slate-200 opacity-50 ${
                item.quantity < item.productId.quantity ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={handleClickIncre}
            >
              +
            </div>
          </div>
          <div className="flex h-10 flex-col items-center">
            <p className="text-sm w-full mr-8 text-end font-semibold">
              {StringHelper.toPrice(item.productId.price * item.quantity)}đ
            </p>
            {saleStatus ? (
              <p className="text-xs w-full mr-8 text-end text-red-500">- {item.productId.saleId.salePercent}%</p>
            ) : null}
          </div>
          <div className="flex justify-end">
            <div
              className="svg-icon w-10 p-2 rounded mr-4 hover:bg-slate-200 cursor-pointer"
              viewBox="0 0 20 20"
              onClick={handleClickDelete}
            >
              <Trash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
