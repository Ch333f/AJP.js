/**
*!/usr/bin/env react
* -*- coding: utf-8 -*-
* Adewale Joshua Portfolio (AJP) App
*/


/**
* author: OTechCup
* copyright: Copyright 2022 - 2022, OTechCup
* credits: ["Mr. O."]
* license: OTechCup
* version: v0.1
* maintainer: OTechCup
* email: help.otechcup@gmail.com
* status: production
*/


// import modules
import React from "react";
import ReactDOM from "react-dom/client";

import InitRoutes from "./Routes.jsx";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <InitRoutes />
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
