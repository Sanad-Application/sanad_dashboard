import React from "react";
import "./assests/styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Menu from "./components/menu/Menu";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/home/Home";
// import Users from "./pages/users/Users";
// import Products from "./pages/products/Products";
// import Login from "./pages/login/Login";
// import User from "./pages/user/User";
// import Product from "./pages/product/Product";
// import Time from "./pages/time/Time";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";

function App() {
  // const Layout = () => {
  //   return (
  //     <div className='main'>
  //       <Navbar />
  //       <div className='container'>
  //         <div className='menuContainer'>
  //           <Menu />
  //         </div>
  //         <div className='contentContainer'>
  //           <Outlet />
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/users",
  //         element: <Users />,
  //       },
  //       {
  //         path: "/products",
  //         element: <Products />,
  //       },
  //       {
  //         path: "/products/:productId",
  //         element: <Product />,
  //       },
  //       {
  //         path: "/users/:userId",
  //         element: <User />,
  //       },
  //       {
  //         path: "/calender",
  //         element: <Time />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  // ]);
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
