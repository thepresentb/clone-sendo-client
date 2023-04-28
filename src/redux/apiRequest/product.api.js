import { baseAxios } from "../baseAxios";
import {
  addFlashSaleList,
  addPaginatedProducts,
  loadMorePaginatedProducts,
  toggleSelectedProduct,
} from "../slice/product.slice";

const getFlashSaleList = async (dispatch) => {
  const res = await baseAxios.get("products/flash_sale");
  if (res.data.statusCode === 200) {
    dispatch(addFlashSaleList(res.data.data));
  }
};

const getPaginatedProducts = async (dispatch, filter, loadMore = false) => {
  const res = await baseAxios.post("products/paginate", filter);
  if (res.data.statusCode === 200) {
    if (loadMore) {
      return dispatch(loadMorePaginatedProducts(res.data.data));
    }
    dispatch(addPaginatedProducts(res.data.data));
  }
};

const getProductInfo = async (dispatch, id) => {
  const res = await baseAxios.post("products/info", {
    id,
  });
  if (res.data.statusCode === 200) {
    dispatch(toggleSelectedProduct(res.data.data));
  }
};

export { getFlashSaleList, getPaginatedProducts, getProductInfo };
