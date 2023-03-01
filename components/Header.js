import React from "react";
import "./header.css";
import logo from "../resources/Vectorlogo.png";
// import { logo_image } from '../commen'

function Header() {
  return (
    <div className="Header">
      <div className="Header_child">
        <div className="logo_div">
          <img src={logo} alt="" /> <p className="medium">StarClinch</p>
        </div>
        <div className="user_name"><p className="small">Hello, Manish</p></div>
      </div>
    </div>
  );
}

export default Header;
