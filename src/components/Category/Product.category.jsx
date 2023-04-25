import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedProducts } from "../../redux/apiRequest/product.api";
import { StringHelper } from "../../utils/StringHelper";

export const Product = () => {
  const { paginatedProducts } = useSelector((state) => state?.product);
  const filter = JSON.parse(localStorage.getItem("filter"));
  const dispatch = useDispatch();

  useEffect(() => {
    getPaginatedProducts(dispatch, {
      filter: filter ? filter : {},
      limit: 40,
      orderBy: {
        // createdAt: -1,
        // rate: -1,
      },
    });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
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
            className="relative bg-white rounded w-[175px] shadow-center product__item cursor-pointer md:w-[12.5rem] lg:w-[12.5rem] xl:w-[12.5rem]"
            key={item._id}
          >
            <div className="product__back" style={{ backgroundImage: `url('${item.imgUrl}')` }}></div>
            <div className="product__name">{item.name}</div>
            <div className="product__price">
              <span className={`product__price-old`}>{saleStatus ? StringHelper.toPrice(item?.price) + "đ" : " "}</span>
              <span className="product__price-current">
                {saleStatus
                  ? StringHelper.toPrice(Math.floor((item.price * (100 - item.saleId.salePercent)) / 100)) + "đ"
                  : StringHelper.toPrice(item?.price) + "đ"}
              </span>
            </div>
            <div className="product__action">
              <div
                className={`relative px-1 rounded-lg h-4 w-[98px] }`}
                style={{ backgroundColor: item.isInstallment ? "rgb(241, 243, 249)" : "white" }}
              >
                <div className={`absolute flex top-[1px] ${item.isInstallment ? "" : "hidden"}`}>
                  <img
                    src="https://media3.scdn.vn/img4/2022/06_24/V5PHsdxRbMf35yH1KO0h.png"
                    alt="promotion-icon"
                    className="absolute top-[1px] inline-block w-3 h-3"
                  />
                  <span className="text-[0.65rem] whitespace-nowrap ml-4" style={{ color: "rgb(19, 48, 150)" }}>
                    Trả góp Kredivo
                  </span>
                </div>
              </div>
              <span className="product__action-sold">{item.total - item.quantity} Đã bán</span>
            </div>
            <div className="product__footer">
              <div className="flex">
                <div className="mr-1">
                  <svg className="svg-icon w-[0.9rem]" viewBox="0 0 20 20">
                    <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
                  </svg>
                </div>
                <div>{item.rate}/5</div>
              </div>
              <span className="product__footer-origin">{item.shopId.address}</span>
            </div>
            <span className="product__favourite">
              <i className="fa-solid fa-check"></i>
              <i>Yêu thích</i>
            </span>
            <div className={`product__sale ${saleStatus ? "" : "hidden"}`}>
              <span className="product__sale-percent">{item?.saleId?.salePercent}%</span>
              <span className="product__sale-p">GIẢM</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
