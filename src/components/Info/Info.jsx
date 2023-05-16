import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productApi } from "../../redux/apiRequest/product.api";
import { setFilter } from "../../redux/slice/category.slice";
import { toggleSelectedProduct } from "../../redux/slice/product.slice";
import { Detail } from "./Detail.info";

export const Info = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const productId = localStorage.getItem("productId");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickNavigation = () => {
    dispatch(
      setFilter({
        categoryDetailId: selectedProduct?.categoryDetailId?._id,
      })
    );
    navigate("/category");
  };

  useEffect(() => {
    if (productId) {
      productApi.getProductInfo(dispatch, productId);
    } else {
      navigate("/");
    }
    return () => {
      dispatch(toggleSelectedProduct(null));
    };
  }, []);

  return (
    <div className="mt-[70px] sm:mt-[100px] bg-slate-100">
      <div className="xl:max-w-[1308px] lg:max-w-[900px] md:max-w-[750px] mx-auto">
        <div className="hidden sm:block opacity-80 text-sm py-4">
          <a href="/">sendo.vn</a>
          <span className="mx-2">/</span>
          <span
            className="cursor-pointer"
            onClick={handleClickNavigation}
          >{`${selectedProduct?.categoryDetailId?.categoryId?.name}`}</span>
          <span className="mx-2">/</span>
          <span
            className="cursor-pointer"
            onClick={handleClickNavigation}
          >{`${selectedProduct?.categoryDetailId?.name}`}</span>
        </div>
        {selectedProduct ? <Detail /> : null}
        <div className="h-4"></div>
      </div>
    </div>
  );
};
