import React from "react";

const EmailButton = ({ className }) => {
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
      <button onClick={handleEmailClick} className={className}>
        Demander une Démo
      </button>
    </>
  );
};
export default EmailButton;
