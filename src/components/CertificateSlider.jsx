import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SF_AI_A from "../assets/SF_AI_A.png";
import SF_AI_S from "../assets/SF_AI_S.png";
import SF_O from "../assets/SF_O.png";
import SF_Admin from "../assets/SF_Admin.png";
import JS from "../assets/JS.png";
import SEO from "../assets/SEO.png";
import MYSQL from "../assets/MYSQL.png";
// import javafull from '../assets/javafull.jpg';
// import postgreSQL from '../assets/postgreSQL.jpg';
// import pythonds from '../assets/Pythonds.jpg';
// import pythongl from '../assets/pythonGL.jpg';
// import pythonml from '../assets/pythonml.jpg';
// import pythonskillup from '../assets/pythonskillup.jpg';

const certificates = [
  { image: SF_AI_A },
  { image: SF_AI_S },
  { image: SF_O },
  { image: SF_Admin },
  { image: JS },
  { image: SEO },
  { image: MYSQL },
  //   { image: javafull },
  //   { image: postgreSQL },
  //   { image: pythonds },
  //   { image: pythonml },
  //   { image: pythongl },
  //   { image: pythonskillup },
  // Add more certificates as needed
];

const CertificateSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  return (
    <section id="certifications">
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-10 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Certificates
          </h2>
          <div className="certificate-slider-container bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-10 rounded-lg shadow-lg">
            <Slider {...settings}>
              {certificates.map((certificate, index) => (
                <div key={index} className="certificate-slide p-4">
                  <div className="image-container">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="certificate-image rounded-lg shadow-lg mx-auto"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSlider;
