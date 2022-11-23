import { createSlice } from "@reduxjs/toolkit";
import { buyProduct } from "../action/product";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "page",
  initialState,
  extraReducers: {
    [buyProduct.pending]: (state, action) => {
      state.data = null;
    },
    [buyProduct.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [buyProduct.rejected]: (state) => {
      state.data = null;
    },
  },
});

export default productSlice;
