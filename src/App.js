import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MyAccountLayout from "./components/MyAccountLayout";
import PersonalInfoPage from "./pages/myAccountPages/PersonalInfoPage";
import AddressPage from "./pages/myAccountPages/AddressPage";
import ProtectiveRoute from "./components/ProtectiveRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route
          path="/my-account"
          element={
            <ProtectiveRoute>
              <MyAccountLayout />
            </ProtectiveRoute>
          }
        >
          <Route index element={<PersonalInfoPage />} />
          <Route path="address" element={<AddressPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
