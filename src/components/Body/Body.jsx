import React, { useEffect } from "react";
import { FlashSale } from "./FlashSale.body";
import { Utilities } from "./Utilities.body";
import { Products } from "./Products";
import { useDispatch } from "react-redux";
import { setIsCategoryPage } from "../../redux/slice/category.slice";
import { TradeMark } from "./TradeMark.body";

export const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsCategoryPage(false));
  }, []);
  return (
    <div className=" bg-gray-100 pt-4">
      <FlashSale></FlashSale>
      <TradeMark></TradeMark>
      <Utilities></Utilities>
      <Products></Products>
    </div>
  );
};
