import React from "react";
import Icons from "../../components/home/Icons";
import Card from "../../components/UI/Card";

import styles from "./Home.module.css";
import Avatar from "../../components/home/Avatar";
import Content from "../../components/home/Content";

const Home = () => {
  return (
    <section className={styles.page}>
      <Card>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.content}>
          <Content />
        </div>
        <Icons />
      </Card>
    </section>
  );
};

export default Home;
