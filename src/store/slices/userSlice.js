import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "../thunks/createNewUser";
import { loginExistingUser } from "../thunks/loginExistingUser";
import { addToCart } from "../thunks/addToCart";
import { addToWishlist } from "../thunks/addToWishlist";
import { removeFromCart } from "../thunks/removeFromCart";
import { increaseQty } from "../thunks/increaseQty";
import { decreaseQty } from "../thunks/decreaseQty";
import { moveToCart } from "../thunks/moveToCart";
import { removeFromWishlist } from "../thunks/removeFromWishlist";
import { editName } from "../thunks/personalInfoThunks/editName";
import { editEmail } from "../thunks/personalInfoThunks/editEmail";
import { editPhone } from "../thunks/personalInfoThunks/editPhone";
import { addAddress } from "../thunks/personalInfoThunks/addAddress";
import { removeAddress } from "../thunks/personalInfoThunks/removeAddress";
import { editAddress } from "../thunks/personalInfoThunks/editAddress";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    isUserLoggedIn: false,
    userId: null,
    userPersonalInfo: {
      name: "",
      sex: "",
      email: "",
      phone: "",
      addresses: [],
    },
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
        state.isUserLoggedIn = false;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.isUserLoggedIn = true;
        state.userId = action.payload.userId;
        state.userPersonalInfo.name = action.payload.name;
        state.userPersonalInfo.email = action.payload.email;
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
        state.userPersonalInfo.name = action.payload.name;
        state.userPersonalInfo.phone = action.payload.phone;
        state.userPersonalInfo.email = action.payload.email;
        state.userPersonalInfo.addresses = action.payload.addresses;
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
      // remover from wishlist for logged users
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.userWishlist = state.userWishlist.filter(
          (wishlistProduct) => wishlistProduct.id !== action.payload.id
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
      .addCase(increaseQty.rejected, (state, action) => {})
      // decrease the cart quantity.
      .addCase(decreaseQty.fulfilled, (state, action) => {
        state.userCart = action.payload;
      })
      // move to cart from wishlist
      .addCase(moveToCart.fulfilled, (state, action) => {
        const isAlreadyInCart = state.userCart.find(
          (item) => item.id === action.payload.id
        );
        if (!isAlreadyInCart) {
          state.userCart.push(action.payload);
        }

        state.userWishlist = state.userWishlist.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(editName.fulfilled, (state, action) => {
        state.userPersonalInfo.name = action.payload;
      })
      .addCase(editEmail.fulfilled, (state, action) => {
        state.userPersonalInfo.email = action.payload;
      })
      .addCase(editPhone.fulfilled, (state, action) => {
        state.userPersonalInfo.phone = action.payload;
      })
      // add address to user
      .addCase(addAddress.fulfilled, (state, action) => {
        state.userPersonalInfo.addresses.push(action.payload);
      })
      // remove address from user
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.userPersonalInfo.addresses =
          state.userPersonalInfo.addresses.filter(
            (address) => address.id !== action.payload.id
          );
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.userPersonalInfo.addresses = action.payload;
      });
  },
});

export const userSliceReducer = userSlice.reducer;
