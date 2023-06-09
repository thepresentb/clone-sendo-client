import React from "react";
import { useSelector } from "react-redux";
import { CategoryDetail } from "./CategoryDetail.filter";
import { Delivery } from "./Delivery.filter";
import { Rate } from "./Rate.filter";
import { Installment } from "./Installment.filter";
import { Price } from "./Price.filter";

export const Filter = () => {
  // scroll handler
  window.addEventListener("scroll", () => {
    let bodyHeight = document.querySelector("body")?.offsetHeight;
    let footerHeight = document.getElementById("footer")?.offsetHeight;
    const filterCateElementStyle = document.querySelector(".filter-cate")?.style;
    let scroll = Math.max(80, 185 - window.scrollY);
    if (bodyHeight - window.innerHeight - window.scrollY <= footerHeight) {
      scroll += bodyHeight - window.innerHeight - window.scrollY - footerHeight - 40;
    }
    if (!filterCateElementStyle) return;
    if (window.scrollY === 0) {
      filterCateElementStyle.position = "absolute";
      filterCateElementStyle.top = 0;
    } else {
      filterCateElementStyle.position = "fixed";
      filterCateElementStyle.top = `${scroll}px`;
    }
  });

  return (
    <div
      className={`filter-cate  fixed h-[90vh] overflow-y-auto scroll-thin  top-[185px]  w-[210px] bg-white rounded-lg `}
    >
      <CategoryDetail />
      <Price />
      <Installment />
      <Delivery />
      <Rate />
    </div>
  );
};
