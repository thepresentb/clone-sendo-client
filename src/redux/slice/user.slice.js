import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenState: "",
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    toggleAuthenState(state, action) {
      state.authenState = action.payload;
    },
  },
});

export const { addUser, toggleAuthenState } = userSlice.actions;

export default userSlice.reducer;
