import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckOutPage: false,
  isChanging: false,
  addressList: [],
};

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    setIsCheckOutPage(state, action) {
      state.isCheckOutPage = action.payload;
    },
    setIsChanging(state, action) {
      state.isChanging = action.payload;
    },
    addAddressList(state, action) {
      state.addressList = action.payload;
    },
  },
});

export const { setIsCheckOutPage, setIsChanging, addAddressList } = checkOutSlice.actions;

export default checkOutSlice.reducer;
