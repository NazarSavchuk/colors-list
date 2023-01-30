import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchColors } from "./asyncActions";
import { Color, ColorSliceState, Status } from "./types";

const initialState: ColorSliceState = {
  items: [],
  status: Status.LOADING,
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Color[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchColors.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchColors.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchColors.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = colorSlice.actions;
export default colorSlice.reducer;
