import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../redux/slice/category.slice";

export const Slide = () => {
  const categories = useSelector((state) => state.category?.list);
  const { filter } = useSelector((state) => state.category);
  const selectedCategoryId = useSelector((state) => state.category?.selectedCategoryId);
  const [categoryDetail, setCategoryDetail] = useState([]);
  const [selectedCategoryDetailId, setSelectedCategoryDetailId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let cate = categories.filter((item) => {
      return item.category._id === selectedCategoryId;
    });
    setCategoryDetail(cate[0]?.detail);
    setSelectedCategoryDetailId(cate[0]?.detail[0]._id);
  }, [selectedCategoryId]);

  const setFilterStore = (id) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.categoryDetailId = id;
    if (newFilter.createdAt) delete newFilter.createdAt;

    setSelectedCategoryDetailId(id);
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="h-12 overflow-x-auto border-b-2 border-gray-300">
      <div className="flex h-11  w-max ">
        {categoryDetail?.map((item) => {
          return (
            <div
              className="h-11 p-2"
              key={item._id}
              onClick={() => {
                setFilterStore(item._id);
              }}
            >
              <div
                className={`flex h-8 ${
                  selectedCategoryDetailId === item._id ? "bg-red-500 text-white" : "bg-gray-200"
                }  rounded-md`}
              >
                <div className="">
                  <img className="w-[30px] rounded-l-md mt-[1px] ml-[1px]" src={item.imgUrl} alt="" />
                </div>
                <span className="text-sm font-semibold leading-8 mx-2">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
