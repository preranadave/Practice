import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "./components/Auth/Login.jsx";
import AddEmployee from "./components/Admin/employee/AddEmployee.jsx";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard.jsx";
import ManageTask from "./components/Admin/Task/ManageTask.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </StrictMode>
);
