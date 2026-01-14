import React from 'react';
import './Footer.css';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id dolore corrupti similique quae aspernatur doloribus, molestias provident tenetur numquam eveniet mollitia quia vitae expedita, nobis pariatur eaque eligendi nesciunt.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li>+1 234 567 890</li>
                        <li>8A2wT@example.com</li>
                    </ul>
                </div>
            </div>
                <hr />
                <p className="footer-copyright">Copyright &copy; 2023 All rights reserved</p>
        </div>
    );
};

export default Footer;
