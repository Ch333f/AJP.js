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

import "../../static/assets/css/Footer.css";


function Footer() {
    const current_year = new Date().getFullYear();

    return (
        <div className="credits">
            Copyright © 2023 - {current_year}
            
            . All Rights Reserved |
            
            &#8204;<a href="https://exfac.info" target={"_blank" }
                    rel="noopener noreferrer">
                Exfac Inc.
            </a>
        </div>
    );
};


export default Footer;
