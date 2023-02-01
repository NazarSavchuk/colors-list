import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchColors = createAsyncThunk(
  "color/fetchColorsStatus",
  async (params: { page: number; searchId: number }) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_FETCH_URL}?per_page=5&page=${params.page}&id=${params.searchId}`
    );
    return data;
  }
);
