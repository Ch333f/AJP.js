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
import { Routes, Route } from "react-router-dom";

import PortfolioDetail from "./components/PortfolioDetail.jsx";
import Index from "./components/Index.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio/portfolio-detail/:slug" element={<PortfolioDetail />}/>
        </Routes>
    );
};


export default App;
