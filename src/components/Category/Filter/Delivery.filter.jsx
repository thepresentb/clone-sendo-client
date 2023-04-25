import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";

export const Delivery = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-bold grow">Phương thức vận chuyển</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="sp" name="delivery" value="sp" />
          <label className="ml-2 cursor-pointer" htmlFor="sp">
            Nhanh
          </label>
        </div>
        <div className="mb-4">
          <input className="mb-1" type="radio" id="notsp" name="delivery" value="notsp" />
          <label className="ml-2 cursor-pointer" htmlFor="notsp">
            Tiêu chuẩn
          </label>
        </div>
      </div>
    </div>
  );
};
