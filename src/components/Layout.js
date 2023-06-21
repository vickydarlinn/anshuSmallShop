import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-32">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Layout;
