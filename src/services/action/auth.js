import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../store/auth.service";

export const signUp = createAsyncThunk("auth/signUp", async (user) => {
  try {
    const data = await AuthService.signUp(user);
    return data;
  } catch (error) {
    return error.response.data;
  }
});

export const signIn = createAsyncThunk("auth/signIn", async (user) => {
  try {
    const data = await AuthService.signIn(user);
    return data;
  } catch (error) {
    return error.response.data;
  }
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
  try {
    const data = await AuthService.signOut();
    return data;
  } catch (error) {
    return error.response.data;
  }
});
