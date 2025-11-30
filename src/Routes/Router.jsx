import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Error from "../Pages/Home/Error/Error";
import About from "../Pages/About/About";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import SendParcel from "../Pages/Home/SendParcel/SendParcel";
import PrivetRoutes from "./PrivetRoutes";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/about-us",
        Component: About,
      },
      {
        path: "/sendparcel",
        element: (
          <PrivetRoutes>
            <SendParcel />
          </PrivetRoutes>
        ),
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-parcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: "payment/:parcelId",
        Component: Payment, 
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
