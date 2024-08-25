import React from "react";
import "./Hero.css";
import profile_img from "../../assets/chandru.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Chandramohan K,</span> frontend developer in Bangalore
      </h1>
      <p>
        I am a frontend developer from bangalore, Bangalore in 1.5 years of
        experience
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1vrmRw5QyUFq834O9tGY8BqKiBilJErER/view"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
