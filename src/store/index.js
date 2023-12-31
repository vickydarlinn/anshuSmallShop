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
export * from "./thunks/loginExistingUser";
export * from "./thunks/addToCart";
export * from "./thunks/addToWishlist";
export * from "./thunks/removeFromCart";
export * from "./thunks/increaseQty";
export * from "./thunks/decreaseQty";
export * from "./thunks/moveToCart";
export * from "./thunks/removeFromWishlist";
export * from "./thunks/personalInfoThunks/editName";
export * from "./thunks/personalInfoThunks/editEmail";
export * from "./thunks/personalInfoThunks/editPhone";
export * from "./thunks/personalInfoThunks/addAddress";
export * from "./thunks/personalInfoThunks/removeAddress";
export * from "./thunks/personalInfoThunks/editAddress";
