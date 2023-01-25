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
import React from "react";


function SocialSpace() {
    return (
        <div className="social-links">
            <a href="https://wa.me/+2347053001118" target="_blank" 
                    rel="noopener noreferrer" className="whatsapp">
                <i className="bi bi-whatsapp"></i>
            </a>

            <a href="https://linkedin.com/in/mr-o" target="_blank" 
                    rel="noopener noreferrer" className="linkedin">
                <i className="bi bi-linkedin"></i>
            </a>

            <a href="https://instagram.com/otechcup" target="_blank" 
                    rel="noopener noreferrer" className="instagram">
                <i className="bi bi-instagram"></i>
            </a>

            <a href="https://github.com/mr-o-josh" target="_blank" 
                    rel="noopener noreferrer" className="github">
                <i className="bi bi-github"></i>
            </a>

            <a href="https://facebook.com/Adewale.O.Josh" target="_blank"
                    rel="noopener noreferrer" className="facebook">
                <i className="bi bi-facebook"></i>
            </a>
        </div>
    );
};


export default SocialSpace;
