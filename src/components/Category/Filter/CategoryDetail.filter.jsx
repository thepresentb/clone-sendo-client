import { useSelector } from "react-redux";
import { HideIcon } from "./HideIcon.filter";
import { useState } from "react";

export const CategoryDetail = () => {
  const categoryList = useSelector((state) => state.category?.list);
  const [isShow, setIsShow] = useState(true);
  const [showDetailId, setShowDetailId] = useState(null);

  return (
    <div className=" border-b-[1px] border-gray-200">
      <div className="flex my-3 mx-2 p-1 cursor-pointer rounded hover:bg-slate-200" onClick={() => setIsShow(!isShow)}>
        <div className="font-bold grow">Danh mục</div>
        <HideIcon isShow={isShow} />
      </div>
      <div className={`mx-4 pb-2 ${isShow ? "" : "hidden"}`}>
        {categoryList?.map((item) => {
          return (
            <div className="cursor-pointer" key={item.category._id}>
              <div
                className="flex hover:text-red-400 hover:translate-x-0.5"
                onClick={() => setShowDetailId(item.category._id === showDetailId ? null : item.category._id)}
              >
                <span className="overflow-x-auto whitespace-nowrap grow text-sm font-semibold truncate">
                  {item.category.name}
                </span>
                <HideIcon iconWidth={"sm"} isShow={item.category._id === showDetailId} />
              </div>
              <div className={`text-sm mb-2 ${item.category._id === showDetailId ? "" : "hidden"}`}>
                {item?.detail.map((itemDetail) => {
                  return (
                    <div className="hover:bg-slate-200 px-1 rounded hover:font-medium truncate" key={itemDetail._id}>
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
  );
};
