import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/category.slice";
import productReducer from "./slice/product.slice";
import userReducer from "./slice/user.slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    user: userReducer,
  },
});
