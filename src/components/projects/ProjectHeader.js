import React from "react";
import { PAGE_DATA } from "../../data/project/page-data";
import Title from "../layout/Title";

import styles from "./ProjectHeader.module.css";

const ProjectHeader = () => {
  return (
    <header className={styles.header}>
      <Title text={PAGE_DATA.title} />
      <div className={styles.discription}>{PAGE_DATA.discription}</div>
    </header>
  );
};

export default ProjectHeader;
