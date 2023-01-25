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

import Blog from "./components/Blog.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import Background from "./components/layout/Background.jsx";
import "./static/assets/js/App.js";


function App() {
    return (
        <>
            <Background />
            <Header />
            <About />
            <Resume />
            <Services />
            <Portfolio />
            <Contact />
            <Blog />
            <Footer />
        </>
    );
};


export default App;
