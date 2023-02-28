import React from "react";
import "./header.css";
import logo from "../resources/Vectorlogo.png";
// import { logo_image } from '../commen'

function Header() {
  return (
    <div className="Header">
      <div className="Header_child">
        <div className="logo_div">
          <img src={logo} alt="" /> <h1>StarClinch</h1>
        </div>
        <div className="user_name"><h3>Hello Manish</h3></div>
      </div>
    </div>
  );
}

export default Header;
