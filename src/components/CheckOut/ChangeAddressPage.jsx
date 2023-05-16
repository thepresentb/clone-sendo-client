import { useDispatch, useSelector } from "react-redux";
import Edit3 from "../../assets/svg/Edit3";
import PlusSquare from "../../assets/svg/PlusSquare";
import { useEffect, useState } from "react";
import { setEditingAddress, setSelectedAddress } from "../../redux/slice/checkOut.slice";

export const ChangeAddressPage = ({ setIsChanging, setChangeAddress }) => {
  const { addressList, selectedAddress } = useSelector((state) => state.checkOut);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center mb-4">
        <h3 className="text-start  py-2 font-semibold  text-xl pl-4">Thay đổi địa chỉ</h3>
      </div>
      {addressList?.map((address) => {
        return (
          <div
            className="py-4 mt-2 xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center"
            key={address._id}
          >
            <div className="text-[15px] flex opacity-70 mx-8">
              <div className="flex items-center mr-6">
                <input
                  className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
                  type="checkbox"
                  name="delivery"
                  readOnly
                  checked={selectedAddress?._id === address?._id}
                  onClick={() => dispatch(setSelectedAddress(address))}
                />
              </div>
              <div className="grow">
                <div>
                  <span className="font-semibold">{address?.receiver}</span>
                  <span className=""> / {address?.phoneNumber}</span>
                </div>
                <div className="">
                  <span>{address?.homeAddress}, </span>
                  <span>{address?.wardName}, </span>
                  <span>{address?.districtName}, </span>
                  <span>{address?.provinceName}</span>
                </div>
                {address?.isDefault ? <div className="text-sm mt-2 text-red-600">ĐỊA CHỈ MẶC ĐỊNH</div> : null}
              </div>
              <div
                className="flex items-center cursor-pointer hover:opacity-60"
                onClick={() => {
                  setIsChanging(true);
                  dispatch(setEditingAddress(address));
                }}
              >
                <Edit3></Edit3>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex xl:max-w-[1308px] mt-8 lg:max-w-[900px] md:max-w-[750px] mx-auto">
        <div
          className=" bg-white w-6/12 rounded shadow-center py-4 cursor-pointer mr-2"
          onClick={() => setIsChanging(true)}
        >
          <div className="opacity-60 flex justify-center">
            <PlusSquare></PlusSquare>
            <span className="ml-2">Thêm địa chỉ nhận hàng</span>
          </div>
        </div>
        <div
          className=" bg-red-600 w-6/12 rounded  shadow-center py-4 cursor-pointer ml-2"
          onClick={() => setChangeAddress(false)}
        >
          <div className=" flex justify-center ">
            <span className="ml-2 text-white font-bold">Tiếp tục</span>
          </div>
        </div>
      </div>
    </>
  );
};
