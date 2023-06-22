import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "../thunks/createNewUser";
import { loginExistingUser } from "../thunks/loginExistingUser";
import { addToCart } from "../thunks/addToCart";
import { addToWishlist } from "../thunks/addToWishlist";
import { removeFromCart } from "../thunks/removeFromCart";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    isUserLoggedIn: false,
    userId: null,
    userName: "",
    userCart: [],
    userWishlist: [],
    creatingAccountError: null,
    loginAccountError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // creating new account for user.
    builder
      .addCase(createNewUser.pending, (state, action) => {
        // console.log("createNewUser is pending");
        state.isUserLoggedIn = false;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
        state.userId = action.payload.userId;
        state.userName = action.payload.name;
        // Update the state based on the fulfilled action
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.isUserLoggedIn = false;
        state.creatingAccountError = action.error;
      })
      //   login for existing user..
      .addCase(loginExistingUser.pending, (state, action) => {
        state.isUserLoggedIn = false;
      })
      .addCase(loginExistingUser.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
        state.userId = action.payload.userId;
      })
      .addCase(loginExistingUser.rejected, (state, action) => {
        state.isUserLoggedIn = false;
        state.loginAccountError = action.error;
      })
      //   add to cart for logged users
      .addCase(addToCart.fulfilled, (state, action) => {
        state.userCart.push(action.payload);
        //
      })

      //   remove from cart for logged users
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.userCart = state.userCart.filter(
          (cartProduct) => cartProduct.id !== action.payload.id
        );
      })

      //   add to wishlist for logged users
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.userWishlist.push(action.payload);
        //
      });
  },
});

export const userSliceReducer = userSlice.reducer;
