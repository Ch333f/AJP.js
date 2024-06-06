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

import adelanke_peter from "../static/assets/img/about/testimonials/adelanke-peters.png";
import aderonke_jerome from "../static/assets/img/about/testimonials/aderonke-jerome.png";
import emmanuel_josiah from "../static/assets/img/about/testimonials/emmanuel-josiah.png";
import cosy_uwak from "../static/assets/img/about/testimonials/cosy-uwak.png";
import adeolu_mustapha from "../static/assets/img/about/testimonials/adeolu-mustapha.png";
import abiodun from "../static/assets/img/about/testimonials/abiodun.png";
import isreal_owonibi from "../static/assets/img/about/testimonials/isreal-owonibi.png";
import emmanuel_segun from "../static/assets/img/about/testimonials/emmanuel-segun.png";


function Testimonials() {
    let testimonials = [
        {
            'img': adelanke_peter,
            'fullname': "Dr. Adelanke Peter Oyintoke", 
            'title': "Membership Director",
            'quote': `I can't say enough great things about OTechCup. They know their stuff and are extremely friendly and easy
                to work with. Thank you OTechCup for your continued tireless efforts in making sure we're productive. And you
                always do it with a smile!!! Many thanks.`,
        },
        {
            'img': aderonke_jerome,
            'fullname': "Mrs. Aderonke Jerome",
            'title': "Entrepreneur",
            'quote': `They are on top of their game, go above and beyond, and leave no stone un-turned when dealing with our 
                many issues. We are a 100% satisfied customer of theirs.`,
        },
        {
            'img': emmanuel_josiah,
            'fullname': "Mr. Emmanuel O. Josiah",
            'title': "MD/CEO",
            'quote': `Always reliable and fast, even after I leave for the day, I can always count on him to get requests done. 
                Thank you!`,
        },
        {
            'img': cosy_uwak,
            'fullname': "Miss. Cosy Uwak",
            'title': "Manager",
            'quote': `It has been a pleasure working with you, and I can only rave over the high standards that you have 
                maintained relative to our company. Thank you for your support.`,
        },
        {
            'img': adeolu_mustapha,
            'fullname': "Dr. Adeolu Mustapha Otayinka",
            'title': "National Co-ordinator",
            'quote': `OTechCup has been exactly what we needed - a true extension of our IT department. They are all in - 
                sleeves rolled up - to tackle each challenge and opportunity as it arises and we could not have gotten through 
                our moves or implementation without them. Thanks for being there for us.`,
        },
        {
            'img': abiodun,
            'fullname': "Miss. A. Abiodun",
            'title': "Entrepreneur",
            'quote': `Very easy experience, I really appreciate the hard work OTechCup team put into our project. It's great to 
                see the entire workflow coming together. Thank you for keeping it painless.`,
        },
        {
            'img': isreal_owonibi,
            'fullname': "Pst. Isreal O. Owonibi",
            'title': "Entrepreneur",
            'quote': `We love OTechCup. Your works are fantastic! The team was courteous, prompt and professional. OTechCup 
                engineers always deliver.`,
        },
        {
            'img': emmanuel_segun,
            'fullname': "Pst. Emmanuel Segun Bamidele",
            'title': "Entrepreneur",
            'quote': `Excellent service. Quick response, efficient troubleshooting and resolution with full explanation of the 
                problem. Gotta love OTechCup!`,
        },
    ];

    return (
        <>
            {
                testimonials.map((testimonial, index) =>
                    <div className="swiper-slide" key={index}>
                        <div className="testimonial-item">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>

                                {testimonial.quote}
                                    
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>

                            <img 
                                src={testimonial.img}
                                className="testimonial-img" 
                                alt=""
                            />
                                
                            <h3>
                                {testimonial.fullname}
                            </h3>
                                
                            <h4>
                                {testimonial.title}
                            </h4>
                        </div>
                    </div>
                )
            }
        </>
    );
};


export default Testimonials;
