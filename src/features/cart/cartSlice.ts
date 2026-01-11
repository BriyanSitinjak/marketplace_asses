import { CartItem, ProductWithPrice } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductWithPrice>) {
      const item = state.find(i => i.id === action.payload.id);
      console.log('check hitting', item);
      
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      return state.filter(item => item.id !== action.payload);
    },
    clearCart() {
      return [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
