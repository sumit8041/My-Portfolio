import React, { useState } from "react";
import EducationData from "./EducationData";
import CertificationModal from "./CertificationModal";

const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  const openModal = (certificationLink) => {
    setSelectedCertification(certificationLink);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertification(null);
  };

  return (
    <section id="education">
      <div className="bg-gray-100 lg:h-lvh md:h-full dark:bg-gray-900 text-gray-900 dark:text-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="flex flex-wrap justify-center item mt-52 gap-32">
            {EducationData.map((education, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-64 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4">
                    <img
                      src={education.logo}
                      alt={`${education.institution} logo`}
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                  <div className="p-4 min-h-[180px]">
                    {" "}
                    {/* Adjust min-h to fit your content */}
                    <h3 className="text-lg font-bold mb-2 text-center">
                      {education.degree}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 text-center mb-2">
                      {education.institution}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {education.dateRange}
                    </p>
                  </div>
                </div>
                <div className="w-full px-2 mb-4">
                  {" "}
                  {/* Add margin to the bottom for consistent spacing */}
                  <button
                    onClick={() => openModal(education.certificationLink)}
                    className="bg-transparent w-full hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
                  >
                    View Certification
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalOpen && (
          <CertificationModal
            closeModal={closeModal}
            certificationLink={selectedCertification}
            darkMode={document.documentElement.classList.contains("dark")}
          />
        )}
      </div>
    </section>
  );
};

export default Education;
