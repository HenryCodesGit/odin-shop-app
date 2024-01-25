import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Store from "./components/pages/store-front.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "store-front", 
    element: <Store /> 
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
