import { BrowserRouter, Routes, Route } from "react-router";
// import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import AdminComplaintsPage from "./pages/AdminComplaintsPage";
import AdminLoginPage from "./pages/AdminLoginPage";

// import ErrorPage from "./pages/ErrorPage";
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/submit" element={<SubmitComplaintPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route path="/commanders" element={<AdminComplaintsPage />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>,
);
