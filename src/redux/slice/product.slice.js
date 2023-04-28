import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashSale: [],
  selectedProduct: null,
  paginatedProducts: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addFlashSaleList(state, action) {
      state.flashSale = action.payload;
    },
    addPaginatedProducts(state, action) {
      state.paginatedProducts = action.payload;
    },
    loadMorePaginatedProducts(state, action) {
      state.paginatedProducts.cursor = action.payload.cursor;
      state.paginatedProducts.hasMore = action.payload.hasMore;
      state.paginatedProducts.paginatedProducts = [
        ...state.paginatedProducts.paginatedProducts,
        ...action.payload.paginatedProducts,
      ];
    },
    toggleSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { addFlashSaleList, addPaginatedProducts, loadMorePaginatedProducts, toggleSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
