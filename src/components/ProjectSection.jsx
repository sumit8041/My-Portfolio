import React from "react";
import ProjectData from "./ProjectData";

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-container">
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
    </div>
  );
};

export default ProjectSection;
