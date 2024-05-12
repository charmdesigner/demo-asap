import React, { useState } from "react";
import ConsultantHeader from "../components/Header/ConsultantHeader";
import Footer from "../components/Footer/Footer";
import Frame from "../assets/images/frame.gif";
import Frame1 from "../assets/images/frame-1.gif";
import Send from "../assets/images/send.svg";
import Modal from "../components/Modal/Modal";
import "../assets/css/styles.scss";

const Consultant = ({ close }) => {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <ConsultantHeader />
      <main>
        <section className="banner-sec consultant-banner">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>
                  Ne perdez plus votre temps à reformater votre CV. Demandez
                  ASAP-CV à votre société!
                </h1>
                <button
                  className="desk-btn"
                  onClick={() => setModalState(true)}
                >
                  Envoyer une proposition à votre société
                </button>
                <button
                  className="mobile-btn"
                  onClick={() => setModalState(true)}
                >
                  Demander une Démo
                </button>
              </div>
              <div className="col">
                <div className="img-wrap">
                  <img src={Frame} alt="Frame" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ai-sec">
          <div className="container">
            <div className="row">
              <div className="col">
                <h5>Comment booster le CV de vos prospect ?</h5>
                <ul>
                  <li>
                    <img src={Send} alt="send" />
                    Réécriture détaillé de la description des missions  - ajout
                    des meilleurs termes techniques & métier
                  </li>
                  <li>
                    <img src={Send} alt="send" />
                    Auto complétion de la description, pour les CV trop
                    synthétique/Insuffisamment détaillé
                  </li>
                  <li>
                    <img src={Send} alt="send" />
                    Mise à jour du CV avec les termes techniques de l’appel
                    d’offre 
                  </li>
                </ul>
              </div>
              <div className="col">
                <div className="img-wrap">
                  <img src={Frame1} alt="Frame1" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div
        className="modal-main"
        onClick={() => {
          close();
        }}
      >
        <Modal show={modalState} />
      </div>

      <Footer />
    </>
  );
};
export default Consultant;
