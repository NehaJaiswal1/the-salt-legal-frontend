
// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => {
    return (
       
        <div class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="footer-heading">THE SALT LEGAL</h3>
                <p class="footer-text">We excel in employer-employee disputes, labor law, startup advisory, cyberthefts, contracts and intellectual property, providing tailored solutions with innovation and excellence....</p>
            </div>
            <div class="footer-section">
                <h2 class="footer-heading">USEFUL LINKS</h2>
                <ul class="footer-links">
                <li><a href="/">Home</a></li>
                    <li><a href="/feature">Features</a></li>
                    <li><a href="/package">Packages</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/newsletter">Newsletters</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 class="footer-heading">CONNECT WITH US</h3>
                <ul class="footer-links">
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/package">Packages</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/newsletter">Newsletters</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact-us">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 class="footer-heading">Follow Us</h3>
                <p><FontAwesomeIcon icon={faPhone} size='lg' style={{color:'#D0A144', marginRight:'5px'}}/> +1 (416) 871-5196</p>
                <p><FontAwesomeIcon icon={faEnvelope} size='lg' style={{color:'#D0A144', marginRight:'5px'}}/> contact@gmail.com</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" style={{color:'#D0A144', marginRight:'5px'}}/></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" style={{color:'#D0A144', marginRight:'5px'}}/></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" style={{color:'#D0A144', marginRight:'5px'}}/></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" style={{color:'#D0A144', marginRight:'5px'}}/></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="footer-text">COPYRIGHT © 2024 - THE SALT LEGAL - ALL RIGHTS RESERVED.</p>
        </div>
    </div>
    
    );
};

export default Footer;