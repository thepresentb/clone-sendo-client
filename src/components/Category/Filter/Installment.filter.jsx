import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Installment = () => {
  const { filter } = useSelector((state) => state.category);
  const [isShow, setIsShow] = useState(true);

  const dispatch = useDispatch();

  const setFilterStore = (value) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.isInstallment = value;

    dispatch(setFilter(newFilter));
  };

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-bold grow">Hỗ trợ trả góp</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer" onClick={() => setFilterStore(true)}>
          <input className="mb-1" type="radio" id="sp" name="installment" value="sp" />
          <label className="ml-2 cursor-pointer" htmlFor="sp">
            Trả góp Kredivo
          </label>
        </div>
        <div className="mb-4" onClick={() => setFilterStore(false)}>
          <input className="mb-1" type="radio" id="notsp" name="installment" value="notsp" />
          <label className="ml-2 cursor-pointer" htmlFor="notsp">
            Không hỗ trợ
          </label>
        </div>
      </div>
    </div>
  );
};
