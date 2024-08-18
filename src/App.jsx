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
import { Routes, Route } from "react-router-dom";

import PortfolioDetail from "./components/PortfolioDetail.jsx";
import Index from "./components/Index.jsx";


function App() {
    return (
        <Routes>
            <Route path="/AJP.js/" element={<Index />} />
            <Route path="/AJP.js/portfolio/portfolio-detail/:slug" element={<PortfolioDetail />}/>
        </Routes>
    );
};


export default App;
