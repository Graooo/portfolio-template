import React from "react";
import styles from "./PageList.module.css";
import { NavLink } from "react-router-dom";
import { NAV_DATA } from "../../data/nav/nav-data";

const PageList = () => {
  return (
    <div className={styles["nav-side"]}>
      {NAV_DATA.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              exact
              activeStyle={{ color: "#e63946" }}
              to={item.path}
              className={styles.link}
            >
              {item.icon}
              <div className={styles["link-text"]}>{item.title}</div>
            </NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default PageList;
