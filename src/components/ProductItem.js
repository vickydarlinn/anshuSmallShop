import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { addToCart, addToWishlist } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { isUserLoggedIn, userId, userCart, userWishlist } = useSelector(
    (state) => state.user
  );

  const isAlreadyINUserCart = userCart?.find(
    (cartProduct) => cartProduct.id === product.id
  );
  const isAlreadyINUserWhishlist = userWishlist?.find(
    (wishlistProduct) => wishlistProduct.id === product.id
  );

  function handleAddCart(product) {
    console.log("clicked");
    //
    if (isUserLoggedIn) {
      dispatch(addToCart({ userId, product }));
    } else {
      alert("please login 1st");
    }
  }

  function handleAddWishlist(product) {
    console.log("clicked");
    //
    if (isUserLoggedIn) {
      dispatch(addToWishlist({ userId, product }));
    } else {
      alert("please login 1st");
    }
  }

  function handleRemoveWishlist(product) {
    console.log("removed");
  }

  return (
    <div className="max-w-xs flex flex-col gap-2 ">
      <div className="relative">
        <img src={product.image} alt={product.title} className="" />
        <span className="absolute right-2 top-2 text-pink-600 cursor-pointer text-3xl hover:scale-110">
          {}
          {isAlreadyINUserWhishlist ? (
            <AiFillHeart onClick={() => handleRemoveWishlist(product)} />
          ) : (
            <AiOutlineHeart onClick={() => handleAddWishlist(product)} />
          )}
        </span>
      </div>
      <h3>{product.title}</h3>
      <div className="flex gap-5 items-center">
        <span className="font-bold">${product.price}</span>
        {isAlreadyINUserCart ? (
          <Link
            to="/cart"
            className="grow border border-white p-1 cursor-pointer flex justify-center"
          >
            Go to Cart
          </Link>
        ) : (
          <button
            className="grow border border-white p-1 cursor-pointer"
            onClick={() => handleAddCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default ProductItem;
