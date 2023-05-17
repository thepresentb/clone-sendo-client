import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCheckOutPage: false,
  selectedAddress: null,
  paymentMethodCode: "CARD",
  editingAddress: null,
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
    setPaymentMethodCode(state, action) {
      state.paymentMethodCode = action.payload;
    },
    setEditingAddress(state, action) {
      state.editingAddress = action.payload;
    },
    addAddressList(state, action) {
      state.addressList = action.payload;
      const defaultAddress = action.payload?.filter((address) => address.isDefault === true);
      state.selectedAddress = defaultAddress[0];
    },
  },
});

export const { setIsCheckOutPage, setSelectedAddress, addAddressList, setEditingAddress, setPaymentMethodCode } =
  checkOutSlice.actions;

export default checkOutSlice.reducer;
