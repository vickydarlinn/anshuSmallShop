import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
// this will move product in specific's user cart from the wishlist.

const moveToCart = createAsyncThunk(
  "cart/move",
  async function ({ userId, userWishlist, userCart, product }) {
    const isAlreadyInCart = userCart.find((item) => item.id === product.id);
    console.log(isAlreadyInCart);
    if (!isAlreadyInCart) {
      console.log("you are in");
      const cartRef = doc(db, "users", userId);
      await updateDoc(cartRef, {
        cart: arrayUnion(product),
      });
    }

    const updatedWishlist = userWishlist.filter(
      (wishlistProduct) => wishlistProduct.id !== product.id
    );
    const wishlistRef = doc(db, "users", userId);
    await updateDoc(wishlistRef, {
      wishlist: updatedWishlist,
    });
    console.log("Product moved to cart successfully!");

    return product;
  }
);
export { moveToCart };
