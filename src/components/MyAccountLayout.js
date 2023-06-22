import React from "react";
import { Outlet } from "react-router-dom";

const MyAccountLayout = () => {
  return (
    <div>
      MyAccountLayout
      <Outlet />
    </div>
  );
};

export default MyAccountLayout;
