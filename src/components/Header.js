import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const { isUserLoggedIn } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-pink-600 px-5 font-inter py-4 fixed left-0 top-0 w-full z-10 lg:flex lg:justify-between">
      <div className="flex justify-between items-center ">
        <div className="font-bold text-2xl flex flex-col">
          <span>Anshu's</span>
          <span>Small Shop</span>
        </div>
        <button
          className="block lg:hidden text-pink-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } mt-4 lg:mt-0 lg:flex lg:gap-5 text-xl items-center`}
      >
        <NavLink
          to="/"
          activeclassname="font-bold"
          className="block lg:inline-block mb-2 lg:mb-0 lg:ml-0 lg:mr-4 text-pink-600 hover:text-pink-800"
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          activeclassname="font-bold"
          className="block lg:inline-block mb-2 lg:mb-0 lg:ml-0 lg:mr-4 text-pink-600 hover:text-pink-800"
        >
          Shop
        </NavLink>
        <NavLink
          to="/wishlist"
          activeclassname="font-bold"
          className="block lg:inline-block mb-2 lg:mb-0 lg:ml-0 lg:mr-4 text-pink-600 hover:text-pink-800"
        >
          Wishlist
        </NavLink>
        <NavLink
          to="/cart"
          activeclassname="font-bold"
          className="block lg:inline-block mb-2 lg:mb-0 lg:ml-0 lg:mr-4 text-pink-600 hover:text-pink-800"
        >
          Cart
        </NavLink>
        {isUserLoggedIn ? (
          <NavLink
            to="/my-account"
            activeclassname="font-bold"
            className="block lg:inline-block mb-2 lg:mb-0 lg:ml-0 lg:mr-4 text-pink-600 hover:text-pink-800"
          >
            My Account
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            activeclassname="font-bold"
            className="block lg:inline-block mb-2 lg:mb-0 lg:ml-0 lg:mr-4 text-pink-600 hover:text-pink-800"
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
