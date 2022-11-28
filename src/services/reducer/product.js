import { createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteProduct, buyProduct } from "../action/product";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [addToCart.pending]: (state, action) => {
      state.data = null;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [addToCart.rejected]: (state) => {
      state.data = null;
    },
    [buyProduct.fulfilled]: () => {},
    [buyProduct.rejected]: (state, payload) => {
      state.data = payload;
    },
    [deleteProduct.fulfilled]: () => {},
    [deleteProduct.rejected]: (state, payload) => {
      state.data = payload;
    },
  },
});

export default productSlice;
