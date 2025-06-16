import React, { useEffect, useRef, useState } from "react";
import ResumeModel from "./ResumeModel";

const AboutSection = () => {
  const aboutRef = useRef(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to handle scroll and trigger animation
  const handleScroll = () => {
    const aboutSection = aboutRef.current;
    if (aboutSection && !animationTriggered) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.5) {
        setAnimationTriggered(true);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationTriggered]);

  useEffect(() => {
    // Trigger animation on page load
    handleScroll();
  }, []);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 sm:px-6 lg:px-36 py-12 ${
        animationTriggered ? "animate-about" : ""
      }`}
    >
      <div className="container mx-auto flex flex-col items-start space-y-6 md:space-y-0">
        <h2 className="text-4xl font-bold mb-10 text-center w-full">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left-hand side */}
          <div className="md:w-1/2 mb-6 md:mb-0 animate-left">
            <p className="text-lg mb-4 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left dark:first-letter:text-white first-letter:text-gray-900">
              Hi, I bring over 2 years of professional experience in customer
              and technical support roles, having worked with leading brands
              such as Apple, OnePlus, and Flipkart. In these roles, I have
              developed strong problem-solving, communication, and
              troubleshooting skills while handling customer queries, technical
              issues, and hardware/software support through chat, email, and CRM
              platforms. My background includes hands-on experience with tools
              like OCRM and ServiceNow, as well as supporting users across iOS,
              macOS, and Android systems. While I am a fresher in the IT
              development sector, I am a certified Salesforce Administrator and
              a skilled Web Developer with strong proficiency in JavaScript,
              React.js, HTML, and CSS. I am now eager to transition into a
              technical role where I can apply my customer service experience
              alongside my growing technical expertise to deliver impactful
              digital solutions.
            </p>
            <p className="text-lg mb-4">
              Currently transitioning into the IT development sector as a
              certified Salesforce Administrator and skilled Web Developer.
              Technically proficient in JavaScript, React.js, HTML5, and CSS3,
              with experience in building responsive, user-centric web
              applications and UI designs using tools like Canva, GitHub, and
              Netlify. Eager to contribute my blend of customer support
              expertise and growing technical skills to a forward-thinking
              organization focused on delivering seamless digital solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={openModal}
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
              >
                View Resume
              </button>
              <a
                href=""
                download=""
                className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* Right-hand side */}
          <div className="md:w-1/2 animate-right">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="space-y-4">
              {[
                { skill: "Salesforce Basics and Administration", level: 80 },
                { skill: "HTML (HyperText Markup Language):", level: 95 },
                { skill: "CSS (Cascading Style Sheets)", level: 90 },
                { skill: "JavaScript (JS)", level: 80 },
                { skill: "Bootstrap", level: 90 },
                { skill: "React JS", level: 80 },
                { skill: "Git and GitHub", level: 85 },
                { skill: "Vite", level: 80 },
              ].map(({ skill, level }) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium">{skill}</span>
                    <span className="text-lg font-medium">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal if modalOpen is true */}
      {modalOpen && <ResumeModel closeModal={closeModal} />}
    </section>
  );
};

export default AboutSection;
