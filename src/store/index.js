import { configureStore } from "@reduxjs/toolkit";
import { storeSliceReducer } from "./slices/storeSlice";
import { userSliceReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    store: storeSliceReducer,
    user: userSliceReducer,
  },
});

export { store };

// when I will import thunk, they will be imported from the store.
export * from "./thunks/fetchStoreProducts";
export * from "./thunks/createNewUser";
