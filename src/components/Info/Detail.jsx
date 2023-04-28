import React from "react";
import { useSelector } from "react-redux";
import { StringHelper } from "../../utils/StringHelper";

export const Detail = () => {
  const { selectedProduct } = useSelector((state) => state.product);

  return (
    <div className="flex rounded-lg bg-white">
      <div className="p-6 w-4/12">
        <img className="object-cover w-full rounded" src={selectedProduct.imgUrl} alt="" />
      </div>
      <div className="py-6 px-2">
        <TopInfo />
        <MiddleInfo />
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
  const { selectedProduct } = useSelector((state) => state.product);

  return (
    <div className="mt-8">
      <div className="product__footer justify-start">
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
          <p className="whitespace-nowrap text-sm">lượt mua</p>
        </div>
      </div>
    </div>
  );
};
