import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

const selectProductState = (state: RootState) => state.products;

export const selectProductList = createSelector(
  [selectProductState],
  products => products.list
);

export const selectProductStatus = createSelector(
  [selectProductState],
  products => products.status
);

export const selectProductCategories = createSelector(
  [selectProductList],
  list => ["ALL", ...Array.from(new Set(list.map(p => p.category)))]
);
