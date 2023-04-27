import React from "react";
import { Slide } from "./SlideTop.filterMobile";
import { FilterMiddle } from "./FilterMiddle.filterMobile";

export const FilterMobile = () => {
  return (
    <div className="sm:hidden bg-white mb-4">
      <Slide />
      <FilterMiddle />
    </div>
  );
};
