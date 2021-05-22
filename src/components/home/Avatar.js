import React from "react";
import avatarImg from "../../data/home/avatar.png";
import styles from "./Avatar.module.css";

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        className={styles["avatar-img"]}
        src={avatarImg}
        alt="portfolio avatar"
      />
    </div>
  );
};

export default Avatar;
