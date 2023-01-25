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

import "../../static/assets/css/Footer.css";


function Footer() {
    const current_year = new Date().getFullYear();

    return (
        <div className="credits">
            Copyright © 2023 - {current_year}
            
            . All Rights Reserved |
            
            &#8204;<a href="http://www.exfac.info" target="_blank" 
                    rel="noopener noreferrer">
                Exfac Inc.
            </a>
        </div>
    );
};


export default Footer;
