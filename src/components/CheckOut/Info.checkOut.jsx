import React from "react";
import Clipboard from "../../assets/svg/Clipboard";
import { useSelector } from "react-redux";
import { StringHelper } from "../../utils/StringHelper";

export const Info = () => {
  const { bag } = useSelector((state) => state.bag);

  return (
    <div className="py-4 mt-4 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center">
      <div className="flex mb-8">
        <div className="ml-4 mr-2 ">
          <Clipboard size={20} color={"red"} />
        </div>
        <p className="font-semibold text-base grow">Thông tin đơn hàng</p>
      </div>
      <div className="pl-10">
        <div className="">
          {bag?.map((item) => {
            if (item.isChose === false) return;

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
              <div className="mr-10 pb-3 border-b-[1px] border-slate-300 mt-5">
                <div className="text-xs opacity-70">
                  Bán bởi shop:
                  <span className="font-semibold ml-1">{item.productId.shopId.name}</span>
                </div>
                <div className="flex mt-3">
                  <div className="flex grow">
                    <img className="w-12 shadow-center mr-4" src={item.productId.imgUrl} alt="" />
                    <div className=" w-[500px]">
                      <div className="text-[16px] pr-10 truncate font-medium">{item.productId.name}</div>
                      <div className="text-sm text-blue-700 font-semibold">
                        {StringHelper.toPrice(item.productId.price)}đ
                        {saleStatus ? <span className="ml-2 text-xs text-red-500 ">{`(-30%)`}</span> : null}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold">x{item.quantity}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 mr-10">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ghi chú cho shop"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
