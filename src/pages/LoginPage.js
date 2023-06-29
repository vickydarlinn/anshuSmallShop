import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginExistingUser } from "../store";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    pass: "",
  });
  function handleEmail(e) {
    setUserCredentials((prev) => ({ ...prev, email: e.target.value }));
  }
  function handlePass(e) {
    setUserCredentials((prev) => ({ ...prev, pass: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(loginExistingUser(userCredentials))
      .unwrap()
      .then(() => {
        toast.success("logged in successfully.", {
          icon: false,
        });
        navigate("/shop");
      })
      .catch((err) => {
        toast.error("Id or Password is wrong.", {
          icon: false,
        });
      });
  }
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <ToastContainer />
      <div className=" w-full xsm:w-[375px] p-5 rounded-xl bg-white text-pink-600">
        <h1 className="text-center font-marcellus font-bold text-3xl">Login</h1>
        <form
          className="flex flex-col gap-3 my-7 font-marcellus"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="text"
            placeholder="Email address"
            value={userCredentials.email}
            onChange={(e) => handleEmail(e)}
          />
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="password"
            placeholder="Password"
            value={userCredentials.pass}
            onChange={(e) => handlePass(e)}
          />

          <button
            type="submit"
            className="mt-8 p-4 bg-pink-500 text-white font-light text-base rounded cursor-pointer"
          >
            Login
          </button>
        </form>
        <p>
          Do not have an account?
          <Link className="text-pink-700 ml-1" to="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
