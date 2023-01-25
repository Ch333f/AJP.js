/**
*!/usr/bin/env react
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP) App
*/


/**
* author: OTechCup
* copyright: Copyright 2022 - 2022, Exfac
* credits: ["Mr. O."]
* license: OTechCup
* version: v0.1
* maintainer: OTechCup
* email: help.otechcup@gmail.com
* status: production
*/


// import modules
import React, { useEffect } from "react";

import "../../static/vendors/bootstrap-icons/bootstrap-icons.css";
import initHeadline from "../../static/vendors/animated-headline-master/js/main.js";
import "../../static/vendors/animated-headline-master/css/style.css";
import "../../static/assets/css/animations/ltc.css";
import "../../static/assets/css/Header.css";
import otechcup_logo_sm from "../../static/assets/img/index/otechcup-logo-sm.png";
import navmenueToggleSwitcher from "../../static/assets/js/Header.js";
import Specialties from "../Specialties.jsx";
import SocialSpace from "../SocialSpace.jsx";


function Header() {
    let dismounted = false;

    useEffect(function () {
        if (dismounted) {
            return;
        } else {
            initHeadline();
            navmenueToggleSwitcher();
        };

        return function cleanup() {
            dismounted = true;
        };
    }, []);

    return (
        <header id="header">
            <div className="container">
                <a href="http://www.exfac.info/products/otechcup" 
                        className="mr-auto header-logo">
                    <img
                        src={otechcup_logo_sm}
                        alt="otechcup-logo" 
                        className="img-fluid mb-4_5r"
                    />
                </a>

                <h1>
                    <a href="/">
                        <span className="ltc-animation" id="adewale">
                            Adewale
                        </span>&#8204;
                        
                        Joshua
                    </a>
                </h1>
                
                <h2>
                    I'm a creative and innovative

                    &#8204;<span className="cd-headline rotate-1">
                        <span className="cd-words-wrapper">
                        
                        
                            <Specialties cp={{className: "fs-27p"}} />


                        </span>
                    </span>

                    <br />
                    
                    drive by passion...
                </h2>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <a className="nav-link active" href="#header">
                                Home
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-link" href="#resume">
                                Resume
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-link" href="#services">
                                Services
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-link" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-link" href="#blog">
                                Blog
                            </a>
                        </li>
                    </ul>

                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>


                <SocialSpace />


            </div>
        </header>
    );
};


export default Header;
