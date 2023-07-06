import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { userCart } = useSelector((state) => state.user);
  const { addresses } = useSelector((state) => state.user.userPersonalInfo);

  const totalBill = userCart?.reduce((acc, currItem) => {
    acc = acc + currItem.price * currItem.quantity;
    return acc;
  }, 0);

  // State to store selected address
  const [selectedAddress, setSelectedAddress] = useState("");

  // Function to handle radio button change
  const handleRadioChange = (address) => {
    setSelectedAddress(address);
  };

  function handlePlaceOrder() {
    if (selectedAddress) {
      toast.success(
        `your order of price $${totalBill} has been placed at place ${selectedAddress.address}.`
      );
    } else {
      toast.error("please select order address");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className=" flex flex-col md:flex-row">
        <div className="full md:w-1/2 p-4">
          {addresses.length ? (
            <div className="flex flex-col">
              <button
                onClick={() => {
                  navigate("/my-account/address");
                }}
                className="  md:self-center text-pink-600 bg-white p-2 cursor-pointer "
              >
                Add a new address
              </button>
              <div className="flex flex-col gap-4 mt-6">
                {addresses.map((address) => (
                  <label
                    htmlFor={address.id}
                    className="flex items-center border border-white p-1"
                    key={address.id}
                  >
                    <div className="grow">
                      <div className="flex justify-between items-center relative mb-1">
                        <span>
                          {address.addressType.charAt(0).toUpperCase() +
                            address.addressType.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{address.name}</span>
                        <span>{address.phone}</span>
                      </div>
                      <span className="text-sm">
                        {address.address} - {address.pinCode}
                      </span>
                    </div>
                    <div className="p-2 px-4 flex gap-3 items-start">
                      <input
                        type="radio"
                        id={address.id}
                        checked={selectedAddress === address}
                        onChange={() => handleRadioChange(address)}
                      />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-10 gap-2">
              <p>You have no saved addresses</p>
              <button
                onClick={() => {
                  navigate("/my-account/address");
                }}
                className="grow text-pink-600 bg-white p-2 cursor-pointer border border-white"
              >
                Add address
              </button>
            </div>
          )}
        </div>
        <div className="md:w-1/2 p-4">
          <div className="flex flex-col max-w-xs ml-auto mt-10 mr-10 gap-5">
            <h3>Bill Details</h3>
            <span>Total: ${totalBill}</span>
            <button
              className=" text-pink-600 bg-white p-2  cursor-pointer border border-white"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
