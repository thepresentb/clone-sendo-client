import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedCategoryId: null,
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
      console.log(action.payload);
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { addCategoryList, toggleSelectedCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
