import React from "react";
import { FlashSale } from "./FlashSale.body";
import { TradeMark } from "./TradeMark.body";
import { Utilities } from "./Utilities.body";
import { Products } from "./Products/Products";

export const Body = () => {
  return (
    <div className=" bg-gray-100 pt-4">
      <FlashSale></FlashSale>
      <TradeMark></TradeMark>
      <Utilities></Utilities>
      <Products></Products>
    </div>
  );
};
