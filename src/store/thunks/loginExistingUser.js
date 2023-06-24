import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

// this thunk will fetch the existing user from the database and their data too.

const loginExistingUser = createAsyncThunk(
  "user/login",
  async function ({ email, pass }) {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    const userId = user.user.uid;
    const userRef = doc(db, "users", userId);
    const docSnapshot = await getDoc(userRef);
    const userData = docSnapshot.data();
    return { ...userData, userId };

    //
  }
);

export { loginExistingUser };

// If any errors see in the future, then check this thunk vicky.
