import { configureStore } from "@reduxjs/toolkit";
import readyReducer from "../redux/features/startSlice"

export const store = configureStore({
  reducer: {
    ready: readyReducer
  },
});
