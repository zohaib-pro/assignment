import { configureStore } from '@reduxjs/toolkit';
import checkInSlice from "@/app/redux/slice";

export const store = configureStore({
  reducer: {
    checkIn: checkInSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
