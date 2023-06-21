import { createSlice } from "@reduxjs/toolkit";
import { fetchStoreProducts } from "../thunks/fetchStoreProducts";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchStoreProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchStoreProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchStoreProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const storeSliceReducer = storeSlice.reducer;
