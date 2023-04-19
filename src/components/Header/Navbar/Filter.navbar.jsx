import React, { useState } from "react";
import { FILTER } from "../../../data";

export const Filter = () => {
  const [filterData, setFilterData] = useState([]);
  // hide filter
  const handleHoverFilter = (reset = false) => {
    reset && setFilterData([]);
    document.getElementById("hide-filter").classList.toggle("hidden");
  };

  // hide filter children
  const handleHoverFilterChildren = (list) => {
    setFilterData(list);
    document.getElementById("hide-filter-children").classList.remove("hidden");
  };
  return (
    <div className="relative" onMouseEnter={handleHoverFilter} onMouseLeave={() => handleHoverFilter(true)}>
      <div className="mt-4 ml-10 mr-4 cursor-pointer hover:opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="h-6 w-6"
        >
          <path
            d="M9 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5zm0 2H4v5h5V4zm11-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5zm0 2h-5v5h5V4zM9 13a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5zm0 2H4v5h5v-5zm8.5-2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z"
            fill="#fff"
            fillRule="nonzero"
          ></path>
        </svg>
      </div>
      <div id="hide-filter" className="absolute top-[54px] flex w-fit bg-white shadow-lg rounded hidden">
        <div className={`p-3 mx-2 ${filterData.length !== 0 && "border-r-2 border-gray-200"} overflow-y-scroll`}>
          {FILTER.map((item, index) => {
            return (
              <div
                className="p-2 whitespace-nowrap flex hover:bg-red-100 hover:translate-x-1 rounded cursor-pointer"
                key={index}
                onMouseEnter={() => handleHoverFilterChildren(item.list)}
              >
                <p className="grow">{item.name}</p>
                <div className="ml-6">
                  <svg className="svg-icon w-6" viewBox="0 0 20 20">
                    <path
                      d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                      fill="#000"
                      fillRule="nonzero"
                    ></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        <div
          id="hide-filter-children"
          className={`min-w-[30vw] ${filterData.length === 0 && "hidden"} overflow-y-scroll`}
        >
          <FilterItem filterData={filterData} />
        </div>
      </div>
    </div>
  );
};

const FilterItem = ({ filterData }) => {
  return (
    <div className="p-3 ml-2">
      {filterData?.length > 0 &&
        filterData.map((item) => {
          return (
            <div className="p-2 whitespace-nowrap flex hover:bg-gray-100 rounded cursor-pointer">
              <p className="grow text-sm cursor-pointer">{item}</p>
            </div>
          );
        })}
    </div>
  );
};
