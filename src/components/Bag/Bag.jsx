import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsBagPage } from "../../redux/slice/bag.slice";
import { bagApi } from "../../redux/apiRequest/bag.api";
import { redirect, useNavigate } from "react-router-dom";
import { Item } from "./Item.bag";
import { StringHelper } from "../../utils/StringHelper";

export const Bag = () => {
  const { user } = useSelector((state) => state.user);
  const { bag } = useSelector((state) => state.bag);
  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let totalNew = 0;
    let saleNew = 0;
    for (let i = 0; i < bag.length; i++) {
      if (bag[i].isChose === true) {
        totalNew += bag[i].quantity * bag[i].productId.price;
        // soluong * gia san pham * sale /100
        saleNew += bag[i].productId.saleId
          ? (bag[i].quantity * bag[i].productId.price * bag[i].productId.saleId?.salePercent) / 100
          : 0;
      }
    }
    setTotal(totalNew);
    setSale(saleNew);
  }, [bag]);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    dispatch(setIsBagPage(true));
    return () => {
      dispatch(setIsBagPage(false));
    };
  }, []);

  if (bag.length === 0) {
    return (
      <div className="mt-[70px] sm:mt-[100px]">
        <div className="flex flex-col justify-center items-center my-[300px]">
          <img className="w-[400px]" src="https://media3.scdn.vn/img4/2021/02_02/JikA6AqzCC55LcNmcHjZ.png" alt="" />
          <p className="font-bold mt-8">Giỏ hàng trống</p>
          <p className="opacity-50 my-2">Ai đó ơi, mua sắm để nhận khuyến mãi từ Sendo ngay!</p>
          <button className="bg-red-500 py-2 px-6 rounded text-white my-2">Mua sắm ngay</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[70px] sm:mt-[100px] mb-10">
      <div className="h-fit bg-gray-100 py-10">
        <h1 className="mb-10 text-center text-2xl font-bold">Giỏ hàng của bạn ({bag.length})</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {bag?.map((item) => {
              return <Item item={item} key={item._id} />;
            })}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Tổng tiền</p>
              <p className="text-gray-700">{StringHelper.toPrice(total)} đ</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Giảm giá</p>
              <p className="text-gray-700">{StringHelper.toPrice(sale)} đ</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Tạm tính</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{StringHelper.toPrice(total - sale)} đ</p>
                {/* <p className="text-sm text-gray-700">including VAT</p> */}
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
