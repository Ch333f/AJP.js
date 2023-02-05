/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP) App
*/


/**
* author: OTechCup
* copyright: Copyright 2022 - new Date().getFullYear(), Exfac Inc.
* credits: ["Mr. O"]
* version: process.env.AJP_VERSION
* maintainer: OTechCup
* email: support@exfac.info
* status: process.env.AJP_ENVIRONMENT_STATUS
*/


// import modules
import React from "react";

import "../static/assets/js/Contact.js";
import SocialSpace from "./SocialSpace";
import "../static/assets/css/Contact.css";


function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Contact
                    </h2>
                    
                    <p>
                        Ring Me Up
                    </p>
                </div>

                <div className="row mt-2">
                    <div className="col-md-6 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-map"></i>

                            <h3>
                                My Spot
                            </h3>
                            
                            <p>
                                D12, D. Plaza, Sokoto Road, Opposite MTD Junction, Zaria, Kaduna State.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-share-alt"></i>

                            <h3>
                                Social Space
                            </h3>
                            

                            <SocialSpace />


                        </div>
                    </div>

                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-envelope"></i>

                            <h3>
                                Email Me
                            </h3>
                            
                            <p>
                                adewalejoshua13@gmail.com
                                
                                <br />
                                
                                support@exfac.info
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 d-flex align-items-stretch">
                        <div className="info-box">
                            <i className="bx bx-phone-call"></i>

                            <h3>
                                Ping Me
                            </h3>
                            
                            <p>
                                +234 705 300 1118
                            </p>
                        </div>
                    </div>
                </div>

                <form action="" method="get" className="email-form mt-4">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                id="name" 
                                placeholder="Your Name" 
                                required
                            />
                        </div>

                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input 
                                type="email" 
                                className="form-control"
                                name="email" 
                                id="email" 
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="subject" 
                            id="subject" 
                            placeholder="Subject" 
                            required
                        />
                    </div>

                    <div className="form-group mt-3">
                        <textarea 
                            className="form-control" 
                            name="message" 
                            rows="5" 
                            placeholder="Message" 
                            required
                        />
                    </div>

                    <div className="my-3">
                        <div className="loading rotate-bf-animation">
                            Loading
                        </div>
                        
                        <div className="error-message"></div>

                        <div className="sent-message">
                            Your message has been sent. Thank you!
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};


export default Contact;
