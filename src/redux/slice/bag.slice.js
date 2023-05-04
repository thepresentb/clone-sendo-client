import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBagPage: false,
  bag: [],
};

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setIsBagPage(state, action) {
      state.isBagPage = action.payload;
    },
    addBag(state, action) {
      state.bag = action.payload;
    },
  },
});

export const { setIsBagPage, addBag } = bagSlice.actions;

export default bagSlice.reducer;
