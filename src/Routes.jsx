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
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PortfolioDetail from "./components/PortfolioDetail.jsx";
import App from "./App.jsx";


function InitRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/portfolio/portfolio-detail/:slug" element={<PortfolioDetail />}/>
            </Routes>
        </BrowserRouter>
    );
};


export default InitRoutes;
