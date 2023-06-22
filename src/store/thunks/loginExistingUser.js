import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
// this thunk will fetch the products from the database.

const loginExistingUser = createAsyncThunk(
  "user/login",
  async function ({ email, pass }) {
    console.log(email, pass);
    const user = await signInWithEmailAndPassword(auth, email, pass);
    return {
      userId: user.user.uid,
    };
    //
  }
);

export { loginExistingUser };

// async function loginAccount(email, pass) {
//   try {
//     const user = await signInWithEmailAndPassword(auth, email, pass);
//     return {
//       message: "login successfully",
//       userId: user.user.uid,
//     };
//   } catch (e) {
//     return e;
//   }
// }
// export { registerAccount, loginAccount };
