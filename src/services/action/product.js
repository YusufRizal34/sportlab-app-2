import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../store/product.service";

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
