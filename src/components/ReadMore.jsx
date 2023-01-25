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
import React, { useState } from "react";

import WaypointInit from "../static/assets/js/About.js";


function ReadMore({slice, children, type}) {
    const slice_to = slice;
    const text = children;
    const content_type = type;
    const [isReadMore, setIsReadMore] = useState(true);


    function toggleReadMore() {
        setIsReadMore(!isReadMore);
        WaypointInit();
    };

    
    return (
        <>
            {
                isReadMore 
                ? slice_to 
                ? content_type === "paragraph" 
                ? <p>{text.slice(0, slice_to)}</p> 
                : text.slice(0, slice_to) 
                : text.slice(0, slice_to) 
                : content_type === "paragraph" 
                ? <p>{text}</p> 
                : text
            }
            
            <button className="mt-2" type="button" onClick={toggleReadMore}>
                {isReadMore ? "Read More" : "Show Less"}
            </button>
        </>
    );
};


export default ReadMore;
