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

import ReadMore from "./ReadMore.jsx";


function Interests() {
    let interests = [
        {
            'name': "Coding", 
            'icon': "bi bi-journal-code", 
            'color': {color: "#00FF00"},
        },
        {
            'name': "Developing", 
            'icon': "ri-settings-4-line", 
            'color': {color: "#47aeff"},
        },
        {
            'name': "Hacking", 
            'icon': "ri-terminal-box-line", 
            'color': {color: "#00FF00"},
        },
        {
            'name': "Web Scrapping", 
            'icon': "ri-brush-2-line", 
            'color': {color: "#e80368"},
        },
        {
            'name': "Web3", 
            'icon': "ri-flow-chart", 
            'color': {color: "#e361ff"},
        },
        {
            'name': "Robotics", 
            'icon': "ri-robot-line", 
            'color': {color: "#ffa76e"},
        },
        {
            'name': "Gaming", 
            'icon': "ri-gamepad-line", 
            'color': {color: "#ffbb2c"},
        },
        {
            'name': "Long Rides", 
            'icon': "ri-flight-takeoff-line", 
            'color': {color: "#5578ff"},
        },
        {
            'name': "Interactive Media", 
            'icon': "ri-phone-camera-line", 
            'color': {color: "#11dbcf"},
        },
        {
            'name': "API Creation", 
            'icon': "ri-download-cloud-2-line", 
            'color': {color: "#4233ff"},
        },
        {
            'name': "Database", 
            'icon': "ri-database-2-line", 
            'color': {color: "#b2904f"},
        },
        {
            'name': "Front-End", 
            'icon': "ri-bring-to-front", 
            'color': {color: "#b20969"},
        },
        {
            'name': "Back-End", 
            'icon': "ri-send-to-back", 
            'color': {color: "#ff5828"},
        },
        {
            'name': "Data Visualization/Analytics", 
            'icon': "ri-bar-chart-box-line", 
            'color': {color: "#29cc61"},
        },
        {
            'name': "Algorithms", 
            'icon': "ri-braces-line", 
            'color': {color: "#47aeff"},
        },
        {
            'name': "Competitive Programming", 
            'icon': "bi bi-file-earmark-code", 
            'color': {color: "#00FF00"},
        },
        {
            'name': "Image Processing", 
            'icon': "bi bi-images", 
            'color': {color: "#e80368"},
        },
        {
            'name': "Eating", 
            'icon': "bi bi-egg-fried", 
            'color': {color: "#e361ff"},
        },
        {
            'name': "Numismatics", 
            'icon': "bi bi-cash-coin", 
            'color': {color: "#ffa76e"},
        },
        {
            'name': "Learning", 
            'icon': "bi bi-journal-album", 
            'color': {color: "#ffbb2c"},
        },
        {
            'name': "Creating", 
            'icon': "bi bi-tools", 
            'color': {color: "#5578ff"},
        },
        {
            'name': "Designing", 
            'icon': "bi bi-brush", 
            'color': {color: "#11dbcf"},
        },
        {
            'name': "Networking", 
            'icon': "bi bi-router", 
            'color': {color: "#4233ff"},
        },
        {
            'name': "Testing/Debugging", 
            'icon': "bi bi-bug", 
            'color': {color: "#b2904f"},
        },
        {
            'name': "Volunteering", 
            'icon': "ri-hand-heart-line", 
            'color': {color: "#b20969"},
        },
        {
            'name': "Cybersecurity", 
            'icon': "ri-fingerprint-line", 
            'color': {color: "#ff5828"},
        },
        {
            'name': "Infosec", 
            'icon': "bi bi-key", 
            'color': {color: "#29cc61"},
        },
        {
            'name': "VR/AR", 
            'icon': "bi bi-eyeglasses", 
            'color': {color: "#47aeff"},
        },
        {
            'name': "E-Services", 
            'icon': "bi bi-globe2", 
            'color': {color: "#00FF00"},
        },
        {
            'name': "Technology", 
            'icon': "bi bi-pc-display", 
            'color': {color: "#e80368"},
        },
        {
            'name': "IoT",
            'icon': "bi bi-wifi",
            'color': {color: "#e361ff"},
        },
        {
            'name': "Video Editing",
            'icon': "bi bi-camera-reels",
            'color': {color: "#ffa76e"},
        },
    ];

    return (
        <ReadMore slice={12} type="division">
            {
                interests.map((interest, index) =>
                    <div className="col-lg-3 col-md-4 mb-4" key={index}>
                        <div className="icon-box">
                            <i className={interest.icon} 
                                style={interest.color}>
                            </i>
                            
                            <h3>
                                {interest.name}
                            </h3>
                        </div>
                    </div>
                )
            }
        </ReadMore>
    );
};


export default Interests;
