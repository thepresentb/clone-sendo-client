import React from "react";
import ChevronsDown from "../../assets/svg/ChevronsDown";
import ShoppingCart from "../../assets/svg/ShoppingCart";

export const ShipMethod = () => {
  return (
    <div className="py-4 mt-4 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center">
      <div className="flex">
        <div className="ml-4 mr-2 ">
          <ShoppingCart size={20} color={"red"}></ShoppingCart>
        </div>
        <p className="font-semibold text-base grow">Phương thức vận chuyển</p>
      </div>
    </div>
  );
};
