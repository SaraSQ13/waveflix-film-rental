import { createAsyncThunk } from "@reduxjs/toolkit";
import { enviroment } from "../_enviroments/enviroments";

//search

export const search = createAsyncThunk("search", async (query) => {
  const res = await fetch(`${enviroment.BASE_API_URL}/movie?q=${query}`);
  const data = await res.json();
  return data;
});
