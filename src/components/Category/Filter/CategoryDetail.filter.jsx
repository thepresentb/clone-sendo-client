import { useDispatch, useSelector } from "react-redux";
import { HideIcon } from "./HideIcon.filter";
import { useEffect, useState } from "react";
import { setFilter } from "../../../redux/slice/category.slice";
import Plus from "../../../assets/svg/Plus";
import Minus from "../../../assets/svg/Minus";
import ChevronDown from "../../../assets/svg/ChevornDown";
import ChevronUp from "../../../assets/svg/ChevronUp";

export const CategoryDetail = () => {
  const categoryList = useSelector((state) => state.category?.list);
  const { selectedCategoryId } = useSelector((state) => state.category);
  const { filter } = useSelector((state) => state.category);

  const [isShow, setIsShow] = useState(true);
  const [showDetailId, setShowDetailId] = useState(null);
  const [listId, setListId] = useState(null);
  const [isFull, setIsFull] = useState(false);
  const dispatch = useDispatch();

  const setFilterStore = (id) => {
    let newFilter = JSON.parse(JSON.stringify(filter));
    newFilter.categoryDetailId = id;
    if (newFilter.createdAt) delete newFilter.createdAt;

    dispatch(setFilter(newFilter));
  };

  useEffect(() => {
    setShowDetailId(selectedCategoryId);
  }, [selectedCategoryId]);

  return (
    <div className=" pb-2 border-b-[1px] border-gray-200 ">
      <div className="flex mt-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-semibold grow text-sm ml-1">Danh mục</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 pb-2 ${isShow ? "" : "hidden"}`}>
        <div className="text-blue-700 text-sm my-2 cursor-pointer">Về trang tất cả danh mục</div>
        {categoryList?.map((item) => {
          if (item.category._id !== selectedCategoryId) return null;
          return (
            <div className="cursor-pointer" key={item.category._id}>
              <div
                className={`flex p-1 truncate rounded hover:bg-slate-200 text-slate-800`}
                onClick={() => setShowDetailId(item.category._id === showDetailId ? null : item.category._id)}
              >
                {item.category._id !== showDetailId ? (
                  <div className="p-[6px] bg-white rounded">
                    <ChevronDown color="black" />
                  </div>
                ) : (
                  <div className="p-[6px] bg-white rounded">
                    <ChevronUp color="red" />
                  </div>
                )}
                <span
                  className={`overflow-x-auto whitespace-nowrap py-[2px] ml-1 mt-[2px] leading-5 grow text-sm font-medium truncate text-red-500`}
                >
                  {item.category.name}
                </span>
              </div>
              <div
                className={`text-sm mb-2 ${
                  isFull ? (listId ? "h-[520px]" : "h-[380px]") : listId ? "h-[370px]" : "h-[230px]"
                } overflow-hidden ${item.category._id === showDetailId ? "" : "hidden"}`}
              >
                {item?.detail.map((itemDetail) => {
                  return (
                    <div className={` p-1 ml-2  truncate rounded `} key={itemDetail._id}>
                      <div
                        className="flex hover:bg-slate-100 px-1 py-[2px] rounded "
                        onClick={() => setListId(itemDetail._id === listId ? null : itemDetail._id)}
                      >
                        {itemDetail._id === listId ? (
                          <div className="p-[6px] bg-white rounded">
                            <ChevronUp color="black" />
                          </div>
                        ) : (
                          <div className="p-[6px] bg-white rounded">
                            <ChevronDown color="black" />
                          </div>
                        )}
                        <div
                          className={`hover:bg-slate-100 px-1 py-[2px] rounded hover:font-medium truncate mt-[2px] ${
                            itemDetail._id === listId ? " font-semibold" : null
                          }`}
                        >
                          {itemDetail.name}
                        </div>
                      </div>
                      <div className={`text-sm h-[140px] overflow-hidden ${itemDetail._id === listId ? "" : "hidden"}`}>
                        <div
                          className="py-[4px] pl-10 px-1 rounded hover:font-semibold hover:bg-slate-100"
                          onClick={() => setFilterStore(itemDetail._id)}
                        >
                          {itemDetail.name + " detail"}
                        </div>
                        <div
                          className="py-[4px] pl-10 px-1 rounded hover:font-semibold hover:bg-slate-100"
                          onClick={() => setFilterStore(itemDetail._id)}
                        >
                          {itemDetail.name + " detail"}
                        </div>
                        <div
                          className="py-[4px] pl-10 px-1 rounded hover:font-semibold hover:bg-slate-100"
                          onClick={() => setFilterStore(itemDetail._id)}
                        >
                          {itemDetail.name + " detail"}
                        </div>
                        <div
                          className="py-[4px] pl-10 px-1 rounded hover:font-semibold hover:bg-slate-100"
                          onClick={() => setFilterStore(itemDetail._id)}
                        >
                          {itemDetail.name + " detail"}
                        </div>
                        <div
                          className="py-[4px] pl-10 px-1 rounded hover:font-semibold hover:bg-slate-100"
                          onClick={() => setFilterStore(itemDetail._id)}
                        >
                          {itemDetail.name + " detail"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={`${item.category._id === showDetailId ? "" : "hidden"}`}>
                <div
                  className={`flex ml-6 my-2 py-2 px-4 hover:bg-slate-100 rounded w-fit ${isFull ? "hidden" : null} `}
                  onClick={() => setIsFull(true)}
                >
                  <Plus />
                  <div className="ml-2 text-sm font-semibold">Xem thêm</div>
                </div>
                <div
                  className={`flex ml-6 my-2 py-2 px-4 hover:bg-slate-100 rounded w-fit ${isFull ? null : "hidden"}`}
                  onClick={() => setIsFull(false)}
                >
                  <div className="mt-[2px]">
                    <Minus />
                  </div>
                  <div className="ml-2 text-sm font-semibold">Thu gọn</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
