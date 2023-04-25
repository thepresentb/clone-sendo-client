import React from "react";

export const Nav = () => {
  return (
    <div className="flex flex-col flex-start w-full items-start xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
      <div className="text-sm text-blue-600">
        <a href="/">Sendo.vn</a>
        <span className="ml-2">/</span>
      </div>
      <div className="">
        <span className="text-xl font-bold">co ki che tao</span>
        <span className="ml-4 text-sm text-gray-800">tim thay 100 san pham</span>
      </div>
    </div>
  );
};
