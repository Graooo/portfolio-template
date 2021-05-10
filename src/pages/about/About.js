import React from "react";
import { InforData } from "./InforData";
import { SkillData } from "./SkillData";
import "./About.css";

const About = () => {
  return (
    <section className="about-page">
      <header className="about-header">
        <div className="title">About me</div>
        <div className="about-intro">Hi, I am Graooo !</div>
        <div className="discription">
          THIS is a very very long long long discription. I just wanna type it
          to create a space keepper LOL!
        </div>
      </header>
      <main className="main">
        <div className="info">
          {InforData.map((item, index) => {
            return (
              <div key={index} className="info-items">
                <p>
                  {`${item.title} : `}
                  <span>{item.value}</span>
                </p>
              </div>
            );
          })}
        </div>
        <div className="skills">
          {SkillData.map((item, index) => {
            return (
              <div key={index} className="skill-item">
                <p className="skill-name">{item.title}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: item.value }}
                  ></div>
                  {/* <div className="progress-percent">{item.value}</div> */}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default About;
