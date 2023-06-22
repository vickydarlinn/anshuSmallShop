import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async function ({ userId, product }) {
    const updatedProduct = { ...product, quantity: product.quantity + 1 };
    const wishlistRef = doc(db, "users", userId);
    await updateDoc(wishlistRef, {
      wishlist: arrayUnion(updatedProduct),
    });
    console.log("Product added to wishlist successfully!");
    return updatedProduct;
    //
  }
);
export { addToWishlist };
