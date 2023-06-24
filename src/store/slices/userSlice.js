import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "../thunks/createNewUser";
import { loginExistingUser } from "../thunks/loginExistingUser";
import { addToCart } from "../thunks/addToCart";
import { addToWishlist } from "../thunks/addToWishlist";
import { removeFromCart } from "../thunks/removeFromCart";
import { increaseQty } from "../thunks/increaseQty";
import { decreaseQty } from "../thunks/decreaseQty";
import { moveToCart } from "../thunks/moveToCart";

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
        state.userName = action.payload.name;
        state.userCart = action.payload.cart;
        state.userWishlist = action.payload.wishlist;
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
      })
      // increase the cart quantity.
      .addCase(increaseQty.pending, (state, action) => {
        console.log("hi you are in slice in pending");
      })
      .addCase(increaseQty.fulfilled, (state, action) => {
        state.userCart = action.payload;
      })
      .addCase(increaseQty.rejected, (state, action) => {
        console.log("hi you are have an err");
        console.log(action.error);
      })
      // decrease the cart quantity.
      .addCase(decreaseQty.fulfilled, (state, action) => {
        state.userCart = action.payload;
      })
      // move to cart from wishlist
      .addCase(moveToCart.fulfilled, (state, action) => {
        state.userCart.push(action.payload);
        state.userWishlist = state.userWishlist.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const userSliceReducer = userSlice.reducer;
