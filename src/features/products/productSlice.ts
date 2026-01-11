import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/api";
import { ProductWithPrice } from "../../types/index";

export const loadProducts = createAsyncThunk(
  "products/load",
  async () => {
    return await fetchProducts();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as ProductWithPrice[],
    status: "idle"
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      });
  }
});

export default productSlice.reducer;
