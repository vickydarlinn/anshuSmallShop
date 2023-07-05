import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MyAccountLayout = () => {
  const { name } = useSelector((state) => state.user.userPersonalInfo);
  return (
    <div className="hidden md:block">
      <header className="flex flex-col gap-3  items-start pl-2  rounded-lg text-xl  bg-white text-pink-600 fixed left-5 top-32 h-[80vh] p-2 w-60">
        <span className="mb-5 self-center font-bold">Hi, {name} </span>
        <NavLink
          to="/my-account"
          end
          className={({ isActive }) => (isActive ? "text-pink-800" : "")}
        >
          Personal Info
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-pink-800" : "")}
          to="address"
        >
          Manage Addresses
        </NavLink>
        <NavLink className="mt-auto self-center border border-pink-600 w-full text-center py-2 bg-pink-600 text-white hover:bg-white hover:text-pink-600">
          Logout
        </NavLink>
      </header>
      <section className="ml-80">
        <Outlet />
      </section>
    </div>
  );
};

export default MyAccountLayout;
