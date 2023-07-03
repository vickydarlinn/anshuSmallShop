import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { editEmail, editName, editPhone } from "../../store";

const PersonalInfoPage = () => {
  const dispatch = useDispatch();
  const { userPersonalInfo: userInfo, userId } = useSelector(
    (state) => state.user
  );
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
  const [nameValue, setNameValue] = useState(userInfo.name);
  const [emailValue, setEmailValue] = useState(userInfo.email);
  const [phoneValue, setPhoneValue] = useState(userInfo.phone);

  function toggleEditName() {
    setIsNameEditing((prev) => !prev);
    setNameValue(userInfo.name);
  }
  function toggleEditEmail() {
    setIsEmailEditing((prev) => !prev);
    setEmailValue(userInfo.email);
  }
  function toggleEditPhone() {
    setIsPhoneEditing((prev) => !prev);
    setPhoneValue(userInfo.phone);
  }
  function handleName(e) {
    setNameValue(e.target.value);
  }
  function handleEmail(e) {
    setEmailValue(e.target.value);
  }
  function handlePhone(e) {
    setPhoneValue(e.target.value);
  }
  function handleSubmitName() {
    if (nameValue.length) {
      toast.success(`Successfully saved `);
      toggleEditName();
      dispatch(editName({ userId, editedName: nameValue }));
    } else {
      toast.error(`Please type your name`);
    }
  }
  function handleSubmitEmail() {
    if (emailValue.length) {
      toast.success(`Email successfully saved `);
      toggleEditEmail();
      dispatch(editEmail({ userId, editedEmail: emailValue }));
    } else {
      toast.error(`Please type your email`);
    }
  }
  function handleSubmitPhone() {
    if (phoneValue.length === 10) {
      toast.success(`Phone No. successfully saved `);
      toggleEditPhone();
      dispatch(editPhone({ userId, editedPhone: phoneValue }));
    } else {
      toast.error(`Please type your phone no. correctly`);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-2">
          <div className="flex gap-10">
            <h3>Personal Information</h3>
            {isNameEditing ? (
              <button onClick={toggleEditName} className="text-gray-300">
                Cancel
              </button>
            ) : (
              <button onClick={toggleEditName} className="text-gray-300">
                Edit
              </button>
            )}
          </div>
          <div className="flex gap-10">
            <input
              type="email"
              placeholder={`${isNameEditing ? `name` : ""}`}
              disabled={isNameEditing ? "" : "disabled"}
              className=" py-2 px-2 text-black w-64"
              value={nameValue}
              onChange={(e) => handleName(e)}
            />
            <button
              onClick={handleSubmitName}
              className={`py-2 px-10 border border-white ${
                isNameEditing ? `` : `hidden`
              }`}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10">
            <h3>Email Address</h3>
            {isEmailEditing ? (
              <button onClick={toggleEditEmail} className="text-gray-300">
                Cancel
              </button>
            ) : (
              <button onClick={toggleEditEmail} className="text-gray-300">
                Edit
              </button>
            )}
          </div>
          <div className="flex gap-10">
            <input
              value={emailValue}
              onChange={(e) => handleEmail(e)}
              type="text"
              disabled={isEmailEditing ? "" : "disabled"}
              className="py-2 px-2 text-black w-64"
              placeholder={isEmailEditing ? "johndoe@email.com" : ""}
            />
            <button
              onClick={handleSubmitEmail}
              className={`py-2 px-10 border border-white ${
                isEmailEditing ? `` : `hidden`
              }`}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10">
            <h3> Mobile Address</h3>
            {isPhoneEditing ? (
              <button onClick={toggleEditPhone} className="text-gray-300">
                Cancel
              </button>
            ) : (
              <button onClick={toggleEditPhone} className="text-gray-300">
                Edit
              </button>
            )}
          </div>
          <div className="flex gap-10">
            <input
              type="number"
              placeholder={`${isPhoneEditing ? `9813xxxxxxx` : ""}`}
              disabled={isPhoneEditing ? "" : "disabled"}
              className=" py-2 px-2 text-black w-64"
              value={phoneValue}
              onChange={(e) => handlePhone(e)}
            />
            <button
              onClick={handleSubmitPhone}
              className={`py-2 px-10 border border-white ${
                isPhoneEditing ? `` : `hidden`
              }`}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoPage;
