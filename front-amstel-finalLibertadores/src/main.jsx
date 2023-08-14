import React from "react";
import ReactDOM from "react-dom/client";
import Onboarding from "./pages/Onboarding";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import YaEstasParticipando from "./pages/YaEstasParticipando";
let router = createBrowserRouter([
  { path: "/", element: <Onboarding /> },
  { path: "/step1", element: <StepOne /> },
  { path: "/step2", element: <StepTwo /> },
  { path: "/step3", element: <StepThree /> },
  { path: "/codigoRegistrado", element: <YaEstasParticipando /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
