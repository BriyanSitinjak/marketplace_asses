import { createSelector } from "@reduxjs/toolkit";

export const selectCartTotal = createSelector(
  [state => state.cart],
  cart => cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  )
);
