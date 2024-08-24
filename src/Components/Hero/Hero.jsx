import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profile_img} alt='' />
        <h1><span>I'm Chandramohan K,</span> frontend developer in Bangalore</h1>
        <p>I am a frontend developer from bangalore, Bangalore in 1.5 years of experience</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero