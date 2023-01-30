import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchColors } from "./asyncAction";

const initialState: any = {
  items: [],
  status: "loading", //loading | success | error
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
    builder.addCase(fetchColors.pending, (state, action) => {
      state.status = "loading";
      state.items = [];
    });

    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });

    builder.addCase(fetchColors.rejected, (state, action) => {
      state.status = "error";
      state.items = [];
    });
  },
});

export const { setItems } = colorSlice.actions;

export default colorSlice.reducer;
