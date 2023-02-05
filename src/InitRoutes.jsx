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
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";


function InitRoutes() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};


export default InitRoutes;
