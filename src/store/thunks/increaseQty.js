import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const increaseQty = createAsyncThunk(
  "cart/increaseQty",
  async function ({ userId, userCart, product }) {
    const updatedCart = userCart.map((item) => {
      if (item.id === product.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return item;
    });
    console.log(updatedCart);
    const cartRef = doc(db, "users", userId);
    await updateDoc(cartRef, {
      cart: updatedCart,
    });
    console.log("Product quantity increase from the  cart successfully!");
    return updatedCart;
    //
  }
);
export { increaseQty };
