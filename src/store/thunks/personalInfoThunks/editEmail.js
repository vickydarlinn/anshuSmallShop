import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
// this will edit name in specific's user cart.

const editEmail = createAsyncThunk(
  "personalInfo/emailEdit",
  async function ({ userId, editedEmail }) {
    const emailRef = doc(db, "users", userId);
    await updateDoc(emailRef, {
      email: editedEmail,
    });
    console.log("email edited successfully!");
    return editedEmail;
    //
  }
);
export { editEmail };
