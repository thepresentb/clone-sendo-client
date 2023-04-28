import React, { useState } from "react";
import { HideIcon } from "../../Filter/HideIcon.filter";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../redux/slice/category.slice";

export const Installment = () => {
  const [showModal, setShowModal] = useState(false);
  const { filter } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const setFilterStore = (value) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.isInstallment = value;
    setShowModal(false);
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="h-11 p-2">
      <div
        className={`flex h-8 text-semibold rounded-md bg-gray-200 border-[1px] border-slate-300`}
        onClick={() => setShowModal(true)}
      >
        <span className="text-xs font-semibold leading-8 ml-2">Hỗ trợ trả góp</span>
        <HideIcon isDown={true} />
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
                <div className="relative p-4 flex-auto">
                  <div className={`mx-4 pb-2`}>
                    <div className="my-6 cursor-pointer" onClick={() => setFilterStore(true)}>
                      <input className="mb-1" type="radio" id="sp" name="installment" value="sp" />
                      <label className="ml-2 cursor-pointer" htmlFor="sp">
                        Trả góp Kredivo
                      </label>
                    </div>
                    <div className="mb-4" onClick={() => setFilterStore(false)}>
                      <input className="mb-1" type="radio" id="notsp" name="installment" value="notsp" />
                      <label className="ml-2 cursor-pointer" htmlFor="notsp">
                        Không hỗ trợ
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
        </>
      ) : null}
    </div>
  );
};
