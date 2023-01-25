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


function Specialties(props) {
    return (
        <>
            <b className="is-visible">
                Developer
            </b>

            <b>
                Graphic Designer
            </b>

            <b>
                Software Engineer
            </b>

            <b>
                Enterpreneur
            </b>

            <b>
                Coder
            </b>

            <b>
                Coach
            </b>

            <b {...props.cp}>
                Competitive Programmer
            </b>

            <b>
                System Administrator
            </b>

            <b>
                QA Engineer
            </b>

            <b>
                Video Editor
            </b>

            <b>
                IT Professional
            </b>

            <b>
                Digital Marketer
            </b>
        </>
    );
};


export default Specialties;
