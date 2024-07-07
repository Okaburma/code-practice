import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import MenuPage from "./MenuPage";
import MenuCategoryPage from "./MenuCategoryPage";
import SettingPage from "./SettingPage";
import Register from "./Register";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<App />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu-category" element={<MenuCategoryPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
