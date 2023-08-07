import React from "react";
import ReactDOM from "react-dom/client";
import Onboarding from "./pages/onboarding";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
let router = createBrowserRouter([{ path: "/", element: <Onboarding /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
