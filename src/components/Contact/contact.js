import React, {useRef} from 'react';
import './contact.css';
import GitHub from '../../assets/github-img.png';
import LinkedIn from '../../assets/linkedin-img.png';
import Emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        Emailjs.sendForm('service_ey3gzb7', 'template_l8z0n8x', form.current, 'nr4usfPxR_h5CbynFhI26')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact'>
            <h1>CONTACT</h1>
            <span className='contactDesc'>Let's Talk</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Enter your name' name='your_name'/>
                <input type='text' className='email' placeholder='Enter your Email' name='your_email'/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
            </form>
            <div id='contactSites'>
                <span id='contactMadeByText'>Made by Vishal❤️</span>
                <a href="https://github.com/ranavishal0002" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt='githubimage' className='GitHub-img' />
                </a>
                <a href="https://www.linkedin.com/in/vishal-singh-rana-756360252/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt='linkedinimage' className='LinkedIn-img' />
                </a>
            </div>




        </div>
    );
}

export default Contact;
