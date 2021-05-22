import React from "react";
import { USER_DATA } from "../../data/home/user-data";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className={styles.user}>
        <h1 className={styles.name}>{USER_DATA.name}</h1>
      </div>
      <div className={styles.discription}>
        <p>{USER_DATA.discription}</p>
      </div>
    </>
  );
};

export default Content;
