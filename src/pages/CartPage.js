import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../store";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CartPage = () => {
  const dispatch = useDispatch();
  const { userCart, userId } = useSelector((state) => state.user);
  const totalBill = userCart?.reduce((acc, currItem) => {
    acc = acc + currItem.price * currItem.quantity;
    return acc;
  }, 0);
  function handleRemoveCart(product) {
    dispatch(removeFromCart({ userId, userCart, product }))
      .unwrap()
      .then(() => {
        toast.success("Removed from Cart successfully", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.warning(err.message);
      });
  }
  function handleIncrease(product) {
    dispatch(increaseQty({ userId, userCart, product }));
  }
  function handleDecrease(product) {
    if (product.quantity > 1) {
      dispatch(decreaseQty({ userId, userCart, product }));
    } else {
      dispatch(removeFromCart({ userId, userCart, product }))
        .unwrap()
        .then(() => {
          toast.success("Removed from Cart successfully", {
            autoClose: 1000,
          });
        })
        .catch((err) => {
          toast.warning(err.message);
        });
    }
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
    <div className="flex flex-col md:flex-row justify-center max-w-7xl  mx-auto mb-6 ">
      <ToastContainer />
      <div className="md:w-1/2  ">
        <h3 className="font-marcellus font-bold text-3xl mb-3">Cart</h3>
        <div className="flex flex-col gap-3 lg:max-h-[600px]  overflow-auto ">
          {userCart?.map((userCartProduct) => (
            <div
              key={userCartProduct.id}
              className="max-w-xl flex flex-col xsm:flex-row gap-5 p-5 pt-10 border border-white rounded-3xl relative"
            >
              <span
                className="absolute top-4 text-xl hover:scale-110 cursor-pointer right-5"
                onClick={() => handleRemoveCart(userCartProduct)}
              >
                <RxCross2 />
              </span>
              <div className="xsm:w-1/4">
                {" "}
                <img
                  src={userCartProduct.image}
                  className="w-full rounded-xl"
                  alt={userCartProduct.title}
                />
              </div>
              <div className="xsm:w-3/4 flex flex-col justify-between">
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
      <div className="md:w-1/2   ">
        <div className=" flex flex-col max-w-xs ml-auto mt-10 mr-10 gap-5">
          <h3>Cart Total</h3>
          <span>Total: ${totalBill}</span>
          <button
            onClick={() => alert("order placed successfully.")}
            className="grow  text-pink-600 bg-white  p-2 cursor-pointer border border-white "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
