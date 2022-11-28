import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../store/product.service";

export const addToCart = createAsyncThunk("product/addToCart", async (data) => {
  try {
    const response = await ProductService.addToCart(
      data.page,
      data.productData
    );
    return response;
  } catch (error) {
    return error.response.data;
  }
});

export const buyProduct = createAsyncThunk(
  "product/buyProduct",
  async (data) => {
    try {
      const response = await ProductService.buyProduct(
        data.page,
        data.productData
      );
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (page) => {
    try {
      const response = await ProductService.deleteProduct(page);
      return response;
    } catch (error) {
      return error.response.data;
    }
  }
);
