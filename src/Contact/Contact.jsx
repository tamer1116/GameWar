import React from "react";
import "./Contact.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Contact() {

    return (
        <>
            <Header />
            <div className="contact-page section">
                <div className="container">
                    <div >
                        <div >
                            <div className="left-text">
                                <div className="section-heading">
                                    <h6>Contact Us</h6>
                                    <h2>Say Hello!</h2>
                                </div>
                                <p>A Contact Us page is essential to building a brand’s website as it allows visitors to contact you easily without leaving their browser.

                                    They also give you the opportunity to capture leads and improve customer service.</p>
                                <ul>
                                    <li><span>Address</span> IT Brains Academy, FL 33160, United States</li>
                                    <li><span>Phone</span> +123 456 7890</li>
                                    <li><span>Email</span> lugx@contact.com</li>
                                </ul>
                            </div>
                        </div>
                        <div >
                            <div className="right-content">
                                <div >
                                    <div >
                                        <div id="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4224907294565!2d49.850598175714374!3d40.377327958037036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0d71e9898b%3A0x2a9847f372425d29!2sIT%20Brains%20Academy!5e0!3m2!1str!2saz!4v1696621944212!5m2!1str!2saz" width="100%" height="325px" frameBorder="0" style={{ border: '0', borderRadius: '23px' }} allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                    <div >
                                        <form id="contact-form" action="" method="post">
                                            <div >
                                                <div >
                                                    <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required="" />

                                                </div>
                                                <div >

                                                    <input type="text" name="surname" id="surname" placeholder="Your Surname..." autoComplete="on" required="" />
                                                </div>
                                                <div>
                                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                                                </div>
                                                <div >
                                                    <input type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                                                </div>
                                                <div >
                                                    <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                                </div>
                                                <div >

                                                    <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />

        </>
    )
}
export default Contact;