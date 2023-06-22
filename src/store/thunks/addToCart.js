import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
// this will add product in specific's user cart.
const addToCart = createAsyncThunk(
  "cart/add",
  async function ({ userId, product }) {
    const updatedProduct = { ...product, quantity: product.quantity + 1 };
    const cartRef = doc(db, "users", userId);
    await updateDoc(cartRef, {
      cart: arrayUnion(updatedProduct),
    });
    console.log("Product added to cart successfully!");
    return updatedProduct;
    //
  }
);
export { addToCart };
