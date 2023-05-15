import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckOutPage: false,
  selectedAddress: null,
  addressList: [],
};

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState,
  reducers: {
    setIsCheckOutPage(state, action) {
      state.isCheckOutPage = action.payload;
    },
    setSelectedAddress(state, action) {
      state.selectedAddress = action.payload;
    },
    addAddressList(state, action) {
      state.addressList = action.payload;
      const defaultAddress = action.payload?.filter((address) => address.isDefault === true);
      state.selectedAddress = defaultAddress[0];
    },
  },
});

export const { setIsCheckOutPage, setSelectedAddress, addAddressList } = checkOutSlice.actions;

export default checkOutSlice.reducer;
