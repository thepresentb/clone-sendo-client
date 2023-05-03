import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StringHelper } from "../../utils/StringHelper";
import { toggleAuthenState } from "../../redux/slice/user.slice";

export const Detail = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  return (
    <div className="flex rounded-lg bg-white">
      <div className="p-6 w-4/12">
        <img className="object-cover w-full rounded" src={selectedProduct.imgUrl} alt="" />
      </div>
      <div className="py-6 px-2 w-7/12">
        <TopInfo />
        <MiddleInfo />
        <BotInfo />
      </div>
    </div>
  );
};

const TopInfo = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  let saleStatus = false;
  if (
    selectedProduct.saleId !== null &&
    selectedProduct.saleId.saleStatus &&
    new Date().toISOString() > selectedProduct.saleId.startAt &&
    new Date().toISOString() < selectedProduct.saleId.endAt
  ) {
    saleStatus = true;
  }

  return (
    <div className="">
      <p className="font-semibold text-xl">{selectedProduct.name}</p>
      <p className="text-sm my-2">Thương hiệu : {selectedProduct.brandId.name}</p>
      <p className="font-semibold text-2xl text-red-500">
        {saleStatus
          ? StringHelper.toPrice(
              Math.floor((selectedProduct.price * (100 - selectedProduct.saleId.salePercent)) / 100)
            ) + "đ"
          : StringHelper.toPrice(selectedProduct.price) + "đ"}
      </p>
      <div className={`${saleStatus ? null : "hidden"}`}>
        <span className={`product__price-old ml-0 ${saleStatus ? null : "hidden"}`}>
          {saleStatus ? StringHelper.toPrice(selectedProduct?.price) + "đ" : " "}
        </span>
        <span className="ml-2 text-sm text-red-500">GIẢM {selectedProduct.saleId?.salePercent} %</span>
      </div>
    </div>
  );
};

const MiddleInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const { selectedProduct } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    if (!user) dispatch(toggleAuthenState("login"));
  };

  const handleBuy = () => {
    if (!user) dispatch(toggleAuthenState("login"));
  };

  return (
    <div className="mt-8 mb-10 border-t-2 border-stale-300">
      <div className="product__footer justify-start mt-2">
        <div className="flex grow-1 ">
          <div className="mr-1">
            <svg className="svg-icon w-[0.9rem]" viewBox="0 0 20 20">
              <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
            </svg>
          </div>
          <div className="text-sm">{selectedProduct.rate}/5</div>
        </div>
        <div className="mx-2">--</div>
        <div className="flex">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path
              fill="fff"
              d="M17.696,9.368H2.305c-0.189,0-0.367,0.092-0.478,0.245c-0.11,0.155-0.141,0.352-0.08,0.532l2.334,6.918c0.081,0.238,0.305,0.4,0.556,0.4h10.735c0.253,0,0.478-0.162,0.557-0.402l2.323-6.917c0.062-0.179,0.03-0.376-0.079-0.531C18.062,9.459,17.886,9.368,17.696,9.368z M14.95,16.287H5.062l-1.938-5.743h13.753L14.95,16.287z"
            ></path>
            <path
              fill="fff"
              d="M6.345,7.369c0.325,0,0.588-0.263,0.588-0.588c0-1.691,1.376-3.067,3.067-3.067c1.691,0,3.067,1.376,3.067,3.067c0,0.325,0.264,0.588,0.588,0.588c0.326,0,0.589-0.263,0.589-0.588c0-2.34-1.904-4.243-4.244-4.243c-2.34,0-4.244,1.903-4.244,4.243C5.757,7.106,6.02,7.369,6.345,7.369z"
            ></path>
          </svg>
          <p className="whitespace-nowrap text-sm"> {selectedProduct.total - selectedProduct.quantity} lượt mua</p>
        </div>
      </div>
      <div className="flex text-sm text-center mt-2">
        <span className="opacity-50 leading-8">Chọn số lượng :</span>
        <div className="flex  mx-4">
          <div
            className={`h-8 w-8 text-[40px]  text-center leading-7 rounded bg-slate-200 opacity-50 ${
              quantity > 1 ? "cursor-pointer" : "cursor-not-allowed"
            } `}
            onClick={() => {
              if (quantity > 1) setQuantity((prev) => --prev);
            }}
          >
            -
          </div>
          <div className="h-8 w-12 text-center leading-8 mx-2 border-[1px] rounded border-stale-500">{quantity}</div>
          <div
            className={`h-8 w-8 text-[24px]  text-center leading-8 rounded bg-slate-200 opacity-50 cursor-pointer ${
              quantity < selectedProduct.quantity ? "cursor-pointer" : "cursor-not-allowed"
            }`}
            onClick={() => {
              if (quantity < selectedProduct.quantity) setQuantity((prev) => ++prev);
            }}
          >
            +
          </div>
        </div>
        <div className="opacity-50 leading-8">Còn {selectedProduct.quantity} sản phẩm</div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className="w-[48%] h-10 bg-slate-200 rounded leading-10 opacity-70 font-semibold"
          onClick={handleAddToBag}
        >
          Thêm vào giỏ
        </button>
        <button className="w-[48%] h-10 bg-red-500 rounded leading-10 text-white font-semibold" onClick={handleBuy}>
          Mua ngay
        </button>
      </div>
    </div>
  );
};

