import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, signOut } from "../action/auth";

const initialState = {
  data: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [signUp.rejected]: (state, { payload }) => {
      state.data = payload;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [signIn.rejected]: (state, { payload }) => {
      state.data = payload;
    },
    [signOut.fulfilled]: () => {},
    [signOut.rejected]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default authSlice;
