import React from "react";
import avatarImg from "./avatar.png";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <div className="card">
        <div className="card-header">
          <div className="avatar">
            <img id="img" src={avatarImg} alt="" />
          </div>
        </div>
        <div className="card-body">
          <div className="user-meta">
            <h3 className="user-name">Graooo</h3>
          </div>
          <div className="user-disr">
            <p>
              Grao is a front-end developer. He works very hard to achieve his
              long term goal.
            </p>
          </div>
        </div>

        <div className="icon-group">
          <a
            className="icon"
            href="https://github.com/Graooo"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubLine />
          </a>
          <a className="icon" href="#facebook">
            <GrFacebookOption />
          </a>
          <a className="icon" href="#github">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
