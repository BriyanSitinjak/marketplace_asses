import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchPrices } from "../../services/api";
import { mergeProducts } from "../../utils/mergeProducts";
import { ProductState } from "../../types/index";

export const loadProducts = createAsyncThunk(
  "products/load",
  async () => {
    const [products, prices] = await Promise.all([
      fetchProducts(),
      fetchPrices()
    ]);

    return mergeProducts(products, prices);
  }
);

const initialState: ProductState = {
  list: [],
  status: "idle"
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      });
  }
});

export default productSlice.reducer;
