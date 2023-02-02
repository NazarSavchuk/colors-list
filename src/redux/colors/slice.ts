import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchColors } from "./asyncAction";

import { FETCH_STATUS } from "./types";
import { DataItem } from "./types";

type InititalState = {
  items: any;
  status: FETCH_STATUS;
};

const initialState: InititalState = {
  items: [],
  status: FETCH_STATUS.LOADING, //loading | success | error
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<any>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchColors.pending, (state) => {
      state.status = FETCH_STATUS.LOADING;
      state.items = [];
    });

    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = FETCH_STATUS.SUCCESS;
    });

    builder.addCase(fetchColors.rejected, (state) => {
      state.status = FETCH_STATUS.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = colorSlice.actions;

export default colorSlice.reducer;
