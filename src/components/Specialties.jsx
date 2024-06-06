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
