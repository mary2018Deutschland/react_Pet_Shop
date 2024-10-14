import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../App";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await axios.get(`${API_URL}/products/all`);
      console.log("hallo");
      return response.data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);
export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const response = await axios.get(`${API_URL}/categories/all`);
      console.log("hallo");
      return response.data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);
