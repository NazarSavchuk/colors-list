import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchColors = createAsyncThunk(
  "color/fetchColorsStatus",
  async (params: { page: number }) => {
    const { data } = await axios.get(
      `https://reqres.in/api/products?per_page=5&page=${params.page}`
    );
    return data;
  }
);
