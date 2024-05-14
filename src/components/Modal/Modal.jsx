import React, { useState, useEffect } from "react";
import Register from "../Form/Register";
import "./Modal.scss";

const Modal = ({ show, children, close }) => {
  const [modalState, setModalState] = useState(show);

  useEffect(() => {
    // Add event listener to close modal when clicking outside
    const handleOutsideClick = (event) => {
      if (modalState && !event.target.closest(".modal-main")) {
        close();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [modalState, close]);

  useEffect(() => {
    // Add 'modal-open' class to body when modal is open
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [show]);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <>
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <div
          className={showHideClassName}
          close={() => {
            setModalState(false);
          }}
        >
          <section className="card modal-main">
            <Register />
            {children}
          </section>
        </div>
      </div>
    </>
  );
};

export default Modal;
