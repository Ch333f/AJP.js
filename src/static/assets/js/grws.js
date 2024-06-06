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


function getRuleWithSelector(selector) {
    var numSheets = document.styleSheets.length,
        numRules,
        sheetIndex,
        ruleIndex;

    // Search through the style sheets.
    for (sheetIndex = 0; sheetIndex < numSheets; sheetIndex += 1) {
        numRules = document.styleSheets[sheetIndex].cssRules.length;

        for (ruleIndex = 0; ruleIndex < numRules; ruleIndex += 1) {
            if (document.styleSheets[sheetIndex].cssRules[ruleIndex].selectorText === selector) {
                return document.styleSheets[sheetIndex].cssRules[ruleIndex];
            }
        }
    }
    // If we get this far, then the rule doesn't exist.
    // So the return value is undefined.
}


// usage
// var afterSlidingTagRule = getRuleWithSelector('body::before');

// afterSlidingTagRule.style.background = "10px";
// console.debug(afterSlidingTagRule);


export default getRuleWithSelector;
