import React from "react";
import { FlashSale } from "./FlashSale";
import { TradeMark } from "./TradeMark";
import { Utilities } from "./Utilities";
import { Products } from "./Products/Products";

export const Body = () => {
  return (
    <div className="h-[3000px] bg-gray-100 pt-4">
      <FlashSale></FlashSale>
      <TradeMark></TradeMark>
      <Utilities></Utilities>
      <Products></Products>
    </div>
  );
};
