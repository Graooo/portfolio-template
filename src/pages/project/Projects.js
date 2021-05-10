import React from "react";
import { ProjectsData } from "./ProjectsData.js";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-page">
      <header className="header">
        <div className="title">Projects</div>
      </header>
      <main className="projects">
        {ProjectsData.map((item, index) => {
          return (
            <div key={index} className="project-item">
              <a
                className="project-link"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className=" project-img ">
                  <img src={item.imgUrl} alt={`Project ${index + 1}`} />
                </div>
                <div className="project-info">
                  <p className="project-title">{item.title}</p>
                  <p className="project-disr">{item.disr}</p>
                </div>
              </a>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Projects;
