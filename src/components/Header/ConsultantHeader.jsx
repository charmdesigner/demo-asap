import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Cross from "../../assets/images/cross.png";
import Modal from "../Modal/Modal"
import "./Header.scss";

const Header = () => {
    const [scrolltopdata, setscrolltopdata] = useState('');
    const [modalState, setModalState] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 100) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('scrolled');
            }
        });
    }, [])
    const handleClose = () => {
      setModalState(false);
  };
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
                  <button onClick={() => setModalState(true)}>Inscription</button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-main"
        onClick={handleClose}
      >
         
        <Modal show={modalState} close={handleClose}>
          <button className="close-icon" onClick={handleClose}><img src={Cross} alt="" /></button>
        </Modal>
      </div>
    </>
  );
};
export default Header;
