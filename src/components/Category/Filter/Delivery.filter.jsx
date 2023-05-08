import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Delivery = () => {
  const { filter } = useSelector((state) => state.category);
  const [isShow, setIsShow] = useState(true);
  const [isState, setIsState] = useState(null);

  const dispatch = useDispatch();

  const setFilterStore = (value) => {
    let newFilter = JSON.parse(JSON.stringify(filter));

    Array.from(document.querySelectorAll('input[name="delivery"]:checked')).forEach((item) => (item.checked = false));

    const isSP = value === "sp";
    if ((isSP && isState === "sp") || (!isSP && isState === "notsp")) {
      setIsState(null);
      delete newFilter.isExpressDelivery;
    } else {
      setIsState(isSP ? "sp" : "notsp");
      newFilter.isExpressDelivery = isSP ? true : false;
    }

    dispatch(setFilter(newFilter));
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-semibold grow text-sm ml-1">Phương thức vận chuyển</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore("sp")}>
          <input
            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="delivery"
            checked={isState === "sp"}
            readOnly
          />
          <label className="ml-2 cursor-pointer" htmlFor="sp">
            Nhanh
          </label>
        </div>
        <div className="mb-4" onClick={() => setFilterStore("notsp")}>
          <input
            className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="delivery"
            value="notsp"
            checked={isState === "notsp"}
            readOnly
          />
          <label className="ml-2 cursor-pointer" htmlFor="notsp">
            Tiêu chuẩn
          </label>
        </div>
      </div>
    </div>
  );
};
