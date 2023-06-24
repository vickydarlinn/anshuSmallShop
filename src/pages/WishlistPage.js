import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { BsArrowUpRight } from "react-icons/bs";
import { moveToCart } from "../store";
import { removeFromWishlist } from "../store";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { userWishlist, userId, userCart } = useSelector((state) => state.user);

  function handleMoveToCart(product) {
    dispatch(moveToCart({ userId, userWishlist, userCart, product }));
  }
  function handleRemoveFromWishlist(product) {
    console.log("clicked");
    dispatch(removeFromWishlist({ userId, userWishlist, product }));
  }

  return (
    <div>
      <h3 className="font-marcellus font-bold text-3xl mb-3">Wishlist</h3>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 ">
        {userWishlist?.map((item) => (
          <div
            key={item.id}
            className="max-w-xl flex gap-5 p-5 pt-10 border border-white rounded-3xl relative"
          >
            <span
              className="absolute top-4 text-xl hover:scale-110 cursor-pointer right-5"
              onClick={() => handleRemoveFromWishlist(item)}
            >
              <RxCross2 />
            </span>
            <div className="w-1/4">
              {" "}
              <img
                src={item.image}
                className="w-full rounded-xl"
                alt={item.title}
              />
            </div>
            <div className="w-3/4 flex flex-col justify-between">
              <h4>{item.title}</h4>
              <div className="flex justify-between gap-10 items-center">
                <span>${item.price}</span>
                <button
                  className="grow border border-white p-1 cursor-pointer flex justify-center items-center gap-1"
                  onClick={() => handleMoveToCart(item)}
                >
                  <span> Move to Cart</span>
                  <span className="font-bold">
                    <BsArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
