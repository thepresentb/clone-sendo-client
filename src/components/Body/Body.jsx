import React from "react";
import { FlashSale } from "./FlashSale";
import { TradeMark } from "./TradeMark";

export const Body = () => {
  return (
    <div className="h-[3000px] bg-gray-100 pt-4">
      <FlashSale></FlashSale>
      <TradeMark></TradeMark>
    </div>
  );
};
