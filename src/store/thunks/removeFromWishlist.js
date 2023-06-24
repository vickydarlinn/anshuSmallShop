import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
// this will remove product in specific's user wishlist.
const removeFromWishlist = createAsyncThunk(
  "wishlist/remove",
  async function ({ userId, userWishlist, product }) {
    // this will take that user's all wishlist items and the product which user want to remove.
    const updatedWishlist = userWishlist.filter(
      (wishlistProduct) => wishlistProduct.id !== product.id
    );
    const wishlistRef = doc(db, "users", userId);
    await updateDoc(wishlistRef, {
      wishlist: updatedWishlist,
    });
    console.log("Product removed from the  wishlist successfully!");
    return product;
    //
  }
);
export { removeFromWishlist };
