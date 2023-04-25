import React, { useState } from "react";
import { HideIcon } from "./HideIcon.filter";

export const Rate = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-bold grow">Đánh giá</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 ${isShow ? "" : "hidden"} text-sm`}>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="5" name="delivery" value="5" />
          <label className="ml-2 cursor-pointer" htmlFor="5">
            4-5 sao
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="4" name="delivery" value="4" />
          <label className="ml-2 cursor-pointer" htmlFor="4">
            3-4 sao
          </label>
        </div>
        <div className="mb-2 cursor-pointer">
          <input className="mb-1" type="radio" id="3" name="delivery" value="3" />
          <label className="ml-2 cursor-pointer" htmlFor="3">
            2-3 sao
          </label>
        </div>
        <div className="mb-4">
          <input className="mb-1" type="radio" id="2" name="delivery" value="2" />
          <label className="ml-2 cursor-pointer" htmlFor="2">
            1-2 sao
          </label>
        </div>
      </div>
    </div>
  );
};
