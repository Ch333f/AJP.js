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
