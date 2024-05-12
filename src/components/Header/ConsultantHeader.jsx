import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

const Header = () => {
    const [scrolltopdata, setscrolltopdata] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 100) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('scrolled');
            }
        });
    }, [])
  return (
    <>
      <div className={`header ${scrolltopdata}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/demo-asap">
                <img src={Logo} className="logo" alt="logo" />
              </Link>
              <div className="navbar">
                <nav className="nav">
                  <button>Espace société</button>
                  <button>Inscription</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
