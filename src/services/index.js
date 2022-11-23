import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./reducer/page";
import authSlice from "./reducer/auth";
import productSlice from "./reducer/product";

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
