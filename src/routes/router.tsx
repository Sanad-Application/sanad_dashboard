import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
import Time from "../pages/time/Time";
import User from "../pages/user/User";
import Users from "../pages/users/Users";
import { Layout } from "./Layout";
import Setting from "../pages/setting/Setting";
import Tags from "../pages/tags/Tags";

import SplashForm from "../components/splashForm/SplashForm";
import AppRules from "../components/AppRules/AppRules";
import SocilaMedia from "../components/SocialMedia/SocilaMedia";
import RequireAuth from "../protectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <Product />,
      },
      {
        path: "/users/:userId",
        element: <User />,
      },
      {
        path: "/calender",
        element: <Time />,
      },
      {
        path: "/setting",
        element: <Setting />,
        children: [
          {
            path: "/setting",
            element: <SplashForm />,
          },
          {
            path: "/setting/app-rules",
            element: <AppRules />,
          },
          {
            path: "/setting/socila-media",
            element: <SocilaMedia />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
