import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Delivery = () => {
  const { filter } = useSelector((state) => state.category);
  const [isShow, setIsShow] = useState(true);

  const dispatch = useDispatch();

  const setFilterStore = (value) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    if (value) {
      newFilter.isExpressDelivery = value;
    } else {
      delete newFilter?.isExpressDelivery;
    }

    dispatch(setFilter(newFilter));
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-bold grow">Phương thức vận chuyển</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore(true)}>
          <input className="mb-1" type="radio" id="sp" name="delivery" value="sp" />
          <label className="ml-2 cursor-pointer" htmlFor="sp">
            Nhanh
          </label>
        </div>
        <div className="mb-4" onClick={() => setFilterStore(false)}>
          <input className="mb-1" type="radio" id="notsp" name="delivery" value="notsp" />
          <label className="ml-2 cursor-pointer" htmlFor="notsp">
            Tiêu chuẩn
          </label>
        </div>
      </div>
    </div>
  );
};
