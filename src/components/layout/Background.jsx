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
