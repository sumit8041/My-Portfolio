import React from "react";
import ProjectData from "./ProjectData";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
