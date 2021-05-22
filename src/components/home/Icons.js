import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

import styles from "./Icons.module.css";

const Icons = () => {
  return (
    <div className={styles.icons}>
      <a href="https://github.com/Graooo" target="_blank" rel="noreferrer">
        <RiGithubLine />
      </a>
      <a href="#facebook">
        <GrFacebookOption />
      </a>
      <a href="#github">
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Icons;
