import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

export const selectProducts = (state: RootState) => state.products.items;

export const selectCategories = createSelector(
  [selectProducts],
  products => {
    const categories = new Set(products.map(p => p.category));
    return ["ALL", ...Array.from(categories)];
  }
);
