import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/authSlice/login.slice";
import profileReducer from "./features/profileSlice/profile.slice";
import bannerReducer from "./features/bannerSlice/banner.slice";
import servicesReducer from "./features/servicesSlice/services.slice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    banner: bannerReducer,
    services: servicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
