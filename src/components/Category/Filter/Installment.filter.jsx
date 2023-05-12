import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Installment = () => {
  const { filter } = useSelector((state) => state.category);
  const [isShow, setIsShow] = useState(true);
  const [isState, setIsState] = useState(null);

  const dispatch = useDispatch();

  const setFilterStore = (value) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    Array.from(document.querySelectorAll('input[name="installment"]:checked')).forEach(
      (item) => (item.checked = false)
    );

    const isSP = value === "sp";
    if ((isSP && isState === "sp") || (!isSP && isState === "notsp")) {
      setIsState(null);
      delete newFilter?.isInstallment;
    } else {
      setIsState(isSP ? "sp" : "notsp");
      newFilter.isInstallment = isSP ? true : false;
    }

    dispatch(setFilter(newFilter));
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-semibold grow text-sm ml-1 leading-6">Hỗ trợ trả góp</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore("sp")}>
          <input
            className="w-4 h-4 text-red-600 bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="installment"
            checked={isState === "sp"}
            readOnly
          />
          <label className="ml-2 cursor-pointer" htmlFor="sp">
            Trả góp Kredivo
          </label>
        </div>
        <div className="mb-4" onClick={() => setFilterStore("notsp")}>
          <input
            className="w-4 h-4 text-red-600 bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0"
            type="checkbox"
            checked={isState === "notsp"}
            name="installment"
            readOnly
          />
          <label className="ml-2 cursor-pointer" htmlFor="notsp">
            Không hỗ trợ
          </label>
        </div>
      </div>
    </div>
  );
};
