import React, { useState, useEffect } from "react";
import useForm from "./useForm";
import validate from "./RegisterFormValidationRules";
import { Link, Navigate } from "react-router-dom";
import LogoRegister from "../../assets/images/logo-pink.svg";
import "./Register.scss";

const Register = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState({});

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  useEffect(() => {
    if (submitSuccess) {
      setIsModalOpen(true); // Open the modal on success
      const timer = setTimeout(() => {
        setIsModalOpen(false); // Close the modal after 3 seconds
        setSubmitSuccess(false);
        // Redirect to the home page after 5 seconds
        setTimeout(() => {
          window.location.href = "/demo-asap"; // Replace '/home' with your actual home page URL
        }, 500);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setSubmitSuccess(true);
        setIsModalOpen(false); // Close the modal when submitting the form
      } catch (error) {
        console.error(error);
      }
    } else {
      // If there are validation errors, update the state to show them
      setError(validationErrors);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleChange(e); // Update form values
    setCheckbox3(checked);
    setCheckbox2(checked);
    setCheckbox1(checked); // Update checkbox state
  };

  return (
    <>
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
                <form onSubmit={handleSubmitForm} noValidate>
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
                          className={`input ${errors.firstname && "is-danger"}`}
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
                        required
                        checked={values.checkbox1 || false} // Use values.checkbox1 for controlled checkbox
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
                          onChange={handleChange}
                          value={values.companyCode || ""}
                          required
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
                          className={`input`}
                          type="text"
                          disabled
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
                        checked={values.checkbox2 || false} // Use values.checkbox2 for controlled checkbox
                        onChange={handleCheckboxChange}
                        required
                      />
                      <label htmlFor="checkbox2">
                        Je ne souhaites pas recevoir, les actualités et les
                        nouvelles concernant le produit 
                      </label>
                    </div>
                    {errors.checkbox2 && (
                      <p className="help is-danger">{errors.checkbox2}</p>
                    )}
                  </div>
                  <div className="field checkbox-wrap">
                    <div className="control">
                      <input
                        type="checkbox"
                        id="checkbox3"
                        name="checkbox3"
                        checked={values.checkbox3 || false} // Use values.checkbox3 for controlled checkbox
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
                {/* Display validation errors */}

                {Object.keys(errors).length > 0 && (
                  <div className="error-message">
                    {Object.values(errors).map((error, index) => (
                      <p key={index} className="help is-danger">
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Success modal */}
      {submitSuccess && (
        <div className={`submitmodal ${isModalOpen ? "is-active" : ""}`}>
          <div className="modal-background" onClick={handleCloseModal}></div>
          <div className="modal-content">
            <div className="box">
              <p>Détails soumis avec succès</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
