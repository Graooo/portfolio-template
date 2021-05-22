import React from "react";
import { PROJECTS_DATA } from "../../data/project/projects-data.js";
import styles from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <main className={styles.projects}>
      {PROJECTS_DATA.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <a
              className={styles.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles["project-img"]}>
                <img src={item.imgUrl} alt={`Project ${index + 1}`} />
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.discription}>{item.disr}</p>
              </div>
            </a>
          </div>
        );
      })}
    </main>
  );
};

export default ProjectList;
