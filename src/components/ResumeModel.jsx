import React from "react";
import resumeImage from "../assets/resume1.png";
import resumeImage1 from "../assets/resume2.png";
// Import your resume image

const ResumeModal = ({ closeModal, darkMode }) => {
  return (
    <div className={`modal ${darkMode ? "dark" : ""}`}>
      <div className="modal-content">
        <span
          className={`close ${darkMode ? "dark" : ""}`}
          onClick={closeModal}
        >
          &times;
        </span>
        <img src={resumeImage} alt="Resume" className="resume-image" />
        <img src={resumeImage1} alt="Resume1" className="resume-image" />
      </div>
    </div>
  );
};

export default ResumeModal;
