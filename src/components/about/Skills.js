import React from "react";
import styles from "./Skills.module.css";

const Skills = (props) => {
  return (
    <div className={styles.skills}>
      {props.data.map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <p>{item.title}</p>
            <div className={styles.progress}>
              <div
                className={styles["progress-bar"]}
                style={{ width: item.value }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
