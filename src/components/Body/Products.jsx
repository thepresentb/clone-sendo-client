import React, { useEffect } from "react";
import "../../assets/css/products.css";
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../../redux/apiRequest/product.api";
import { StringHelper } from "../../utils/StringHelper";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const paginatedProducts = useSelector((state) => state?.product?.paginatedProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickProduct = (id) => {
    localStorage.setItem("productId", id);
    navigate("/product_info");
  };

  const handleLoadMore = () => {
    if (!paginatedProducts?.hasMore) return;
    productApi.getPaginatedProducts(
      dispatch,
      {
        filter: {
          createdAt: {
            $lt: paginatedProducts.cursor,
          },
        },
        limit: 42,
        orderBy: {
          createdAt: -1,
        },
      },
      true
    );
  };

  useEffect(() => {
    productApi.getPaginatedProducts(dispatch, {
      filter: {
        createdAt: {
          $lt: "2023-04-23T11:40:12.251Z",
        },
      },
      limit: 42,
      orderBy: {
        createdAt: -1,
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="grid grid-cols-2 sm:gap-[18px] gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {paginatedProducts?.paginatedProducts?.map((item) => {
          // set sale status cua moi san pham
          let saleStatus = false;
          if (
            item.saleId !== null &&
            item.saleId.saleStatus &&
            new Date().toISOString() > item.saleId.startAt &&
            new Date().toISOString() < item.saleId.endAt
          ) {
            saleStatus = true;
          }

          return (
            <div
              className="relative mx-auto bg-white rounded-lg overflow-hidden w-[175px] shadow-center product__item cursor-pointer md:w-[203px]"
              key={item._id}
              onClick={() => handleClickProduct(item._id)}
            >
              <div className="product__back" style={{ backgroundImage: `url('${item.imgUrl}')` }}></div>
              <div className="product__name">{item.name}</div>
              <div className="product__price flex flex-col h-[38px]">
                <div className="h-[16px] ml-[2px] flex">
                  <div className={`product__price-old`}>
                    {saleStatus ? StringHelper.toPrice(item?.price) + "đ" : " "}
                  </div>
                  {saleStatus ? <div className={`text-red-500 ml-1 text-xs`}>-{item?.saleId?.salePercent}%</div> : null}
                </div>
                <div className="font-bold ml-[10px] text-red-500">
                  {saleStatus
                    ? StringHelper.toPrice(Math.floor((item.price * (100 - item.saleId.salePercent)) / 100)) + "đ"
                    : StringHelper.toPrice(item?.price) + "đ"}
                </div>
              </div>
              <div className="product__action mb-[22px] ml-[10px]">
                <div
                  className={`relative px-1 rounded-lg h-4 w-[98px] }`}
                  style={{ backgroundColor: item.isInstallment ? "rgb(241, 243, 249)" : "white" }}
                >
                  <div className={`absolute rounded-lg flex top-[1px] ${item.isInstallment ? "" : "hidden"}`}>
                    <img
                      src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png"
                      alt="promotion-icon"
                      className="absolute rounded-lg top-[1px] inline-block w-3 h-3"
                    />
                    <span className="text-[0.65rem] whitespace-nowrap ml-4" style={{ color: "rgb(19, 48, 150)" }}>
                      Trả góp Kredivo
                    </span>
                  </div>
                </div>
              </div>
              <div className="product__footer">
                <div className="flex">
                  <div>{item.rate}/5</div>
                  <div className="relative ml-1 top-[3px] leading-[10px] text-[10px] text-yellow-400">★</div>
                </div>
                <span className="product__footer-origin">{item.shopId.address}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`flex ${!paginatedProducts.hasMore ? "hidden" : "cursor-pointer"}`} onClick={handleLoadMore}>
        <div className="mx-auto bg-white py-3 px-20 sm:px-40 sm:mt-12 sm:mb-20 my-10 rounded-md font-semibold">
          Xem thêm
        </div>
      </div>
    </div>
  );
};
