import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt='' />
        <h1><span>I'm Chandramohan K,</span> frontend developer in Bangalore</h1>
        <p>I am a frontend developer from bangalore, Bangalore in 1.6 years of experience</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero