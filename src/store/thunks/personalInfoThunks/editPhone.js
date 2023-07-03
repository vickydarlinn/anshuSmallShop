import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
// this will edit name in specific's user cart.

const editPhone = createAsyncThunk(
  "personalInfo/phoneEdit",
  async function ({ userId, editedPhone }) {
    const phoneRef = doc(db, "users", userId);
    await updateDoc(phoneRef, {
      phone: editedPhone,
    });
    console.log("phone edited successfully!");
    return editedPhone;
    //
  }
);
export { editPhone };
