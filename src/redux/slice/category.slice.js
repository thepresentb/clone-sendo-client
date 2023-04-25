import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedCategoryId: null,
  isCategoryPage: false,
  filter: {},
  orderBy: {},
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategoryList(state, action) {
      state.list = action.payload;
      state.selectedCategoryId = action.payload[1].category._id;
    },

    toggleSelectedCategoryId(state, action) {
      state.selectedCategoryId = action.payload;
    },
    setIsCategoryPage(state, action) {
      state.isCategoryPage = action.payload;
    },
    setFilter(state, action) {
      console.log(action.payload);
      state.filter = action.payload;
    },
    setOrderBy(state, action) {
      state.orderBy = action.payload;
    },
  },
});

export const { addCategoryList, toggleSelectedCategoryId, setIsCategoryPage, setFilter, setOrderBy } =
  categorySlice.actions;

export default categorySlice.reducer;
