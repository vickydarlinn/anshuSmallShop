import { createSlice } from "@reduxjs/toolkit";
import { createNewUser } from "../thunks/createNewUser";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    isUserLoggedIn: false,
    userId: null,
    userCart: [],
    userWishlist: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.pending, (state) => {
        console.log("createNewUser is pending");
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        console.log("createNewUser is fulfilled");
        console.log(action.payload);
        // Update the state based on the fulfilled action
      })
      .addCase(createNewUser.rejected, (state, action) => {
        console.log("createNewUser has failed");
        console.log(action.error);
        // Update the state based on the rejected action
      });
  },
});

export const userSliceReducer = userSlice.reducer;
