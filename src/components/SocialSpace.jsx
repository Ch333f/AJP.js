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


function SocialSpace() {
	return (
		<div className="social-links">
			<a href="https://wa.me/+2347053001118" target="_blank"
				rel="noopener noreferrer" className="whatsapp"
			>
				<i className="bi bi-whatsapp"></i>
			</a>

			<a href="https://linkedin.com/in/ade-josh" target="_blank"
				rel="noopener noreferrer" className="linkedin">
				<i className="bi bi-linkedin"></i>
			</a>

			<a href="https://instagram.com/otechcup" target="_blank"
				rel="noopener noreferrer" className="instagram"
			>
				<i className="bi bi-instagram"></i>
			</a>

			<a href="https://github.com/mr-o-josh" target="_blank"
				rel="noopener noreferrer" className="github"
			>
				<i className="bi bi-github"></i>
			</a>

			<a href="https://facebook.com/Adewale.O.Josh" target="_blank"
				rel="noopener noreferrer" className="facebook"
			>
				<i className="bi bi-facebook"></i>
			</a>
		</div>
	);
};


export default SocialSpace;
