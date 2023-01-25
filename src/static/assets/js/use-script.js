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
import { useEffect } from "react";


function useScript(url) {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [url]);
};


export default useScript;
