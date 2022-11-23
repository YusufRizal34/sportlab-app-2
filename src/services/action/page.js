import { createAsyncThunk } from "@reduxjs/toolkit";
import PageService from "../store/page.service";

export const fetchData = createAsyncThunk("page/fetchData", async (page) => {
  try {
    const data = await PageService.fetchData(page);
    return data;
  } catch (error) {
    return error.response.data;
  }
});
