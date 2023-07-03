import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
// this will remove address in specific's user cart.
const removeAddress = createAsyncThunk(
  "personalInfo/removeAddress",
  async function ({ userId, allAddresses, address }) {
    console.log(userId, allAddresses, address);
    // this will take that user's all addresses  and the address which user want to remove.
    const updatedAddresses = allAddresses.filter(
      (item) => item.id !== address.id
    );
    const addressRef = doc(db, "users", userId);
    await updateDoc(addressRef, {
      addresses: updatedAddresses,
    });
    console.log("address removed successfully!");
    return address;
    //
  }
);
export { removeAddress };
