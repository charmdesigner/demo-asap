import { useState } from "react";

const useForm = (validate, onSubmitSuccess) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleCompanyCode = async (e) => {
    // console.log("EVALUE==> " + JSON.stringify(e));
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyCode: e }), // Ensure body is stringified
      };

      const response = await fetch(
        "https://europe-west9-heroic-purpose-420510.cloudfunctions.net/get-company-details",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Failed to fetch company details");
      }

      const data = await response.json();
      const companyName = data.companyName;

      setValues((prevValues) => ({
        ...prevValues,
        companyName: companyName,
      }));
    } catch (error) {
      console.error(error); // Optionally, you can set error state here
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log();

    const fieldValue = type === "checkbox" ? checked : value;

    setValues({
      ...values,

      [name]: fieldValue,
    });

    if (name === "companyCode") {
      setTimeout(() => {
        handleCompanyCode(value);
      }, 100);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }
  };

  return {
    handleChange,
    values,
    errors,
    handleSubmit,
    setValues,
  };
};

export default useForm;
