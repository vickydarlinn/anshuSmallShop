import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
// this will edit name in specific's user cart.

const editName = createAsyncThunk(
  "personalInfo/nameEdit",
  async function ({ userId, editedName }) {
    const nameRef = doc(db, "users", userId);
    await updateDoc(nameRef, {
      name: editedName,
    });
    console.log("name edited successfully!");
    return editedName;
    //
  }
);
export { editName };
