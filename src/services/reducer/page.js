import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../action/page";

const initialState = {
  data: null,
  loading: true,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.data = null;
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchData.rejected]: (state) => {
      state.data = null;
      state.loading = false;
    },
  },
});

export default pageSlice;
