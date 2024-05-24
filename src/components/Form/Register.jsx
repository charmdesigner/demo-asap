import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./RegisterFormValidationRules";
import { Link } from "react-router-dom";
import LogoRegister from "../../assets/images/logo-pink.svg";
import Checked from "../../assets/images/checked.png";
import Warning from "../../assets/images/warning.png";
import axios from "axios";
import "./Register.scss";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [modalImage, setModalImage] = useState(Checked);

  const handleSubmitForm = async () => {
    try {
      const response = await axios.post(
        "https://us-central1-heroic-purpose-420510.cloudfunctions.net/request-from-ui-and-post-linkedin-data",
        {
          firstName: values.firstname,
          lastName: values.name,
          linkedInUrl: values.linkedinUrl,
          phone: values.phone,
          email: values.email,
          companyCode: values.companyCode,
        }
      );

      if (response.status === 200) {
        setModalMessage("Détails soumis avec succès");
        setSubmitSuccess(true);
        setModalImage(Checked);
      }
    } catch (error) {
      let errorMessage =
        "Une erreur s'est produite lors de la soumission du formulaire. Veuillez réessayer.";
      if (error.response && error.response.status === 400) {
        errorMessage =
          error.response.data.message ||
          "Échec de la soumission, veuillez réessayer plus tard.";
        setModalImage(Warning);
      }
      setModalMessage(errorMessage);
    } finally {
      setSubmitSuccess(true);
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        window.location.href = "/demo-asap"; // Redirect to the demo page
      }, 2500);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    validate,
    handleSubmitForm
  );

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (e) => {
    handleChange(e);
  };

  return (
    <>
      {!submitSuccess && (
        <div className="section is-fullheight">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="box-title">
                  <img src={LogoRegister} alt="" />
                  <p>
                    Ce questionnaire à pour objectif de récolter quelques
                    informations pour nous permettre de créer ton CV
                  </p>
                </div>
                <div className="tearms-link">
                  <Link to="/">condition générale</Link>
                  <Link to="/">politique de protection des données</Link>
                </div>
              </div>
              <div className="col">
                <div className="box">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="field-group">
                      <div className="field">
                        <div className="control">
                          <input
                            className={`input ${errors.name && "is-danger"}`}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name || ""}
                            placeholder="Nom"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            className={`input ${
                              errors.firstname && "is-danger"
                            }`}
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            value={values.firstname || ""}
                            required
                            placeholder="Prenom"
                          />
                        </div>
                        {errors.firstname && (
                          <p className="help is-danger">{errors.firstname}</p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className={`input ${errors.phone && "is-danger"}`}
                          type="tel"
                          name="phone"
                          onChange={handleChange}
                          value={values.phone || ""}
                          required
                          placeholder="Téléphone"
                        />
                      </div>
                      {errors.phone && (
                        <p className="help is-danger">{errors.phone}</p>
                      )}
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          autoComplete="on"
                          className={`input ${errors.email && "is-danger"}`}
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={values.email || ""}
                          required
                          placeholder="E-Mail"
                        />
                        {errors.email && (
                          <p className="help is-danger">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          type="url"
                          id="linkedinUrl"
                          name="linkedinUrl"
                          autoComplete="on"
                          onChange={handleChange}
                          value={values.linkedinUrl || ""}
                          required
                          placeholder="Linkedin URL"
                        />
                      </div>
                      {errors.linkedinUrl && (
                        <p className="help is-danger">{errors.linkedinUrl}</p>
                      )}
                    </div>
                    <div className="field checkbox-wrap">
                      <div className="control">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="checkbox1"
                          checked={values.checkbox1 || false}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="checkbox1">Code de la société</label>
                      </div>
                      {errors.checkbox1 && (
                        <p className="help is-danger">{errors.checkbox1}</p>
                      )}
                    </div>
                    <div className="field-group">
                      <div className="field">
                        <div className="control">
                          <input
                            className={`input ${
                              errors.companyCode && "is-danger"
                            }`}
                            type="text"
                            name="companyCode"
                            disabled={!values.checkbox1}
                            onChange={handleChange}
                            value={values.companyCode || ""}
                            placeholder="Code de la société"
                          />
                        </div>
                        {errors.companyCode && (
                          <p className="help is-danger">{errors.companyCode}</p>
                        )}
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            disabled={!values.checkbox1}
                            name="companyName"
                            value={values.companyName || ""}
                            readOnly
                            placeholder="Nom de la société"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field checkbox-wrap">
                      <div className="control">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          name="checkbox2"
                          onChange={handleCheckboxChange}
                          required
                        />
                        <label htmlFor="checkbox2">
                          Je ne souhaites pas recevoir, les actualités et les
                          nouvelles concernant le produit 
                        </label>
                      </div>
                    </div>
                    <div className="field checkbox-wrap">
                      <div className="control">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          name="checkbox3"
                          onChange={handleCheckboxChange}
                          required
                        />
                        <label htmlFor="checkbox3">
                          J'accepte les conditions générales d'ASAP-CV ainsi que
                          la politique de protection des données 
                        </label>
                      </div>
                      {errors.checkbox3 && (
                        <p className="help is-danger">{errors.checkbox3}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="button is-block is-info is-fullwidth"
                    >
                      Envoyer le formulaire
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className={`submitmodal ${isModalOpen ? "is-active" : ""}`}>
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="box">
              <img src={modalImage} alt="" />
              <p>{modalMessage}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