const BotInfo = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  return (
    <div className="">
      <div className="my-2 border-t-2 border-stale-300">
        <div className="">
          <div className="mt-2 mb-4 font-semibold">
            <span>Ưu đãi dành cho bạn</span>
          </div>
          <div className="flex flex-wrap">
            {selectedProduct.isInstallment ? (
              <div className="w-6/12 my-2">
                <img
                  src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png"
                  alt="promotion-icon"
                  className="inline w-6 "
                />
                <span className="text-[14px] ml-2 opacity-50 leading-6">Trả góp Kredivo</span>
              </div>
            ) : null}
            {selectedProduct.isInstallment ? (
              <div className="w-6/12 my-2">
                <svg className="svg-icon w-6 inline opacity-50" viewBox="0 0 20 20">
                  <path
                    fill="fff"
                    d="M2.568,7.179H8.96c1.411,0,2.557-1.145,2.557-2.557c0-1.412-1.146-2.557-2.557-2.557H8.534c-0.235,0-0.426,0.19-0.426,0.426c0,0.236,0.191,0.426,0.426,0.426H8.96c0.941,0,1.704,0.763,1.704,1.705S9.901,6.327,8.96,6.327H2.568c-0.236,0-0.426,0.19-0.426,0.426C2.142,6.988,2.333,7.179,2.568,7.179 M15.778,7.179c0-0.941-0.763-1.704-1.704-1.704h-0.427c-0.235,0-0.426,0.19-0.426,0.426c0,0.235,0.19,0.426,0.426,0.426h0.427c0.47,0,0.852,0.382,0.852,0.852c0,0.471-0.382,0.853-0.852,0.853H0.864c-0.236,0-0.426,0.19-0.426,0.426c0,0.235,0.19,0.426,0.426,0.426h13.21C15.016,8.884,15.778,8.12,15.778,7.179 M16.631,9.736H2.568c-0.236,0-0.426,0.19-0.426,0.426c0,0.236,0.19,0.426,0.426,0.426h14.062c0.94,0,1.704,0.764,1.704,1.705s-0.764,1.704-1.704,1.704h-0.427c-0.235,0-0.426,0.19-0.426,0.427c0,0.235,0.19,0.426,0.426,0.426h0.427c1.411,0,2.557-1.145,2.557-2.557S18.042,9.736,16.631,9.736 M10.665,11.44H4.273c-0.236,0-0.426,0.19-0.426,0.426c0,0.236,0.19,0.427,0.426,0.427h6.392c1.412,0,2.557,1.145,2.557,2.557s-1.146,2.557-2.557,2.557h-0.426c-0.236,0-0.426,0.19-0.426,0.426s0.19,0.427,0.426,0.427h0.426c1.883,0,3.41-1.526,3.41-3.409S12.548,11.44,10.665,11.44"
                  ></path>
                </svg>
                <span className="text-[14px] ml-2 opacity-50 leading-6">Ship hoả tốc</span>
              </div>
            ) : null}
            <div className="w-6/12 my-2">
              <svg className="svg-icon w-6 inline opacity-50" viewBox="0 0 20 20">
                <path
                  fill="fff"
                  d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"
                ></path>
              </svg>
              <span className="text-[14px] ml-2 opacity-50 leading-6">Giảm giá khi mua qua app</span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 border-t-2 border-stale-300">
        <div className="">
          <div className="mt-2 mb-4 font-semibold">
            <span>Quyền lợi khách hàng & Bảo hành</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-6/12 my-2">
              <svg className="svg-icon w-6 inline opacity-50" viewBox="0 0 20 20">
                <path
                  fill="fff"
                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                ></path>
              </svg>
              <span className="text-[14px] ml-2 opacity-50 leading-6">7 ngày hoàn trả</span>
            </div>
            <div className="w-6/12 my-2">
              <div>
                <svg className="svg-icon w-6 inline opacity-50" viewBox="0 0 20 20">
                  <path
                    fill="fff"
                    d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                  ></path>
                </svg>
                <span className="text-[14px] ml-2 opacity-50 leading-6">Bảo hành theo chính sách</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
