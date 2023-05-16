import React, { useState } from "react";
import { Login } from "../../Authen/Login";
import { useDispatch, useSelector } from "react-redux";
import { addUser, toggleAuthenState } from "../../../redux/slice/user.slice";

export const TopNav = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // hide qr menu
  const handleHoverQr = () => {
    document.getElementById("hide-qr").classList.toggle("hidden");
  };
  return (
    <div className="bg-topnav h-8">
      <div className="hidden sm:flex  xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto leading-8 font-bold text-[12px] text-white">
        <div className="flex">
          <div className="relative pr-6" onClick={handleHoverQr}>
            <div className="text-center justify-items-center hover-opacity cursor-pointer hover:opacity-70 font-bold text-[12px]">
              Tải ứng dụng
            </div>
            <div
              id="hide-qr"
              className="absolute z-30 w-[145px] p-2 rounded bg-white flex items-center justify-center flex-col shadow-md hidden"
            >
              <div className="">
                <img src="../../../src/assets/img/qr_code.png" alt="QR CODE" />
              </div>
              <p className="text-slate-800 text-xs my-1">Quét để tải ứng dụng</p>
            </div>
          </div>
          {/* <div className="flex cursor-pointer">
            <div
              className={`pr-2 hover:opacity-80 `}
              onClick={() => {
                if (user) return;
                dispatch(toggleAuthenState("register"));
              }}
            >
              {user ? user.username : "Đăng kí"}
            </div>
            <div className="w-[2px] bg-white h-[24px] relative top-[4px]"></div>
            {user ? (
              <div
                className="pl-2 hover:opacity-80 text-[13px]"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  return dispatch(addUser(null));
                }}
              >
                Đăng Xuất
              </div>
            ) : (
              <div
                className="pl-2 hover:opacity-80"
                onClick={() => {
                  dispatch(toggleAuthenState("login"));
                }}
              >
                Đăng nhập
              </div>
            )}
          </div> */}
        </div>
        {/* <div className="flex cursor-pointer"> */}
        <div className="pr-6 hover:opacity-80">Chăm sóc khách hàng</div>
        <div className="hover:opacity-80">Kiểm tra đơn hàng</div>
        {/* </div> */}
      </div>
    </div>
  );
};
