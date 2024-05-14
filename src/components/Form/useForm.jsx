// useForm.js
import { useState } from "react";

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleCompanyCode = async () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ companyCode: values.companyCode }), // Ensure body is stringified
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
      console.error(error);
      // Optionally, you can set error state here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    name === "companyCode" &&
      setTimeout(() => {
        handleCompanyCode();
      }, 100);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate(values);
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length === 0) {
  //     // Submit the form or trigger any action
  //   }
  // };

  return {
    handleChange,
    values,
    errors,
  };
};

export default useForm;
