import React, { useState } from "react";
import { StringHelper } from "../../utils/StringHelper";

export const Item = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  let saleStatus = false;
  if (
    item.productId.saleId !== null &&
    item.productId.saleId.saleStatus &&
    new Date().toISOString() > item.productId.saleId.startAt &&
    new Date().toISOString() < item.productId.saleId.endAt
  ) {
    saleStatus = true;
  }

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img src={item.productId.imgUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0 mr-4">
          <h2 className="text-lg font-bold text-gray-900">{item.productId.name}</h2>
          <p className="text-xs text-gray-700 my-4">{item.productId.brandId.name}</p>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex  mx-4">
            <div
              className={`h-8 w-8 text-[40px]  text-center leading-7 rounded bg-slate-200 opacity-50 ${
                quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"
              } `}
              onClick={() => {
                if (quantity > 1) setQuantity((prev) => --prev);
              }}
            >
              -
            </div>
            <div className="h-8 w-12 text-center leading-8 mx-2 border-[1px] rounded border-stale-500">{quantity}</div>
            <div
              className={`h-8 w-8 text-[24px]  text-center leading-8 rounded bg-slate-200 opacity-50 ${
                quantity < item.productId.quantity ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              onClick={() => {
                if (quantity < item.productId.quantity) setQuantity((prev) => ++prev);
              }}
            >
              +
            </div>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-md  mr-4  font-semibold">{StringHelper.toPrice(item.productId.price)}đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
