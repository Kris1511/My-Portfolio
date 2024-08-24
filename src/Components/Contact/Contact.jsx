import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0e7d08f3-df8c-4889-9b87-2e0a8666c95c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
          form.reset();
        }
      };
    


  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="theme_pattern" width='40%' />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail_icon" />
                        <p>chandramohank231562@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call_icon" />
                        <p>8489961929</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location_icon" />
                        <p>Bangalore, Karnataka</p>
                    </div>
                </div>
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Enter your message</label>
                <textarea name="message" rows={8} placeholder='Enter your message' />
                <button type='submit' className='contact-submit'>
                    Submit now
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact