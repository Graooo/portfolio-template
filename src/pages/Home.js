import React from "react";
import avatarImg from "../assets/dinosaur.png";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <div>
        <img id="avatar" src={avatarImg} alt="avatarImg" />
      </div>
      <div id="home-name">Grao</div>
      <div id="home-title">I'm a Web Developer</div>
      <div>
        <a className="icon" href="#github">
          <RiGithubLine />
        </a>
        <a className="icon" href="#facebook">
          <GrFacebookOption />
        </a>
        <a className="icon" href="#github">
          <FaLinkedinIn />
        </a>
      </div>
    </section>
  );
};

export default Home;
