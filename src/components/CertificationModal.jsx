import React from "react";

const CertificationModal = ({ closeModal, certificationLink, darkMode }) => {
  return (
    <div className={`modal ${darkMode ? "dark" : ""}`}>
      <div className="modal-content">
        <span
          className={`close ${darkMode ? "dark" : ""}`}
          onClick={closeModal}
        >
          &times;
        </span>
        <img
          src={certificationLink}
          alt="Certification"
          className="certification-image"
        />
      </div>
    </div>
  );
};

export default CertificationModal;
