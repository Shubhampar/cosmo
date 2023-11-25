import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AllRoutes;