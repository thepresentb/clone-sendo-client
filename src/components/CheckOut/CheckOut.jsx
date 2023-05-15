import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCheckOutPage } from "../../redux/slice/checkOut.slice";
import { Address } from "./Address.checkOut";
import { ShipMethod } from "./ShipMethod.checkOut";
import { ChangeAddressPage } from "./ChangeAddressPage";
import { ChangeAddressPopUp } from "./ChangeAddressPopUp";
import { checkOutApi } from "../../redux/apiRequest/checkOut.api";

export const CheckOut = () => {
  const [changeAddress, setChangeAddress] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    dispatch(setIsCheckOutPage(true));
    checkOutApi.getAddress(dispatch, user._id);
    return () => {
      dispatch(setIsCheckOutPage(false));
    };
  }, [user]);

  return (
    <div className="mt-[100px] bg-slate-100 pb-4">
      {!changeAddress ? (
        <>
          <div className=" xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center mb-4">
            <h3 className="text-start  py-2 font-semibold  text-xl pl-4">Xác nhận - Thanh toán</h3>
          </div>
          <Address setChangeAddress={setChangeAddress}></Address>
          <ShipMethod></ShipMethod>
        </>
      ) : (
        <ChangeAddressPage setIsChanging={setIsChanging} setChangeAddress={setChangeAddress} />
      )}
      {isChanging ? <ChangeAddressPopUp setIsChanging={setIsChanging} /> : null}
    </div>
  );
};
