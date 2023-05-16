import React from "react";
import ChevronDown from "../../assets/svg/ChevornDown";
import { FOOTERSEARCH } from "../../data/searchTop";

export const Info = () => {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col sm:flex-row py-6 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto text-white text-xs">
        <div className="w-full sm:w-6/12 pr-[6rem] font-normal">
          <p className="pb-[4px] font-bold">Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT</p>
          <p className="py-[8px]">
            Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ 20, ngày 26/04/2022.
          </p>
          <p className="py-[8px]">Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.</p>
          <p className="py-[8px]">
            Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường
            Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
          </p>
          <p className="py-[7px]">Email: lienhe@sendo.vn</p>
          <div className="flex pt-[6px]">
            <div>
              <img
                className="w-[108px] mr-5"
                src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                alt=""
              />
            </div>
            <div>
              <img className="w-[108px]" src="https://media3.scdn.vn/img4/2020/12_16/h6lEMGIAt4Uapd0Mls34.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full sm:w-6/12 mt-10 sm:mt-0">
          <div className="font-bold">Đăng ký nhận bản tin ưu đãi khủng từ Sendo</div>
          <div className="w-[90%] sm:w-full flex my-3">
            <div className=" mr-1">
              <input
                className="h-8 w-[327px] rounded p-2 text-sm focus-visible:outline-0 text-black"
                placeholder="Email của bạn là"
                autoComplete="off"
              ></input>
            </div>
            <button
              type="submit"
              value="Submit"
              aria-label="button submit"
              className="h-[32px] w-[109px] rounded box-border font-bold outline-none bg-red-600 hover:bg-gray-100 text-sm"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
