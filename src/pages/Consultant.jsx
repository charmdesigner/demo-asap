import React from "react";
import ConsultantHeader from "../components/Header/ConsultantHeader";
import Footer from "../components/Footer/Footer";
import Frame from "../assets/images/frame.gif";
import Frame1 from "../assets/images/frame-1.gif";
import Send from "../assets/images/send.svg";
import EmailButton from "../components/EmailButton/EmailButton";
import "../assets/css/styles.scss";

const Consultant = () => {
  return (
    <>
      <ConsultantHeader />
      <main>
        <section className="banner-sec consultant-banner">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>
                  Ne Perdez Plus Votre Temps À Reformater Votre CV. Demandez
                  ASAP-CV À Votre Société!
                </h1>
                <button className="desk-btn">
                  Envoyer une proposition à votre société
                </button>
                <EmailButton className="mobile-btn" />
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
      <Footer />
    </>
  );
};
export default Consultant;
