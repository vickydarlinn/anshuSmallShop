import { configureStore } from "@reduxjs/toolkit";
import { storeSliceReducer } from "./slices/storeSlice";

const store = configureStore({
  reducer: {
    store: storeSliceReducer,
  },
});

export { store };

// when I will import thunk, they will be imported from the store.
export * from "./thunks/fetchStoreProducts";
