import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateFilterI {
  searchId: number;
  page: number;
}

const initialState: InitialStateFilterI = {
  searchId: NaN,
  page: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<any>) {
      state.page = action.payload;
    },
    setSearchId(state, action: PayloadAction<any>) {
      state.searchId = action.payload;
    },
  },
});

export const { setPage } = filterSlice.actions;
export const { setSearchId } = filterSlice.actions;
export default filterSlice.reducer;
