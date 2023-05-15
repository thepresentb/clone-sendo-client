import React, { useEffect } from "react";
import MapMarker1 from "../../assets/svg/MapMarker";
import ChevronsDown from "../../assets/svg/ChevronsDown";
import { checkOutApi } from "../../redux/apiRequest/checkOut.api";
import { useDispatch, useSelector } from "react-redux";

export const Address = ({ setChangeAddress }) => {
  const { user } = useSelector((state) => state.user);
  const { addressList } = useSelector((state) => state.checkOut);
  const dispatch = useDispatch();

  const defaultAddress = addressList?.filter((item) => item.isDefault === true)[0];

  useEffect(() => {
    if (user) {
      checkOutApi.getAddress(dispatch, user._id);
    }
  }, [user]);

  return (
    <div className="py-4 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center">
      <div className="flex">
        <div className="ml-4 mr-2 mt-[2px]">
          <MapMarker1 size={20} color={"red"}></MapMarker1>
        </div>
        <p className="font-semibold text-base grow">Địa chỉ nhận hàng</p>
        <div
          className="text-sm flex  mr-4 cursor-pointer opacity-70 hover:opacity-50"
          onClick={() => setChangeAddress(true)}
        >
          <div className="text-blue-700 mr-2 mt-[1px]">Thay đổi</div>
          <ChevronsDown></ChevronsDown>
        </div>
      </div>
      <div className="text-[15px] opacity-60 mx-8 mt-4">
        <div>
          <span className="font-semibold">{defaultAddress?.receiver}</span>
          <span className=""> / {defaultAddress?.phoneNumber}</span>
        </div>
        <div className="">
          <span>{defaultAddress?.homeAddress}, </span>
          <span>{defaultAddress?.wardName}, </span>
          <span>{defaultAddress?.districtName}, </span>
          <span>{defaultAddress?.provinceName}</span>
        </div>
      </div>
    </div>
  );
};
