import React from "react";
import ReactDOM from "react-dom/client";
import Onboarding from "./pages/Onboarding";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
let router = createBrowserRouter([
  { path: "/", element: <Onboarding /> },
  { path: "/step1", element: <StepOne /> },
  { path: "/step2", element:<StepTwo/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
