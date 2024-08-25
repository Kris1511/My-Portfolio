import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/chandru.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme_pattern" width='50%' />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile_img" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a experienced Frontend Developer with over a decade of
              professional expertise in this field. Throughout the career, I have had the privilege of collaborating with prestigious organization, contributing to their success and growth. 
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70% " }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70% " }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60% " }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "50% " }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "60% " }} />
            </div>
            <div className="about-skill">
              <p>Git</p>
              <hr style={{ width: "50% " }} />
            </div>
            <div className="about-skill">
              <p>Material UI</p>
              <hr style={{ width: "50% " }} />
            </div>
            <div className="about-skill">
              <p>Redux</p>
              <hr style={{ width: "60% " }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.6</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
