import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useSelector((state) => state.user);
  const [userDetails, setUsersDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleUserName(e) {
    setUsersDetails((prev) => ({ ...prev, name: e.target.value }));
  }
  function handleEmail(e) {
    setUsersDetails((prev) => ({ ...prev, email: e.target.value }));
  }
  function handlePassword(e) {
    setUsersDetails((prev) => ({ ...prev, password: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userDetails);
    dispatch(createNewUser(userDetails))
      .unwrap()
      .then(() => {
        toast.success("account created successfully", {
          icon: false,
        });
        navigate("/shop");
      })
      .catch((err) => {
        toast.error(err.message, {
          icon: false,
        });
      });
  }
  console.log(isUserLoggedIn);
  return (
    <div className="  h-[80vh]  flex  flex-col justify-center items-center ">
      <ToastContainer />

      <div className="  bg-white text-pink-600 w-full xsm:w-[375px] p-5 rounded-xl  ">
        <h1 className="text-center font-marcellus font-bold text-3xl">
          Sign Up
        </h1>
        <form
          className="flex flex-col gap-3 my-7 font-marcellus"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="text"
            placeholder=" John Doe"
            value={userDetails.name}
            onChange={(e) => handleUserName(e)}
          />
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="text"
            placeholder="johndoe@gmail.com"
            onChange={(e) => handleEmail(e)}
            value={userDetails.email}
          />
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="password"
            placeholder="********"
            onChange={(e) => handlePassword(e)}
            value={userDetails.password}
          />

          <button
            className="mt-8 p-4 bg-pink-500 text-white font-light text-base rounded cursor-pointer"
            type="submit"
          >
            Create an account
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="text-pink-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
