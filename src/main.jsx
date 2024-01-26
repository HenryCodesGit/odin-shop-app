import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Store from "./components/pages/store.jsx"
import Carousel from "./components/base/Carousel.jsx";
import Cart from "./components/base/ShoppingCart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "store", 
    element: <Store /> ,
    children: [
      {index: true, element: <Carousel />},
      {path: "product-page", element: <Carousel />},
      {path: "cart", element: <Cart />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
