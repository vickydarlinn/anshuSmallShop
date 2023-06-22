import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "../thunks/createNewUser";
import { loginExistingUser } from "../thunks/loginExistingUser";

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
      });
  },
});

export const userSliceReducer = userSlice.reducer;
