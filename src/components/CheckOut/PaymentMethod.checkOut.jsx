import React from "react";
import Database from "../../assets/svg/Database";
import { useDispatch } from "react-redux";
import { setPaymentMethodCode } from "../../redux/slice/checkOut.slice";

export const PaymentMethod = () => {
  const dispatch = useDispatch();

  const handleCheck = (id) => {
    const inputElements = document.getElementsByName("payment_method");
    for (let inputElement of inputElements) {
      inputElement.checked = false;
    }
    document.getElementById(id).checked = true;
    dispatch(setPaymentMethodCode(id));
  };

  return (
    <div className="py-4 mt-4 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center">
      <div className="flex mb-6">
        <div className="ml-4 mr-2 mt-[2px]">
          <Database size={20} color={"red"} />
        </div>
        <p className="font-semibold text-base grow">Phương thức thanh toán</p>
      </div>
      <div className="flex pl-6 shadow-center mx-8 py-2 rounded">
        <div className="flex items-center mr-5 pb-2">
          <input
            className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="payment_method"
            id="CARD"
            onClick={() => handleCheck("CARD")}
            readOnly
            checked
          />
        </div>
        <div className="grow">
          <div className="flex">
            <p className="font-medium text-sm grow text-slate-600">Thanh toán bằng thẻ</p>
          </div>
          <div className="text-sm mt-1 opacity-50">Chấp nhận tất cả các loại thẻ nội địa và thẻ VISA</div>
        </div>
      </div>
      <div className="flex pl-6 shadow-center mx-8 py-2 rounded mt-4">
        <div className="flex items-center mr-5 pb-2">
          <input
            className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="payment_method"
            id="CASH"
            onClick={() => handleCheck("CASH")}
            readOnly
          />
        </div>
        <div className="grow">
          <div className="flex">
            <p className="font-medium text-sm grow text-slate-600">Thanh toán bằng tiền mặt</p>
          </div>
          <div className="text-sm mt-1 opacity-50">Trả tiền khi nhận hàng</div>
        </div>
      </div>
      <div className="flex pl-6 shadow-center mx-8 py-2 rounded mt-4">
        <div className="flex items-center mr-5 pb-2">
          <input
            className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
            type="checkbox"
            name="payment_method"
            id="SENPAY"
            onClick={() => handleCheck("SENPAY")}
            readOnly
          />
        </div>
        <div className="grow">
          <div className="flex">
            <p className="font-medium text-sm grow text-slate-600">Thanh toán bằng ví senpay</p>
          </div>
          <div className="text-sm mt-1 opacity-50">Số dư : 100.000đ</div>
        </div>
      </div>
    </div>
  );
};
