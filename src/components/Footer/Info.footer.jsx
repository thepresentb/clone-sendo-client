import React from "react";

export const Info = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex p-8 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto text-white text-xs">
        <div className="w-6/12 pr-20">
          <p className="py-2 font-bold">Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</p>
          <p className="py-2">Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.</p>
          <p className="py-2">
            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường
            Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
          </p>
          <p className="py-2">Email: lienhe@sendo.vn</p>
          <div className="flex">
            <div>
              <img
                className="w-[108px] mr-4"
                src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                alt=""
              />
            </div>
            <div>
              <img className="w-[108px]" src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <div className="font-bold ml-3">Đăng ký nhận bản tin ưu đãi khủng từ Sendo</div>
          <div className="w-full flex mx-2 my-2">
            <div className="grow mr-1">
              <input
                className="h-8 w-full rounded p-4 text-sm focus-visible:outline-0 text-black"
                placeholder="Email Address"
                autoComplete="off"
              ></input>
            </div>
            <button
              type="submit"
              value="Submit"
              aria-label="button submit"
              className="h-[34px] w-[100px] rounded box-border font-bold outline-none bg-red-600 hover:bg-gray-100 text-sm"
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
