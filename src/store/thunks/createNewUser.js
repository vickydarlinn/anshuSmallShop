import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase.config";
import { db } from "../../firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";

import { createUserWithEmailAndPassword } from "firebase/auth";

const createNewUser = createAsyncThunk(
  "user/create",
  async function ({ name, email, password }) {
    console.log(name, email, password);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        cart: [],
        wishlist: [],
      });
    }
    return {
      userId: user.uid,
      name: name,
    };
  }
);
export { createNewUser };
// try {
//   const { user } = await createUserWithEmailAndPassword(
//     auth,
//     email,
//     password
//   );
//   if (user) {
//     await setDoc(doc(db, "users", user.uid), {
//       name: name,
//       cart: [],
//       wishlist: [],
//     });
//   }
//   return {
//     userId: user.uid,
//     name: name,
//   };
// } catch (err) {
//   return err;
// }
