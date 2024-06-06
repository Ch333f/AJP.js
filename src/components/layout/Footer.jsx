/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP)
*/


/**
* author: OTechCup
* copyright: &copy; 2022 - new Date().getFullYear() All Rights Reserved | Exfac
* credits: ["Mr. O"]
* version: v0.1.0
* maintainer: OTechCup
* email: support@exfac.info
*/


// import modules
import React from "react";

import "../../static/assets/css/Footer.css";


function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <div className="credits">
      © 2023 - {current_year} All Rights Reserved |

      &#8204;<a href="https://exfac.info" target={"_blank"}
        rel="noopener noreferrer">
        Exfac
      </a>
    </div>
  );
};


export default Footer;
