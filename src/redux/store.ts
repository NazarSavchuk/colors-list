import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import color from "./colors/slice";

export const store = configureStore({
  reducer: {
    color,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
