import React from "react";

export const TopNav = () => {
  // hide qr menu
  const handleHoverQr = () => {
    document.getElementById("hide-qr").classList.toggle("hidden");
  };
  return (
    <div className="flex xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto leading-8 font-medium text-white text-sm">
      <div className="flex grow">
        <div className="relative pr-8" onMouseEnter={handleHoverQr} onMouseLeave={handleHoverQr}>
          <div className="hover-opacity cursor-pointer hover:opacity-70">Tải ứng dụng</div>
          <div className="absolute w-full h-2 top-[20px]"></div>
          <div
            id="hide-qr"
            className="absolute z-30 w-[220px] bg-white flex items-center justify-center flex-col shadow-md pt-3 hidden"
          >
            <div className="">
              <img src="../../../src/assets/img/qr_code.png" alt="QR CODE" />
            </div>
            <div className="flex w-full justify-evenly">
              <a href="#" className="h-[44px] hover:opacity-60">
                <img className="h-5" src="../../../src/assets/img/google_play.png" alt="GOOGLE" />
              </a>
              <a href="#" className="h-[44px] hover:opacity-70">
                <img className="h-5" src="../../../src/assets/img/apple_store.png" alt="APPLE" />s
              </a>
            </div>
          </div>
        </div>
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
