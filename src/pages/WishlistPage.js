import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { BsArrowUpRight } from "react-icons/bs";
import { moveToCart } from "../store";
import { removeFromWishlist } from "../store";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const { userWishlist, userId, userCart } = useSelector((state) => state.user);

  function handleMoveToCart(product) {
    dispatch(moveToCart({ userId, userWishlist, userCart, product }))
      .unwrap()
      .then(() => {
        toast.success("Moved to Cart successfully", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.warning(err.message, {
          autoClose: 1000,
        });
      });
  }
  function handleRemoveFromWishlist(product) {
    dispatch(removeFromWishlist({ userId, userWishlist, product }))
      .unwrap()
      .then(() => {
        toast.success("Removed from wishlist successfully", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.warning(err.message, {
          autoClose: 1000,
        });
      });
  }

  if (!userWishlist.length) {
    return (
      <div className="flex justify-center items-center">
        <ToastContainer />
        Let's do some{" "}
        <Link className="m-1 text-pink-300 underline font-bold" to="/shop">
          Shopping
        </Link>
      </div>
    );
  }
  return (
    <div>
      <ToastContainer />

      <h3 className="font-marcellus font-bold text-3xl mb-3">Wishlist</h3>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 ">
        {userWishlist?.map((item) => (
          <div
            key={item.id}
            className="max-w-xl flex flex-col xsm:flex-row gap-5 p-5 pt-10 border border-white rounded-3xl relative m-2 xms:m-0"
          >
            <span
              className="absolute top-4 text-xl hover:scale-110 cursor-pointer right-5"
              onClick={() => handleRemoveFromWishlist(item)}
            >
              <RxCross2 />
            </span>
            <div className="xsm:w-1/4 ">
              {" "}
              <img
                src={item.image}
                className="w-full rounded-xl"
                alt={item.title}
              />
            </div>
            <div className="xsm:w-3/4 flex flex-col justify-between">
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
