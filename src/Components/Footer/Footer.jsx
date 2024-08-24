import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="footer_logo" />
                <p>I am a frontend developer from , Bangalore with 1.5 years of experience in companies like Logituit, Trigeminla.AI</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="text" placeholder='Enter your email'  />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                &#169; 2024 Chandramohan K. All right reserved
            </div>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy and Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer