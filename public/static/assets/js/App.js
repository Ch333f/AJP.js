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
