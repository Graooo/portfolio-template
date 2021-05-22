import React from "react";
import { INFOR_DATA } from "../../data/about/infor-data";
import { SKILL_DATA } from "../../data/about/skill-data";
import { PAGE_DATA } from "../../data/about/page-data";
import Infor from "../../components/about/Infor";
import Skills from "../../components/about/Skills";
import Title from "../../components/layout/Title";

import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.page}>
      <header>
        <Title text={PAGE_DATA.title} />
        <div className={styles.intro}>{PAGE_DATA.intro}</div>
        <div className={styles.discription}>{PAGE_DATA.discription}</div>
      </header>
      <main className={styles.main}>
        <Infor data={INFOR_DATA} />
        <Skills data={SKILL_DATA} />
      </main>
    </section>
  );
};

export default About;
