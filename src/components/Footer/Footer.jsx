import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return  <>
  <div className="footer">
  <div className="container">
    <div className="row">
      <div className="col">
      <Link to="/demo-asap">
              <img src={Logo} className="logo" alt="logo" />
            </Link>
      </div>
      <div className="col">
        <Link to="/demo-asap">Terms of use</Link>
        <Link to="/demo-asap">Privacy policy</Link>
        <p>All rights reserved.</p>
      </div>
    </div>
    </div>
    </div>
    </>
};
export default Footer;
