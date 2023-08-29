import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { instance } from "../../../libs/instance";

const apiClient = instance({ baseURL: import.meta.env.VITE_BASE_API_URL });

export interface bannerState {
  status: "success" | "loading" | "failed" | null;
  message: string;
  data: Array<{ banner_name: string; banner_image: string; description: string }>;
}

export const useGetBanners = createAsyncThunk("banners/getBanners", async () => {
  try {
    const response = await apiClient.get("/banner");
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

const initialState: bannerState = {
  status: null,
  message: "",
  data: [],
};

export const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useGetBanners.pending.type, (state: bannerState) => {
      state.status = "loading";
    });
    builder.addCase(
      useGetBanners.fulfilled,
      (state: bannerState, action: PayloadAction<bannerState>) => {
        state.status = "success";
        state.message = action.payload.message;
        state.data = action.payload.data;
      }
    );
    builder.addCase(useGetBanners.rejected, (state: bannerState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default bannerSlice.reducer;
