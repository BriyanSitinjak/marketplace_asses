import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const simulateCheckout = createAsyncThunk(
  "checkout/simulateCheckout",
  async () => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }
);

type CheckoutState = {
  status: "idle" | "loading" | "success";
};

const initialState: CheckoutState = {
  status: "idle"
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    resetCheckout: () => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(simulateCheckout.pending, state => {
        state.status = "loading";
      })
      .addCase(simulateCheckout.fulfilled, state => {
        state.status = "success";
      });
  }
});

export const { resetCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
