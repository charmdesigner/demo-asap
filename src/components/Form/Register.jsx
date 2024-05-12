import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./RegisterFormValidationRules";
import { Navigate, Link } from "react-router-dom";
import LogoRegister from "../../assets/images/logo-pink.svg";
import "./Register.scss";

const Register = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate,
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Navigate to="/home" />;
  }

  return (
    <div className="section is-fullheight">
      {loggedIn && <Navigate to="/home" />}
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
                        required
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
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className={`input ${errors.number && "is-danger"}`}
                      type="number"
                      name="number"
                      onChange={handleChange}
                      value={values.number || ""}
                      required
                      placeholder="téléphone"
                    />
                  </div>
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
                      placeholder="E-mail"
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
                      id="url"
                      name="url"
                      autoComplete="on"
                      onChange={handleChange}
                      value={values.url || ""}
                      required
                      placeholder="Linkedin URL"
                    />
                  </div>
                </div>
                {/* <div className="field">
                  <div className="control">
                    <input
                      className={`input ${errors.password && "is-danger"}`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password || ""}
                      required
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div> */}
                <div className="field checkbox-wrap">
                  <div className="control">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="checkbox1"
                      value="checkbox"
                    />
                    <label for="checkbox1">Code de la société</label>
                  </div>
                </div>
                <div className="field-group">
                  <div className="field">
                    <div className="control">
                      <input
                        className={`input ${errors.code && "is-danger"}`}
                        type="text"
                        name="code"
                        onChange={handleChange}
                        value={values.code || ""}
                        required
                        placeholder="code de la société"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={`input ${errors.companyname && "is-danger"}`}
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.companyname || ""}
                        required
                        placeholder="nom de la société"
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
                      value="checkbox"
                    />
                    <label for="checkbox2">
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
                      value="checkbox"
                    />
                    <label for="checkbox3">
                      J'accepte les conditions générales d'ASAP-CV ainsi que la
                      politique de protection des données 
                    </label>
                  </div>
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
  );
};

export default Register;
