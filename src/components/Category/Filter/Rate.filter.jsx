import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Rate = () => {
  const [isShow, setIsShow] = useState(true);
  const { filter } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const setFilterStore = (rangeRate) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.rate = {
      $gte: rangeRate[0],
      $lte: rangeRate[1],
    };

    dispatch(setFilter(newFilter));
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-semibold grow text-sm ml-1 leading-6">Đánh giá</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore([4, 5])}>
          <input className="mb-1" type="radio" id="5" name="price" value="5" />
          <label className="ml-2 cursor-pointer" htmlFor="5">
            4-5 sao
          </label>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore([3, 4])}>
          <input className="mb-1" type="radio" id="4" name="price" value="4" />
          <label className="ml-2 cursor-pointer" htmlFor="4">
            3-4 sao
          </label>
        </div>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore([2, 3])}>
          <input className="mb-1" type="radio" id="3" name="price" value="3" />
          <label className="ml-2 cursor-pointer" htmlFor="3">
            2-3 sao
          </label>
        </div>
        <div className="mb-4" onClick={() => setFilterStore([1, 2])}>
          <input className="mb-1" type="radio" id="2" name="price" value="2" />
          <label className="ml-2 cursor-pointer" htmlFor="2">
            1-2 sao
          </label>
        </div>
      </div>
    </div>
  );
};
