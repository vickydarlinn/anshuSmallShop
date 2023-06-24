import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../store";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { userCart, isUserLoggedIn, userId } = useSelector(
    (state) => state.user
  );

  function handleRemoveCart(product) {
    console.log("removing...");
    //
    if (isUserLoggedIn) {
      dispatch(removeFromCart({ userId, userCart, product }));
    } else {
      alert("please login 1st");
    }
  }
  function handleIncrease(product) {
    // console.log(updatedProduct);
    console.log("clicked");
    dispatch(increaseQty({ userId, userCart, product }));
  }
  function handleDecrease(product) {
    console.log("clicked");
    dispatch(decreaseQty({ userId, userCart, product }));
  }
  if (!userCart.length) {
    return (
      <div className="flex justify-center items-center">
        Let's do some{" "}
        <Link className="m-1 text-pink-300 underline font-bold" to="/shop">
          Shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="flex justify-center max-w-7xl  mx-auto ">
      <div className="w-1/2  ">
        <h3 className="font-marcellus font-bold text-3xl mb-3">Cart</h3>
        <div className="flex flex-col gap-3 lg:max-h-[600px]  overflow-auto ">
          {userCart?.map((userCartProduct) => (
            <div
              key={userCartProduct.id}
              className="max-w-xl flex gap-5 p-5 pt-10 border border-white rounded-3xl relative"
            >
              <span
                className="absolute top-4 text-xl hover:scale-110 cursor-pointer right-5"
                onClick={() => handleRemoveCart(userCartProduct)}
              >
                <RxCross2 />
              </span>
              <div className="w-1/4">
                {" "}
                <img
                  src={userCartProduct.image}
                  className="w-full rounded-xl"
                  alt={userCartProduct.title}
                />
              </div>
              <div className="w-3/4 flex flex-col justify-between">
                <h4>{userCartProduct.title}</h4>
                <div className="flex justify-between items-center">
                  <span>${userCartProduct.price}</span>
                  <div className="flex items-center gap-[2px]">
                    <button
                      className="px-3 py-1  text-white border border-gray-300  font-bold"
                      onClick={() => handleDecrease(userCartProduct)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1  text-white border border-gray-300  font-bold">
                      {userCartProduct.quantity}
                    </span>
                    <button
                      className="px-3 py-1  text-white border border-gray-300  font-bold"
                      onClick={() => handleIncrease(userCartProduct)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2   ">
        <div className=" flex flex-col max-w-xs ml-auto mt-10 mr-10 gap-5">
          <h3>Cart Total</h3>
          <span>Total: $5000</span>
          <button className="grow  text-pink-600 bg-white  p-2 cursor-pointer border border-white ">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
