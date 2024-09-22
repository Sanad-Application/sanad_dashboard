import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import Navbar from "../components/navbar/Navbar";

export const Layout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='container'>
        <div className='menuContainer'>
          <Menu />
        </div>
        <div className='contentContainer'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
