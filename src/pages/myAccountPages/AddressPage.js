import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addAddress, removeAddress } from "../../store";
import { editAddress } from "../../store";

const AddressPage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);
  const { addresses } = useSelector((state) => state.user.userPersonalInfo);
  const [isAddressEditing, setIsAddressEditing] = useState(false);
  const [isAddressAdding, setIsAddressAdding] = useState(false);

  const initialAddressFormData = {
    name: "",
    phone: "",
    pinCode: "",
    state: "",
    address: "",
    addressType: "",
  };

  const [addressFormData, setAddressFormData] = useState(
    initialAddressFormData
  );

  const toggleAddressAdding = () => {
    setIsAddressAdding((prev) => !prev);
    setIsAddressEditing(false);
    setAddressFormData(initialAddressFormData);
  };

  const toggleAddressEditing = () => {
    setIsAddressEditing((prev) => !prev);
    setIsAddressAdding(false);
    setAddressFormData({
      ...addressFormData,
      name: "",
      phone: "",
      pinCode: "",
      state: "",
      address: "",
      addressType: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddressFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const address = { ...addressFormData, id: uuid() };
    dispatch(addAddress({ userId, address }));

    setAddressFormData(initialAddressFormData);
    // Close the form
    toggleAddressAdding();
  };
  const handleEditFormSubmit = (event) => {
    dispatch(
      editAddress({
        userId,
        allAddresses: addresses,
        updateAddress: addressFormData,
      })
    );
    setAddressFormData(initialAddressFormData);
    toggleAddressEditing();
  };

  const handleDeleteAddress = (address) => {
    console.log("clicked");
    dispatch(removeAddress({ userId, allAddresses: addresses, address }));
  };

  const handleEditAddress = (address) => {
    toggleAddressEditing();
    setAddressFormData({
      name: address.name,
      phone: address.phone,
      pinCode: address.pinCode,
      state: address.state,
      address: address.address,
      addressType: address.addressType,
      id: address.id,
    });
  };

  return (
    <div className="sm:m-10">
      <h3 className="mb-5 text-xl">Manage Addresses</h3>
      {isAddressAdding ? (
        <form
          className="bg-pink-700 p-3 my-4 rounded-xl"
          onSubmit={handleAddFormSubmit}
        >
          <h4 className="mb-3">Add a new Address</h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <input
                required
                placeholder="name"
                type="text"
                className="py-2 px-2 text-black w-full lg:w-64"
                name="name"
                value={addressFormData.name}
                onChange={handleInputChange}
              />
              <input
                required
                placeholder="phone no."
                type="number"
                className="py-2 px-2 text-black w-full lg:w-64"
                name="phone"
                value={addressFormData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <input
                required
                placeholder="Pin code"
                type="number"
                className="py-2 px-2 text-black w-full lg:w-64"
                name="pinCode"
                value={addressFormData.pinCode}
                onChange={handleInputChange}
              />
              <select
                id="country-state"
                name="state"
                className="py-2 px-2 text-black w-full lg:w-64"
                required
                value={addressFormData.state}
                onChange={handleInputChange}
              >
                <option value="">Select state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select>
            </div>
            <textarea
              required
              className="py-2 px-2 text-black w-full lg:w-[520px]"
              placeholder="Address (Area and street)"
              name="address"
              value={addressFormData.address}
              onChange={handleInputChange}
            ></textarea>
            <div className="flex gap-4">
              <div className="flex flex-wrap gap-2">
                <input
                  required
                  id="home"
                  type="radio"
                  name="addressType"
                  value="home"
                  checked={addressFormData.addressType === "home"}
                  onChange={handleInputChange}
                />
                <label htmlFor="home">Home</label>
              </div>
              <div className="flex gap-2">
                <input
                  required
                  id="office"
                  type="radio"
                  name="addressType"
                  value="office"
                  checked={addressFormData.addressType === "office"}
                  onChange={handleInputChange}
                />
                <label htmlFor="office">Office</label>
              </div>
            </div>
            <div className="flex flex-wrap  gap-2">
              <button
                className={`py-2 px-10 w-full lg:w-auto border border-white`}
                type="submit"
              >
                Save
              </button>
              <button
                className={`py-2 px-10 border w-full lg:w-auto border-white`}
                onClick={toggleAddressAdding}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button className="border w-full py-3" onClick={toggleAddressAdding}>
          +Add a New Address
        </button>
      )}
      {isAddressEditing && (
        <form
          className="bg-pink-700 p-3 my-4 rounded-xl"
          onSubmit={handleEditFormSubmit}
        >
          <h4 className="mb-3">Add a new Address</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                required
                placeholder="name"
                type="text"
                className="py-2 px-2 text-black w-64"
                name="name"
                value={addressFormData.name}
                onChange={handleInputChange}
              />
              <input
                required
                placeholder="phone no."
                type="number"
                className="py-2 px-2 text-black w-64"
                name="phone"
                value={addressFormData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-2">
              <input
                required
                placeholder="Pin code"
                type="number"
                className="py-2 px-2 text-black w-64"
                name="pinCode"
                value={addressFormData.pinCode}
                onChange={handleInputChange}
              />
              <select
                id="country-state"
                name="state"
                className="py-2 px-2 text-black w-64"
                required
                value={addressFormData.state}
                onChange={handleInputChange}
              >
                <option value="">Select state</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CH">Chandigarh</option>
                <option value="CT">Chhattisgarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="LA">Ladakh</option>
                <option value="LD">Lakshadweep</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PY">Puducherry</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
              </select>
            </div>
            <textarea
              required
              className="py-2 px-2 text-black w-[520px]"
              placeholder="Address (Area and street)"
              name="address"
              value={addressFormData.address}
              onChange={handleInputChange}
            ></textarea>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <input
                  required
                  id="home"
                  type="radio"
                  name="addressType"
                  value="home"
                  checked={addressFormData.addressType === "home"}
                  onChange={handleInputChange}
                />
                <label htmlFor="home">Home</label>
              </div>
              <div className="flex gap-2">
                <input
                  required
                  id="office"
                  type="radio"
                  name="addressType"
                  value="office"
                  checked={addressFormData.addressType === "office"}
                  onChange={handleInputChange}
                />
                <label htmlFor="office">Office</label>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className={`py-2 px-10 border border-white`}
                type="submit"
              >
                Save
              </button>
              <button
                className={`py-2 px-10 border border-white`}
                onClick={toggleAddressEditing}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="mt-10 flex flex-col gap-2">
        {addresses?.map((address) => (
          <div
            className="flex flex-col border border-white p-1"
            key={address.id}
          >
            <div className="flex justify-between items-center relative mb-1">
              <span>
                {address.addressType.charAt(0).toUpperCase() +
                  address.addressType.slice(1)}
              </span>
              <div className="p-2 px-4 flex gap-3 items-start">
                <button
                  className="hover:text-red-200"
                  onClick={() => handleEditAddress(address)}
                >
                  Edit
                </button>
                <button
                  className="hover:text-red-200"
                  onClick={() => handleDeleteAddress(address)}
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span>{address.name}</span>
              <span>{address.phone}</span>
            </div>
            <span className="text-sm">
              {address.address} - {address.pinCode}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressPage;
