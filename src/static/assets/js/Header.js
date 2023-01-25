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
import { on, select, scrollto } from "./App.js";


/**
* Scrool with ofset on links with a class name .scrollto
*/
function navmenueToggleSwitcher() {
    let header_logo = select("#header .header-logo");

    /**
    * Activate/show sections on load with hash links
    */
    let hash_link = window.location.hash;

    if (hash_link) {
        let initial_nav = select(hash_link);

        if (initial_nav) {
            let header = select("#header");
            let navlinks = select("#navbar .nav-link", true);

            if (hash_link !== "#header") {
                header.classList.add("header-top");
                header_logo.classList.add("d-none");

                navlinks.forEach((item) => {
                    if (item.getAttribute("href") === hash_link) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    };
                });


                function Section() {
                    setTimeout(function () {
                        initial_nav.classList.add("section-show");
                    }, 350);
                };

                
                let preloader = select(".preloader");
                let showSection;
                
                if (preloader) {
                    showSection = setInterval(function() {
                        if (preloader.style.display === "none") {
                            Section();

                            clearInterval(showSection);
                        };
                    }, 500);
                } else {
                    Section();
                };

                scrollto(hash_link);
            };
        };
    };


    /**
    * Mobile nav toggle
    */
    on("click", ".mobile-nav-toggle", function (e) {
        select("#navbar").classList.toggle("navbar-mobile");

        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
    });

    on("click", "#navbar .nav-link", function (e) {
        let section = select(this.hash);

        if (section) {
            let navbar = select("#navbar");
            let header = select("#header");
            let sections = select("section", true);
            let navlinks = select("#navbar .nav-link", true);

            navlinks.forEach((item) => {
                item.classList.remove("active");
            });

            this.classList.add("active");

            if (navbar.classList.contains("navbar-mobile")) {
                navbar.classList.remove("navbar-mobile");

                let navbarToggle = select(".mobile-nav-toggle");

                navbarToggle.classList.toggle("bi-list");
                navbarToggle.classList.toggle("bi-x");
            };

            if (this.hash === "#header") {
                header.classList.remove("header-top");
                header_logo.classList.remove("d-none");

                sections.forEach((item) => {
                    item.classList.remove("section-show");
                });

                return;
            };

            if (!header.classList.contains("header-top")) {
                header.classList.add("header-top");
                header_logo.classList.add("d-none");

                setTimeout(function () {
                    sections.forEach((item) => {
                        item.classList.remove("section-show");
                    });

                    section.classList.add("section-show");
                }, 350);
            } else {
                sections.forEach((item) => {
                    item.classList.remove("section-show");
                });

                section.classList.add("section-show")
            };

            scrollto(this.hash);
        };
    }, true);
};


export default navmenueToggleSwitcher;
