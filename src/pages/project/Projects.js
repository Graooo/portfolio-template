import React from "react";
import ProjectList from "../../components/projects/ProjectList";
import ProjectHeader from "../../components/projects/ProjectHeader";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.page}>
      <ProjectHeader />
      <ProjectList />
    </section>
  );
};

export default Projects;
