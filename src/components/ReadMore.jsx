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
import React, { useState } from "react";

import WaypointInit from "../static/assets/js/About.js";


function ReadMore({slice, children, type}) {
    const slice_to = slice;
    const content = children;
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
                ? <p>{content.slice(0, slice_to)}</p> 
                : content.slice(0, slice_to) 
                : content.slice(0, slice_to) 
                : content_type === "paragraph" 
                ? <p>{content}</p> 
                : content
            }
            
            <button className="mt-2" type="button" onClick={toggleReadMore}>
                {isReadMore ? "Read More" : "Show Less"}
            </button>
        </>
    );
};


export default ReadMore;
