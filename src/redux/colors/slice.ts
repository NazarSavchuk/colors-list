import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchColors } from "./asyncAction";

import { FETCH_STATUS } from "./types";
import { DataType } from "./types";

interface InitialStateI {
  itemsData: DataType;
  status: FETCH_STATUS;
}

const initialState: InitialStateI = {
  itemsData: {
    page: 1,
    per_page: 5,
    total: 12,
    total_pages: 3,
    data: [],
    support: {
      url: "",
      text: "",
    },
  },
  status: FETCH_STATUS.LOADING, //loading | success | error
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setItems(state, action) {
      state.itemsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchColors.pending, (state) => {
      state.status = FETCH_STATUS.LOADING;
      state.itemsData = state.itemsData;
    });

    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.itemsData = action.payload;
      state.status = FETCH_STATUS.SUCCESS;
    });

    builder.addCase(fetchColors.rejected, (state) => {
      state.status = FETCH_STATUS.ERROR;
      state.itemsData = state.itemsData;
    });
  },
});

export const { setItems } = colorSlice.actions;

export default colorSlice.reducer;
