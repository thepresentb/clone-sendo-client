import React from "react";
import { HideIcon } from "../../Filter/HideIcon.filter";
import "../../../../assets/css/hideScroll.css";
import { Price } from "./Price.filterMobile";
import { Rate } from "./Rate.filterMobile";
import { Installment } from "./Installment.filterMobile";
import { Delivery } from "./Delivery.filterMobile";

export const SlideBot = () => {
  return (
    <div>
      <div className="h-12 hideScroll border-b-2 border-gray-300">
        <div className="flex h-11  w-max ">
          <Price />
          <Rate />
          <Installment />
          <Delivery />
        </div>
      </div>
    </div>
  );
};
