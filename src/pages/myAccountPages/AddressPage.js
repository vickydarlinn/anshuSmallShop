import React, { useState } from "react";

const AddressPage = () => {
  const [isAdressAdding, setIsAddressAdding] = useState(false);
  function toggleAddressAdding() {
    setIsAddressAdding((prev) => !prev);
  }
  return (
    <div className="m-10 ">
      <h3 className="mb-5 text-xl">Manage Addresses</h3>
      {isAdressAdding ? (
        <div className="bg-pink-700 p-3 my-4 rounded-xl">
          <h4 className="mb-3">Add a new Address</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                placeholder="name"
                type="text"
                className=" py-2 px-2 text-black w-64"
              />
              <input
                placeholder="phone no."
                type="number"
                className=" py-2 px-2 text-black w-64"
              />
            </div>
            <div className="flex gap-2">
              <input
                placeholder="Pin code"
                type="number"
                className=" py-2 px-2 text-black w-64"
              />
              <select
                id="country-state"
                name="country-state"
                className=" py-2 px-2 text-black w-64"
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
              className=" py-2 px-2 text-black w-[520px]"
              placeholder="Address (Area and street)"
            ></textarea>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <input id="sexMale" type="radio" name="sex" value="male" />
                <label htmlFor="sexMale">Male</label>
              </div>
              <div className="flex gap-2">
                <input id="sexFemale" type="radio" name="sex" value="female" />
                <label htmlFor="sexFemale">Female</label>
              </div>
            </div>
            <div className="flex gap-2">
              <button className={`py-2 px-10 border border-white`}>Save</button>
              <button
                className={`py-2 px-10 border border-white`}
                onClick={toggleAddressAdding}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button className="border w-full py-3 " onClick={toggleAddressAdding}>
          +Add a New Address
        </button>
      )}

      <div className="mt-10 flex flex-col gap-2">
        <div className="flex flex-col  border border-white p-1">
          <div className="flex justify-between items-center relative mb-1">
            <span>Home</span>
            <div className=" p-2 px-4 flex gap-3 items-start">
              <button className=" hover:text-red-200">Edit</button>
              <button className=" hover:text-red-200">Delete</button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Vicky</span>
            <span>9876543210</span>
          </div>
          <span className="text-sm">
            G-26, Block-G, Vijaynagar, New Delhi, Delhi - 110009
          </span>
        </div>
        <div className="flex flex-col  border border-white p-1">
          <div className="flex justify-between items-center relative mb-1">
            <span>Home</span>
            <div className=" p-2 px-4 flex gap-3 items-start">
              <button className=" hover:text-red-200">Edit</button>
              <button className=" hover:text-red-200">Delete</button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span>Vicky</span>
            <span>9876543210</span>
          </div>
          <span className="text-sm">
            G-26, Block-G, Vijaynagar, New Delhi, Delhi - 110009
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
