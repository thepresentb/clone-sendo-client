import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flashSale: [],
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
  },
});

export const { addFlashSaleList, addPaginatedProducts, loadMorePaginatedProducts } = productSlice.actions;

export default productSlice.reducer;
