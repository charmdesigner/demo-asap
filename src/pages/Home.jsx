import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfileImg from "../assets/images/profile-img.svg";
import CrossSign from "../assets/images/cross-sign.svg";
import RightSign from "../assets/images/right-sign.svg";
import Frame from "../assets/images/frame.gif";
import Frame1 from "../assets/images/frame-1.gif";
import Send from "../assets/images/send.svg";
import BlueRight from "../assets/images/blue-right.svg";
import Mark from "../assets/images/coming-soon-mark.png";
import TypingAnimation from "../components/TypingAnimation/TypingAnimation";
import "../assets/css/styles.scss";

const Home = () => {
  const handleEmailClick = () => {
    const email = "info@asap-cv.com"; // Replace with the actual email address
    const subject = "Request for Demo";
    const body = `Hello ASAP-CV, Je suis *** et je souhaiterais une démo de ton outil. Pourrais-tu me recontacter?`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <>
      <Header />
      <main>
        <section className="banner-sec">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>
                  <TypingAnimation text="La Plateforme De Consolidation De CV Adapté Aux ESN & Aux Professionnels Du Recrutement" />
                </h1>

                <button onClick={handleEmailClick}>Demander une Démo</button>
              </div>
              <div className="col">
                <div className="img-wrap">
                  <img src={Frame} alt="Frame" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="profile-sec">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="img-wrap">
                  <img src={ProfileImg} alt="profileimg" />
                </div>
              </div>
              <div className="col">
                <h5>
                  Nous permettons à vos équipes d’acquérir le profil d’un
                  prospect au format de votre société.
                </h5>
                <p>
                  En 2 minutes, nous identifions le prospect depuis notre base
                  de données puis nous vous envoyons son CV au format PDF selon
                  le Template de votre société
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="asap-sec">
          <div className="container">
            <div className="title">
              <h5>Pourquoi utiliser ASAP -CV</h5>
            </div>
            <div className="row">
              <div className="col">
                <h6>Situation actuelle</h6>
                <ul>
                  <li>
                    <img src={CrossSign} alt="crosssign" />
                    Votre prospect constitue le CV en ~2h
                  </li>
                  <li>
                    <img src={CrossSign} alt="crosssign" />
                    Vous devez relancer le prospect & attendre quelques heures
                  </li>
                  <li>
                    <img src={CrossSign} alt="crosssign" />
                    Le CV peut contenir des coquilles
                  </li>
                </ul>
              </div>
              <div className="col">
                <h6>Situation Avec ASAP-CV</h6>
                <ul>
                  <li>
                    <img src={RightSign} alt="rightsign" />
                    Vous économisez 2 h !
                  </li>
                  <li>
                    <img src={RightSign} alt="rightsign" />
                    Votre CV est prêt en 5 min
                  </li>
                  <li>
                    <img src={RightSign} alt="rightsign" />
                    Diffusion homogène du CV au sein de votre entreprise
                  </li>
                  <li>
                    <img src={RightSign} alt="rightsign" />
                    Faites des économies sur l’embauche d’un assistant
                  </li>
                </ul>
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
        <section className="pack-sec">
          <div className="container">
            <div className="title">
              <h5>Quels sont les différentes Formules?</h5>
            </div>
            <div className="row">
              <div className="col">
                <div className="info">
                  <h5>STARTER PACK</h5>
                  <ul>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>20 CV/mois</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>1mois offert</span>
                      </h5>
                    </li>
                  </ul>
                </div>
                <button>try for free</button>
              </div>
              <div className="col">
                <div className="info">
                  <h5>PRO PACK</h5>
                  <ul>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>100 CV/mois</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>Refonte du template CV tous les 6 mois</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>1 mois offert</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>File prioritaire</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>IA SCRIBEE v1</span>
                        <img src={Mark} alt="" className="mark" />
                      </h5>
                    </li>
                  </ul>
                </div>
                <button>try for free</button>
              </div>
              <div className="col">
                <div className="info">
                  <h5>ELITE PACK</h5>
                  <ul>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>300 CV/mois</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>Refonte du template CV tous les mois</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>1 mois offert</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>File prioritaire</span>
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>IA SCRIBEE v1</span>
                        <img src={Mark} alt="" className="mark" />
                      </h5>
                    </li>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>IA SCRIBEE v2</span>
                        <img src={Mark} alt="" className="mark" />
                      </h5>
                    </li>
                  </ul>
                </div>
                <button>try for free</button>
              </div>
              <div className="col">
                <div className="info">
                  <h5>ULTIMATE PACK</h5>
                  <ul>
                    <li>
                      <img src={BlueRight} alt="" />
                      <h5>
                        <span>
                          Intégration dans le CRM des informations candidats
                        </span>
                        <img src={Mark} alt="" className="mark" />
                      </h5>
                    </li>
                  </ul>
                </div>
                <button>try for free</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
