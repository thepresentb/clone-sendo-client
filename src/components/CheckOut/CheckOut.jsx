import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCheckOutPage } from "../../redux/slice/checkOut.slice";
import { Address } from "./Address.checkOut";
import { ShipMethod } from "./ShipMethod.checkOut";
import { ChangeAddressPage } from "./ChangeAddressPage";
import { ChangeAddressPopUp } from "./ChangeAddressPopUp";

export const CheckOut = () => {
  const [changeAddress, setChangeAddress] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { isChanging } = useSelector((state) => state.checkOut);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    dispatch(setIsCheckOutPage(true));
    return () => {
      dispatch(setIsCheckOutPage(false));
    };
  }, [user]);

  return (
    <div className="mt-[100px] bg-slate-100 pb-4">
      {!changeAddress ? (
        <>
          <h3 className="text-center py-4 font-semibold text-red-500 text-xl">Xác nhận - Thanh toán</h3>
          <Address setChangeAddress={setChangeAddress}></Address>
          <ShipMethod></ShipMethod>
        </>
      ) : (
        <ChangeAddressPage></ChangeAddressPage>
      )}
      {isChanging ? <ChangeAddressPopUp /> : null}
    </div>
  );
};
