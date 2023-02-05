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
import React, { useEffect } from "react";

import "../../static/assets/css/Background.css";
import cammInit from "../../static/assets/js/camm.js";


function Background() {
    let dismounted = false;
    
    useEffect(function() {
        if (dismounted) {
            return;
        } else {
            cammInit();
        };

        return function cleanup() {
            dismounted = true;
        };
    }, []);

    return (
        <>
            <canvas id="canvas"></canvas>

            <div id="stars"></div>

            <div id="stars2"></div>

            <div id="stars3"></div>

            <div className="deer">
                <div className="head">
                    <div className="antlers"></div>

                    <div className="nose"></div>
                </div>

                <div className="neck"></div>

                <div className="body">
                    <div className="legs">
                        <div className="front-right"></div>

                        <div className="back-right"></div>

                        <div className="back-left"></div>

                        <div className="front-left"></div>
                    </div>
                </div>
            </div>

            <div className="line-runners">
                <div className="line"></div>
                
                <div className="line"></div>
                
                <div className="line"></div>
                
                <div className="line"></div>
                
                <div className="line"></div>
            </div>
        </>
    );
};


export default Background;
