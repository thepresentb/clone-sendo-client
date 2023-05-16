import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ghnApi } from "../../redux/apiRequest/ghn.api";
import ChevronDown from "../../assets/svg/ChevornDown";
import { ToastContainer, toast } from "react-toastify";
import toastConfig from "../../utils/toastifyConfig";
import { checkOutApi } from "../../redux/apiRequest/checkOut.api";
import { setEditingAddress } from "../../redux/slice/checkOut.slice";

const CODENAME = {
  receiver: "người nhận",
  phoneNumber: "số điện thoại",
  provinceName: "tỉnh / thành phố",
  districtName: "quận / huyện",
  wardName: "phường / xã",
  homeAddress: "địa chỉ",
};

export const ChangeAddressPopUp = ({ setIsChanging }) => {
  const { user } = useSelector((state) => state.user);
  const { editingAddress } = useSelector((state) => state.checkOut);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [showUl, setShowUl] = useState(null);
  const [addressInfo, setAddressInfo] = useState({
    receiver: "",
    phoneNumber: "",
    provinceName: "",
    provinceId: "",
    districtName: "",
    districtId: "",
    wardName: "",
    wardCode: "",
    homeAddress: "",
  });
  const dispatch = useDispatch();

  const inputChange = (event) => {
    setAddressInfo({
      ...addressInfo,
      [event.target.name]: event.target.value,
    });
  };

  const selectChange = (paid) => {
    setShowUl(false);
    setAddressInfo({
      ...addressInfo,
      ...paid,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in addressInfo) {
      if (addressInfo[key] === "") {
        return toast.error(`Vui lòng điền thông tin ${CODENAME[key]}`, toastConfig);
      }
    }
    await checkOutApi.createAddress(dispatch, {
      ...addressInfo,
      accountId: user._id,
      isDefault: document.getElementById("isDefault").checked === true,
    });
    setShowUl(null);
    setIsChanging(false);
  };

  useEffect(() => {
    const getProvince = async () => {
      const provinceList = await ghnApi.getProvince();
      setProvinces(provinceList);
    };
    getProvince();
    // khi popup la trang edit
    if (editingAddress) {
      if (editingAddress.isDefault === true) document.getElementById("isDefault").checked = true;
      setAddressInfo({
        ...addressInfo,
        receiver: editingAddress.receiver,
        phoneNumber: editingAddress.phoneNumber,
        homeAddress: editingAddress.homeAddress,
      });
    }
    return () => {
      dispatch(setEditingAddress(null));
    };
  }, []);

  return (
    <div>
      <div className="flex">
        <ToastContainer />
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="flex m-auto overflow-x-hidden overflow-y-auto fixed h-modal md:h-fit w-full sm:w-fit top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center"
        >
          <div className="relative w-full sm:w-[500px] max-w-md px-4 h-full md:h-auto">
            <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  onClick={() => setIsChanging(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <form className="space-y-2 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
                <h3 className="text-xl text-center font-bold text-gray-900 dark:text-white">Địa chỉ nhận hàng</h3>
                <div>
                  <label htmlFor="receiver" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Họ và tên người nhận
                  </label>
                  <input
                    name="receiver"
                    value={addressInfo.receiver}
                    onChange={inputChange}
                    id="reveiver"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Họ và tên người nhận hàng"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                  >
                    Số điện thoại người nhận
                  </label>
                  <input
                    name="phoneNumber"
                    value={addressInfo.phoneNumber}
                    onChange={inputChange}
                    id="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Số điện thoại liên hệ khi nhận hàng"
                    required
                  />
                </div>
                <Province
                  showUl={showUl}
                  setShowUl={setShowUl}
                  setAddressInfo={setAddressInfo}
                  addressInfo={addressInfo}
                  provinces={provinces}
                  setDistricts={setDistricts}
                  selectChange={selectChange}
                />
                <District
                  showUl={showUl}
                  setShowUl={setShowUl}
                  setAddressInfo={setAddressInfo}
                  addressInfo={addressInfo}
                  districts={districts}
                  setWards={setWards}
                  selectChange={selectChange}
                />
                <Ward
                  showUl={showUl}
                  setShowUl={setShowUl}
                  addressInfo={addressInfo}
                  wards={wards}
                  selectChange={selectChange}
                />
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                    Địa chỉ
                  </label>
                  <input
                    name="homeAddress"
                    value={addressInfo.homeAddress}
                    onChange={inputChange}
                    id="homeAddress"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Nhập số nhà, tên đường"
                    required
                  />
                </div>

                <div className="flex justify-between py-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="isDefault"
                        type="checkbox"
                        className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="text-sm ml-3">
                      <label htmlFor="isDefault" className="font-medium text-gray-900 dark:text-gray-300">
                        Đăt làm địa chỉ mặc định
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit}
                >
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`opacity-90 fixed inset-0 z-40 bg-black `} onClick={() => setShowUl(null)}></div>
    </div>
  );
};

const Province = ({ showUl, setShowUl, setAddressInfo, addressInfo, provinces, setDistricts, selectChange }) => {
  return (
    <div className="relative">
      <label htmlFor="province" className=" text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
        Tỉnh / Thành phố
      </label>
      <div
        onClick={() => {
          setShowUl("province");
          setAddressInfo({
            ...addressInfo,
            districtName: "",
            districtId: "",
          });
        }}
        className="flex bg-gray-50 border cursor-pointer border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-0  w-full p-2.5 "
      >
        <div className="grow">
          {addressInfo.provinceName === "" && provinces.length !== 0
            ? "Vui lòng chọn tỉnh / thành phố"
            : addressInfo.provinceName}
        </div>
        <div className="">
          <ChevronDown color="black" size={22}></ChevronDown>
        </div>
      </div>
      {showUl === "province" ? (
        <ul className="absolute z-50 top-[28px] h-[204px] w-full overflow-y-auto bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
          {provinces.map((province, index) => {
            return (
              <li
                className="py-2 px-4 hover:bg-slate-200"
                key={index}
                onClick={async () => {
                  selectChange({ provinceName: province.ProvinceName, provinceId: province.ProvinceID });
                  setDistricts(await ghnApi.getDistrict(province.ProvinceID));
                }}
              >
                {province.ProvinceName}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

const District = ({ showUl, setShowUl, setAddressInfo, addressInfo, districts, setWards, selectChange }) => {
  return (
    <div className="relative">
      <label htmlFor="district" className=" text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
        Quận / Huyện
      </label>
      <div
        onClick={() => {
          setShowUl("district");
          setAddressInfo({
            ...addressInfo,
            wardName: "",
            wardCode: "",
          });
        }}
        className="flex bg-gray-50 border cursor-pointer border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-0  w-full p-2.5 "
      >
        <div className="grow">
          {addressInfo.provinceName === ""
            ? "Vui lòng chọn tỉnh / thành phố trước"
            : addressInfo.districtName === ""
            ? "Vui lòng chọn quận / huyện"
            : addressInfo.districtName}
        </div>
        <div className="">
          <ChevronDown color="black" size={22}></ChevronDown>
        </div>
      </div>
      {showUl === "district" && addressInfo?.provinceName !== "" ? (
        <ul className="absolute z-50 top-[28px] h-[204px] w-full overflow-y-auto bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
          {districts.map((district, index) => {
            return (
              <li
                className="py-2 px-4 hover:bg-slate-200"
                key={index}
                onClick={async () => {
                  selectChange({ districtName: district.DistrictName, districtId: district.DistrictID });
                  setWards(await ghnApi.getWards(district.DistrictID));
                }}
              >
                {district.DistrictName}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

const Ward = ({ showUl, setShowUl, addressInfo, wards, selectChange }) => {
  return (
    <div className="relative">
      <label htmlFor="ward" className=" text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
        Phường / Xã
      </label>
      <div
        onClick={() => setShowUl("ward")}
        className="flex bg-gray-50 border cursor-pointer border-gray-300 text-gray-500 sm:text-sm rounded-lg focus:ring-0  w-full p-2.5 "
      >
        <div className="grow">
          {addressInfo.districtName === ""
            ? "Vui lòng chọn quận / huyện trước "
            : addressInfo.wardName === ""
            ? "Vui lòng chọn phường / xã"
            : addressInfo.districtName}
        </div>
        <div className="">
          <ChevronDown color="black" size={22}></ChevronDown>
        </div>
      </div>
      {showUl === "ward" && addressInfo?.districtName !== "" ? (
        <ul className="absolute z-50 top-[28px] h-[204px] w-full overflow-y-auto bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg">
          {wards.map((ward, index) => {
            return (
              <li
                className="py-2 px-4 hover:bg-slate-200"
                key={index}
                onClick={async () => {
                  selectChange({ wardName: ward.WardName, wardCode: ward.WardCode });
                }}
              >
                {ward.WardName}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
