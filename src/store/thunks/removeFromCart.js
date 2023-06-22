import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
// this will remove product in specific's user cart.
const removeFromCart = createAsyncThunk(
  "cart/remove",
  async function ({ userId, userCart, product }) {
    // this will take that user's all cart items and the product which user want to remove.
    const updatedCart = userCart.filter(
      (cartProduct) => cartProduct.id !== product.id
    );
    const cartRef = doc(db, "users", userId);
    await updateDoc(cartRef, {
      cart: updatedCart,
    });
    console.log("Product removed from the  cart successfully!");
    return product;
    //
  }
);
export { removeFromCart };
