import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { instance } from "../../../libs/instance";

const apiClient = instance({ baseURL: import.meta.env.VITE_BASE_API_URL });

export interface profileState {
  status: "success" | "loading" | "failed" | null;
  message: string;
  data: any[];
}

export const useGetProfile = createAsyncThunk("profile/getProfile", async () => {
  try {
    const response: any = await apiClient.get("/profile");
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
});

const initialState: profileState = {
  status: null,
  message: "",
  data: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(useGetProfile.pending.type, (state: profileState) => {
      state.status = "loading";
    });
    builder.addCase(
      useGetProfile.fulfilled,
      (state: profileState, action: PayloadAction<profileState>) => {
        state.status = "success";
        state.message = action.payload.message;
        state.data = action.payload.data;
      }
    );
    builder.addCase(useGetProfile.rejected, (state: profileState) => {
      state.status = "failed";
      state.data = [];
    });
  },
});

export default profileSlice.reducer;
