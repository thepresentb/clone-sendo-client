import React, { useEffect, useState } from "react";
import ChevronsDown from "../../assets/svg/ChevronsDown";
import ShoppingCart from "../../assets/svg/ShoppingCart";
import Compass from "../../assets/svg/Compass";
import { ghnApi } from "../../redux/apiRequest/ghn.api";
import { useSelector } from "react-redux";
import { StringHelper } from "../../utils/StringHelper";

export const ShipMethod = () => {
  const { selectedAddress } = useSelector((state) => state.checkOut);
  const [shipPrice, setShipPrice] = useState(0);
  const d = new Date();

  useEffect(() => {
    const getFee = async () => {
      const res = await ghnApi.getFee(selectedAddress?.districtId, selectedAddress?.wardCode);
      setShipPrice(res.total);
    };
    getFee();
  }, [selectedAddress]);

  return (
    <div className="py-4 mt-4 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center">
      <div className="flex mb-4">
        <div className="ml-4 mr-2 ">
          <ShoppingCart size={20} color={"red"}></ShoppingCart>
        </div>
        <p className="font-semibold text-base grow">Phương thức vận chuyển</p>
      </div>
      <div className="flex pl-10">
        <div className="flex items-center mr-5 pb-2">
          <input
            className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="delivery"
            checked
            readOnly
          />
        </div>
        <div className="grow">
          <div className="flex">
            <div className=" mr-2 mt-[1px]">
              <Compass size={20} color={"red"} />
            </div>
            <p className="font-medium text-base grow">Giao tiêu chuẩn</p>
            <div className="text-[15px] flex  mr-4 ">
              <div className="text-red-500 font-semibold mr-2 mt-[1px]">{StringHelper.toPrice(shipPrice)}đ</div>
            </div>
          </div>
          <div className="text-sm mt-1 opacity-60">
            Dự kiến {d.getDay() === 7 ? "chủ nhật" : `thứ ${d.getDay() + 1}`} , 19/5
          </div>
        </div>
      </div>
    </div>
  );
};
