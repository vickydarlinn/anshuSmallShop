import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

// this will add address specific's user cart.
const addAddress = createAsyncThunk(
  "personalInfo/addAddress",
  async function ({ userId, address }) {
    const addressRef = doc(db, "users", userId);
    await updateDoc(addressRef, {
      addresses: arrayUnion(address),
    });
    console.log("address added successfully!");
    return address;
    //
  }
);
export { addAddress };
