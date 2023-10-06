import React from 'react';
import "./Footer.css";
import { AiOutlineTwitter, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__contact">
                    <h3>Contact Us</h3>
                    <p>
                        <FaMapMarkerAlt />    Address: Gamewar - Video Game Store,<br /> 33 New Montgomery St. Ste 750,<br /> San Francisco
                    </p>
                    <p> <FaPhoneAlt />Phone: (+91)012-345-6789</p>
                    <p><FaEnvelope />Email: gamewar@exampledemo.com</p>
                </div>
                <div className="footer__quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Search</li>
                        <li>Delivery Information</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Shipping</li>
                    </ul>
                </div>
                <div className="footer__information">
                    <h3>Information</h3>
                    <ul>
                        <li>Shipping & Refund</li>
                        <li>Terms and Conditions</li>
                        <li>Sitemap</li>
                        <li>Policy for Buyers</li>
                        <li>Policy for Sellers</li>
                    </ul>
                </div>
                <div className="footer__newsletter">
                    <h3>Newsletter Subscription</h3>
                    <p>Subscribe to our newsletter:</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />

                    </form>
                    <a href=""><AiOutlineTwitter /></a>
                    <a href=""><AiFillFacebook /></a>
                    <a href=""><BsPinterest /></a>
                    <a href=""><AiOutlineInstagram /></a>
                    <a href=""><AiFillYoutube /></a>
                </div>

            </div>
            <div className="footer__copyright">
                <p>© 2023 GameWar - Video Game Store</p>
            </div>
            <div className="footer__powered-by">
                <p>Powered by Tamerlan</p>
            </div>
        </footer>
    );
};

export default Footer;
