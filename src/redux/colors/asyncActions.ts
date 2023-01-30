import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Color } from "./types";

export const fetchColors = createAsyncThunk<Color[], Record<string, string>>(
  "color/fetchColorsStatus",
  async (params: Record<string, string>) => {
    const { search } = params;
    const { data } = await axios.get(`https://reqres.in/api/products`);

    return data;
  }
);
