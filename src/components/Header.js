import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center  bg-white text-pink-600 px-5 font-inter py-4 fixed left-0 top-0 w-full z-10">
      <div className="flex flex-col justify-center items-center font-bold  text-2xl ">
        <span>Anshu's</span>
        <span>Small Shop</span>
      </div>
      <nav className="flex gap-5 text-xl items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/wishlist">Wishlist</NavLink>
        <NavLink to="cart">Cart</NavLink>
        <NavLink
          to="/login"
          className="border border-pink-600 px-3 py-2 text-white bg-pink-600 hover:text-pink-600 hover:bg-white"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
