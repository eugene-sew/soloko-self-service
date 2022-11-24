import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/cart";
import { LayoutProvider } from "./context/layout";
import "./index.css";
import { Checkout, Error, FullMenu, Payment, Starter } from "./pages";
import {
  Beverages,
  Bites,
  Breakfast,
  Cocktail,
  Fish,
  LocalDrink,
  Main,
  Salads,
  Sandwiches,
  Sides,
  Smoothies,
  Sweets,
  HotBev,
} from "./pages/categories";
import Single from "./pages/categories/single/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Starter />,
    errorElement: <Error />,
  },
  {
    path: "menu",
    element: <FullMenu />,

    children: [
      { index: true, element: <Breakfast /> },
      {
        path: "breakfast",
        element: <Breakfast />,
        errorElement: <Error />,
        // children: [
        //   {
        //     path: ":meal",
        //     element: <Single />,
        //     errorElement: <Error />,
        //   },
        // ],
      },

      { path: "beverages", element: <Beverages />, errorElement: <Error /> },
      { path: "soloko-bites", element: <Bites />, errorElement: <Error /> },
      { path: "cocktails", element: <Cocktail />, errorElement: <Error /> },
      {
        path: "local-drinks",
        element: <LocalDrink />,
        errorElement: <Error />,
      },
      { path: "main", element: <Main />, errorElement: <Error /> },
      { path: "salads", element: <Salads />, errorElement: <Error /> },
      { path: "sandwiches", element: <Sandwiches />, errorElement: <Error /> },
      { path: "sides", element: <Sides />, errorElement: <Error /> },
      { path: "smoothies", element: <Smoothies />, errorElement: <Error /> },
      { path: "sweets", element: <Sweets />, errorElement: <Error /> },
      { path: "fish", element: <Fish />, errorElement: <Error /> },
      { path: "hot-beverages", element: <HotBev />, errorElement: <Error /> },
    ],
    errorElement: <Error />,
  },
  {
    path: "checkout",
    element: <Checkout />,
    errorElement: <Error />,
  },
  {
    path: "payment",
    element: <Payment />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </CartProvider>
  </React.StrictMode>
);
