import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface baseState {
  status: "success" | "loading" | "failed" | null;
  message: string;
  data: any[];
}

export const useBase = createAsyncThunk("base/getBase", async () => {
  try {
    const response = { data: [] };
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

const initialState: baseState = {
  status: null,
  message: "",
  data: [],
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useBase.pending.type, (state: baseState) => {
      state.status = "loading";
    });
    builder.addCase(useBase.fulfilled, (state: baseState, action: PayloadAction<baseState>) => {
      state.status = "success";
      state.message = action.payload.message;
      state.data = action.payload.data;
    });
    builder.addCase(useBase.rejected, (state: baseState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default baseSlice.reducer;
