import React, { useState } from "react";
import { StringHelper } from "../../utils/StringHelper";
import { useDispatch, useSelector } from "react-redux";
import { addBag } from "../../redux/slice/bag.slice";
import { bagApi } from "../../redux/apiRequest/bag.api";

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
    <div
      className={`justify-between mb-6 rounded-lg ${
        item.isChose ? "bg-green-100" : "bg-white"
      } p-6 shadow-md sm:flex sm:justify-start`}
      onClick={handleClickChose}
    >
      <img src={item.productId.imgUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0 mr-4">
          <h2 className="text-lg font-bold w-full whitespace-normal text-gray-900 h-[5.25rem] truncate">
            {item.productId.name}
          </h2>
          <p className="text-xs text-gray-700 my-4">{item.productId.brandId.name}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-4 sm:mt-0 sm:block sm:space-x-4">
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
            <p className="text-md w-full mr-8 text-end font-semibold">
              {StringHelper.toPrice(item.productId.price * item.quantity)}đ
            </p>
            {saleStatus ? (
              <p className="text-sm w-full mr-8 text-end text-red-500">- {item.productId.saleId.salePercent}%</p>
            ) : null}
          </div>
          <div className="flex justify-end">
            <svg
              className="svg-icon w-10 rounded p-2 mr-4 hover:bg-slate-200 cursor-pointer"
              viewBox="0 0 20 20"
              onClick={handleClickDelete}
            >
              <path
                fill="fff"
                d="M16.471,5.962c-0.365-0.066-0.709,0.176-0.774,0.538l-1.843,10.217H6.096L4.255,6.5c-0.066-0.362-0.42-0.603-0.775-0.538C3.117,6.027,2.876,6.375,2.942,6.737l1.94,10.765c0.058,0.318,0.334,0.549,0.657,0.549h8.872c0.323,0,0.6-0.23,0.656-0.549l1.941-10.765C17.074,6.375,16.833,6.027,16.471,5.962z"
              ></path>
              <path
                fill="fff"
                d="M16.594,3.804H3.406c-0.369,0-0.667,0.298-0.667,0.667s0.299,0.667,0.667,0.667h13.188c0.369,0,0.667-0.298,0.667-0.667S16.963,3.804,16.594,3.804z"
              ></path>
              <path
                fill="fff"
                d="M9.25,3.284h1.501c0.368,0,0.667-0.298,0.667-0.667c0-0.369-0.299-0.667-0.667-0.667H9.25c-0.369,0-0.667,0.298-0.667,0.667C8.583,2.985,8.882,3.284,9.25,3.284z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
