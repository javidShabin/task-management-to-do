import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserReady: true,
  ready: {},
};

export const startSlice = createSlice({
  name: "ready",
  initialState,
  reducers: {
    checkIs: (state, action) => {
      (state.isUserReady = false), (state.ready = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkIs } = startSlice.actions;

export default startSlice.reducer;
