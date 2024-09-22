import React from "react";
import "./navsetting.scss";
import { Link } from "react-router-dom";
const NavSetting = () => {
  return (
    <section className='navSetting-container'>
      <div className='link'>
        <Link to='/setting'>Splash</Link>
      </div>
      <div className='link'>
        <Link to='/setting/app-rules'>App Rules</Link>
      </div>
      <div className='link'>
        <Link to='/setting/socila-media'>Socail Media Accounts</Link>
      </div>
    </section>
  );
};

export default NavSetting;
