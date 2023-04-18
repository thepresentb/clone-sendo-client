import React from "react";

export const SubNav = () => {
  return (
    <div className="flex h-[32px] w-full px-16 bg-red-600 leading-8 font-medium text-white text-sm">
      <div className="flex grow">
        <span className="cursor-pointer pr-8 hover:opacity-80">Tải ứng dụng</span>
        <div className="flex cursor-pointer">
          <div className="pr-2 hover:opacity-80">Đăng kí</div>
          <div className="w-[2px] bg-white h-[24px] relative top-[4px]"></div>
          <div className="pl-2 hover:opacity-80">Đăng nhập</div>
        </div>
      </div>
      <div className="flex cursor-pointer">
        <div className="pr-8 hover:opacity-80">Chăm sóc khách hàng</div>
        <div className="hover:opacity-80">Kiểm tra đơn hàng</div>
      </div>
    </div>
  );
};
