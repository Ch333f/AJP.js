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
import initPortfolioJS from "./Portfolio.js";
import SwiperInit from "./About.js";


/**
* Easy selector helper function
*/
const select = (el, all = false) => {
    el = el.trim()

    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
            selectEl.addEventListener(type, listener);
        };
    };
};


function initFunc() {
    SwiperInit();
    initPortfolioJS();
};


let vDomMounted = select("#root")
let runInitFunc;

if (vDomMounted) {
    if (!vDomMounted.children.length) {
        runInitFunc = setInterval(function () {
            if (!vDomMounted.children.length) {
                initFunc();
            } else {
                initFunc();

                clearInterval(runInitFunc);
            };
        }, 1000);
    } else {
        initFunc();
    };
};


export { on, select };
