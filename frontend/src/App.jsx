import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "./context/auth";
import { CartProvider } from "./context/cart";
import { LayoutProvider } from "./context/layout";
import { OrderProvider } from "./context/order";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Checkout,
  Error,
  FullMenu,
  OrderListPage,
  Reciept,
  Starter,
} from "./pages";
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
  breakfastLoader,
  bitesLoader,
  beverageLoader,
  cocktailLoader,
  localDrinkLoader,
  localMainLoader,
  fishLoader,
  saladLoader,
  sandLoader,
  sideLoader,
  smootieLoader,
  sweetsLoader,
  hotLoader,
} from "./pages/categories";

import {
  Dashboard,
  Login,
  Orders,
  ordersLoader,
  UpdateMenu,
  UpdateStaff,
  OrderPage,
  mealsLoader,
  Menus,
} from "./pages/staff";

function App() {
  const { user } = useAuth();
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
          loader: breakfastLoader,
          errorElement: <Error />,
        },
        {
          path: "beverages",
          element: <Beverages />,
          loader: beverageLoader,
          errorElement: <Error />,
        },
        {
          path: "soloko-bites",
          element: <Bites />,
          loader: bitesLoader,
          errorElement: <Error />,
        },
        {
          path: "cocktails",
          element: <Cocktail />,
          loader: cocktailLoader,
          errorElement: <Error />,
        },
        {
          path: "local-drinks",
          element: <LocalDrink />,
          loader: localDrinkLoader,
          errorElement: <Error />,
        },
        {
          path: "main",
          element: <Main />,
          loader: localMainLoader,
          errorElement: <Error />,
        },
        {
          path: "salads",
          element: <Salads />,
          loader: saladLoader,
          errorElement: <Error />,
        },
        {
          path: "sandwiches",
          element: <Sandwiches />,
          loader: sandLoader,
          errorElement: <Error />,
        },
        {
          path: "sides",
          element: <Sides />,
          loader: sideLoader,
          errorElement: <Error />,
        },
        {
          path: "smoothies",
          element: <Smoothies />,
          loader: smootieLoader,
          errorElement: <Error />,
        },
        {
          path: "sweets",
          element: <Sweets />,
          loader: sweetsLoader,
          errorElement: <Error />,
        },
        {
          path: "fish",
          element: <Fish />,
          loader: fishLoader,
          errorElement: <Error />,
        },
        {
          path: "hot-beverages",
          element: <HotBev />,
          loader: hotLoader,
          errorElement: <Error />,
        },
      ],
      errorElement: <Error />,
    },
    {
      path: "checkout",
      element: <Checkout />,
      errorElement: <Error />,
    },
    {
      path: "order",
      element: <OrderListPage />,
      errorElement: <Error />,
    },
    {
      path: "/reciept",
      element: <Reciept />,
      errorElement: <Error />,
    },
    {
      path: "staff/login",
      element: <Login />,
      errorElement: <Error />,
    },
    user
      ? {
          path: "console",
          element: <Dashboard />,
          errorElement: <Error />,
          children: [
            {
              path: "orders",
              element: <Orders />,
              errorElement: <Error />,
              children: [
                {
                  path: ":oid",
                  element: <OrderPage />,
                  errorElement: <Error />,
                },
              ],
            },
            {
              path: "update-menu",
              element: <UpdateMenu />,
              children: [
                {
                  path: ":category",
                  element: <Menus />,
                  errorElement: <Error />,
                  loader: mealsLoader,
                },
              ],
              errorElement: <Error />,
            },
            {
              path: "update-staff",
              element: <UpdateStaff />,
            },
          ],
        }
      : {
          path: "console/*",
          element: <Login />,
        },
  ]);

  return (
    <OrderProvider>
      <CartProvider>
        <LayoutProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </LayoutProvider>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
