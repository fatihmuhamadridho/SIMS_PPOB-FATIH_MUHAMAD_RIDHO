import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface loginState {
  status: "success" | "loading" | "failed" | null;
  message: string;
  data?: {
    token: string;
  };
}

export interface loginPostState {
  email: string;
  password: string;
}

export const postLogin = createAsyncThunk("auth/login", async (payload: loginPostState) => {
  try {
    const response = await axios.post(import.meta.env.VITE_BASE_API_URL + "/login", payload);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

const initialState: loginState = {
  status: null,
  message: "",
  data: undefined,
};

export const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postLogin.pending, (state: loginState) => {
      state.status = "loading";
    });
    builder.addCase(postLogin.fulfilled, (state: loginState, action: PayloadAction<loginState>) => {
      console.log({ action });
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.data;
      localStorage.setItem("access_token", String(action.payload.data?.token));
    });
    builder.addCase(
      postLogin.rejected.type,
      (state: loginState, action: PayloadAction<loginState>) => {
        state.status = "failed";
        state.message = action.payload.message;
        state.data = undefined;
      }
    );
  },
});

export default loginSlice.reducer;
