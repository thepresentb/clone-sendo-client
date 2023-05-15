import { useDispatch, useSelector } from "react-redux";
import Edit3 from "../../assets/svg/Edit3";
import PlusSquare from "../../assets/svg/PlusSquare";
import { setIsChanging } from "../../redux/slice/checkOut.slice";

export const ChangeAddressPage = () => {
  const { addressList } = useSelector((state) => state.checkOut);
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="text-center py-4 font-semibold text-red-500 text-xl">Thay đổi địa chỉ</h3>
      {addressList?.map((address) => {
        return (
          <div
            className="py-4 xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center"
            key={address._id}
          >
            <div className="text-[15px] flex opacity-70 mx-8">
              <div className="flex items-center mr-6">
                <input
                  className="w-4 h-4 text-red-600 cursor-pointer bg-gray-100 border-2 border-gray-500 rounded-sm focus:outline-none focus:ring-0 "
                  type="checkbox"
                  name="delivery"
                  readOnly
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
              <div className="flex items-center cursor-pointer hover:opacity-60">
                <Edit3></Edit3>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="py-4 xl:max-w-[1100px] mt-4 cursor-pointer lg:max-w-[900px] md:max-w-[750px] mx-auto bg-white rounded shadow-center"
        onClick={() => dispatch(setIsChanging(true))}
      >
        <div className="flex justify-center opacity-60">
          <PlusSquare></PlusSquare>
          <span className="ml-2">Thêm địa chỉ nhận hàng</span>
        </div>
      </div>
    </>
  );
};
