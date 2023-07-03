import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";

const editAddress = createAsyncThunk(
  "personalInfo/editAddress",
  async function ({ userId, allAddresses, updateAddress }) {
    console.log(userId, allAddresses, updateAddress);
    const updatedAddresses = allAddresses.map((item) => {
      if (item.id === updateAddress.id) {
        return { ...updateAddress };
      }
      return item;
    });
    console.log(updatedAddresses);
    const addressRef = doc(db, "users", userId);
    await updateDoc(addressRef, {
      addresses: updatedAddresses,
    });
    console.log("address updated successfully!");
    return updatedAddresses;
    //
  }
);
export { editAddress };
