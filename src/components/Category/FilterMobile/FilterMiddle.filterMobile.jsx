import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setOrderBy } from "../../../redux/slice/category.slice";
import { HideIcon } from "../Filter/HideIcon.filter";

export const FilterMiddle = () => {
  return (
    <div className="h-12 flex border-b-2 border-gray-300">
      <Modal />
      <SortMobile />
    </div>
  );
};

const Modal = () => {
  const { orderBy } = useSelector((state) => state.category);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSetOrderBy = (name) => {
    const newOrderBy = {};
    newOrderBy[name] = name === "price" ? 1 : -1;
    setShowModal(false);
    dispatch(setOrderBy(newOrderBy));
  };

  return (
    <>
      <div type="button" onClick={handleShowModal} className="flex grow h-12 items-center cursor-pointer">
        <div className="ml-4">
          <svg className="svg-icon w-6 opacity-50" viewBox="0 0 20 20">
            <path
              fill="fff"
              d="M12.173,16.086c0.72,0,1.304-0.584,1.304-1.305V6.089c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v8.692C10.868,15.502,11.452,16.086,12.173,16.086z M11.738,6.089c0-0.24,0.194-0.435,0.435-0.435s0.435,0.194,0.435,0.435v8.692c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V6.089zM16.52,16.086c0.72,0,1.304-0.584,1.304-1.305v-11.3c0-0.72-0.584-1.304-1.304-1.304c-0.721,0-1.305,0.584-1.305,1.304v11.3C15.215,15.502,15.799,16.086,16.52,16.086z M16.085,3.481c0-0.24,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v11.3c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V3.481z M3.48,16.086c0.72,0,1.304-0.584,1.304-1.305v-3.477c0-0.72-0.584-1.304-1.304-1.304c-0.72,0-1.304,0.584-1.304,1.304v3.477C2.176,15.502,2.76,16.086,3.48,16.086z M3.045,11.305c0-0.24,0.194-0.435,0.435-0.435c0.24,0,0.435,0.194,0.435,0.435v3.477c0,0.24-0.195,0.436-0.435,0.436c-0.24,0-0.435-0.195-0.435-0.436V11.305z M18.258,16.955H1.741c-0.24,0-0.435,0.194-0.435,0.435s0.194,0.435,0.435,0.435h16.517c0.24,0,0.435-0.194,0.435-0.435S18.498,16.955,18.258,16.955z M7.826,16.086c0.72,0,1.304-0.584,1.304-1.305V8.696c0-0.72-0.584-1.304-1.304-1.304S6.522,7.977,6.522,8.696v6.085C6.522,15.502,7.106,16.086,7.826,16.086z M7.392,8.696c0-0.239,0.194-0.435,0.435-0.435s0.435,0.195,0.435,0.435v6.085c0,0.24-0.194,0.436-0.435,0.436s-0.435-0.195-0.435-0.436V8.696z"
            ></path>
          </svg>
        </div>
        <div className="opacity-80 text-sm ml-2">
          Sắp xếp theo: {orderBy?.createdAt === -1 ? "Mới nhất" : orderBy?.rate === -1 ? "Đánh giá" : "Giá cả"}
        </div>
      </div>
      {showModal ? (
        <>
          <div className=" b-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-[100px] inset-0 z-50 outline-none focus:outline-none h-fit">
            <div className="relative w-full my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Sắp xếp theo</h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span>X</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="mb-8 cursor-pointer" onClick={() => handleSetOrderBy("createdAt")}>
                    <input className="mb-1" type="radio" id="sp" name="sortMobile" value="sp" />
                    <label className="ml-2 text-base cursor-pointer" htmlFor="sp">
                      Mới nhất
                    </label>
                  </div>
                  <div className="mb-8 cursor-pointer" onClick={() => handleSetOrderBy("rate")}>
                    <input className="mb-1" type="radio" id="sp" name="sortMobile" value="sp" />
                    <label className="ml-2 text-base cursor-pointer" htmlFor="sp">
                      Đánh giá
                    </label>
                  </div>
                  <div className="mb-8 cursor-pointer" onClick={() => handleSetOrderBy("price")}>
                    <input className="mb-1" type="radio" id="sp" name="sortMobile" value="sp" />
                    <label className="ml-2 text-base cursor-pointer" htmlFor="sp">
                      Giá cả
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
        </>
      ) : null}
    </>
  );
};

const SortMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleShowModal = () => {
    setShowModal(true);
    setShowDetailId(null);
  };

  const categoryList = useSelector((state) => state.category?.list);
  const { filter } = useSelector((state) => state.category);
  const [showDetailId, setShowDetailId] = useState(null);

  const setFilterStore = (id) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.categoryDetailId = id;
    if (newFilter.createdAt) delete newFilter.createdAt;

    setShowModal(false);
    dispatch(setFilter(newFilter));
  };

  return (
    <>
      <div
        type="button"
        onClick={handleShowModal}
        className="flex pl-2 border-l-2 border-gray-200 mt-[10px] mr-4 h-6 items-center cursor-pointer"
      >
        <div className="ml-4">
          <svg className="svg-icon w-6 opacity-50" viewBox="0 0 20 20">
            <path
              fill="fff"
              d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
								c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654
								c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857z M18.346,11.274
								H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
								S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786
								C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"
            ></path>
          </svg>
        </div>
        <div className="opacity-80 text-sm ml-3">Lọc</div>
      </div>
      {showModal ? (
        <>
          <div className=" b-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 inset-0 z-50 outline-none focus:outline-none h-fit">
            <div className="relative w-full my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Sắp xếp theo</h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span>X</span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className={`mx-4 pb-2`}>
                    {categoryList?.map((item) => {
                      return (
                        <div className="cursor-pointer" key={item.category._id}>
                          <div
                            className="flex hover:text-red-400 hover:translate-x-0.5"
                            onClick={() =>
                              setShowDetailId(item.category._id === showDetailId ? null : item.category._id)
                            }
                          >
                            <span className="overflow-x-auto whitespace-nowrap grow my-2 text-base font-semibold truncate">
                              {item.category.name}
                            </span>
                            <HideIcon iconWidth={"sm"} isShow={item.category._id === showDetailId} />
                          </div>
                          <div className={`text-sm mb-2 ${item.category._id === showDetailId ? "" : "hidden"}`}>
                            {item?.detail.map((itemDetail) => {
                              return (
                                <div
                                  className="hover:bg-slate-200 px-1 my-1 rounded hover:font-medium truncate"
                                  key={itemDetail._id}
                                  onClick={() => setFilterStore(itemDetail._id)}
                                >
                                  {itemDetail.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
        </>
      ) : null}
    </>
  );
};
