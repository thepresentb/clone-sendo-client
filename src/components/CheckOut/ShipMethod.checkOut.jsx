import React from "react";
import ChevronsDown from "../../assets/svg/ChevronsDown";
import ShoppingCart from "../../assets/svg/ShoppingCart";

export const ShipMethod = () => {
  return (
    <div className="py-4 mt-4 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center">
      <div className="flex">
        <div className="ml-4 mr-2 mt-[2px]">
          <ShoppingCart size={20} color={"red"}></ShoppingCart>
        </div>
        <p className="font-semibold text-base grow">Địa chỉ nhận hàng</p>
        <div className="text-sm flex  mr-4 cursor-pointer opacity-70 hover:opacity-50">
          <div className="text-blue-700 mr-2 mt-[1px]">Thay đổi</div>
          <ChevronsDown></ChevronsDown>
        </div>
      </div>
    </div>
  );
};
