import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { instance } from "../../../libs/instance";

const apiClient = instance({ baseURL: import.meta.env.VITE_BASE_API_URL });

export interface servicesState {
  status: "success" | "loading" | "failed" | null;
  message: string;
  data: any[];
}

export const useGetServices = createAsyncThunk("services/getServices", async () => {
  try {
    const response = await apiClient.get("/services");
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

const initialState: servicesState = {
  status: null,
  message: "",
  data: [],
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useGetServices.pending.type, (state: servicesState) => {
      state.status = "loading";
    });
    builder.addCase(
      useGetServices.fulfilled,
      (state: servicesState, action: PayloadAction<servicesState>) => {
        state.status = "success";
        state.message = action.payload.message;
        state.data = action.payload.data;
      }
    );
    builder.addCase(useGetServices.rejected, (state: servicesState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default servicesSlice.reducer;
