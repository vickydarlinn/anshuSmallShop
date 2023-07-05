import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectiveRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  if (isUserLoggedIn) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default ProtectiveRoute;
