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


/**
* Easy selector helper function
*/
const select = (el, all = false) => {
    el = el.trim();

    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
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

/**
* Scrolls to an element with header offset
*/
const scrollto = (el) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


export { on, scrollto, select };
