import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      {/* <div> your msg- {message && message}</div> */}
      <div className=" w-full xsm:w-[375px] p-5 rounded-xl bg-white text-pink-600">
        <h1 className="text-center font-marcellus font-bold text-3xl">Login</h1>
        <form className="flex flex-col gap-3 my-7 font-marcellus">
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="text"
            placeholder="Email address"
          />
          <input
            className="bg-transparent outline-none my-3 border-b border-pink-500 pb-5 font-light caret-green-500 focus:border-green-300"
            type="password"
            placeholder="Password"
          />

          <button className="mt-8 p-4 bg-pink-500 text-white font-light text-base rounded cursor-pointer">
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
