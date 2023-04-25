import { baseAxios } from "../baseAxios";
import { addFlashSaleList, addPaginatedProducts, loadMorePaginatedProducts } from "../slice/product.slice";

const getFlashSaleList = async (dispatch) => {
  const res = await baseAxios.get("products/flash_sale");
  dispatch(addFlashSaleList(res.data.data));
};

const getPaginatedProducts = async (dispatch, filter, loadMore = false) => {
  const res = await baseAxios.post("products/paginate", filter);
  if (loadMore) {
    return dispatch(loadMorePaginatedProducts(res.data.data));
  }
  dispatch(addPaginatedProducts(res.data.data));
};

export { getFlashSaleList, getPaginatedProducts };
