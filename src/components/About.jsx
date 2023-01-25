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
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../static/assets/css/About.css";
import me from "../static/assets/img/about/me.png";
import WaypointInit from "../static/assets/js/About.js";
import PureCounter from "../static/vendors/purecounterjs-1.5.0/js/purecounter_vanilla.js";
import "../static/vendors/remixicon/remixicon.css";
import "../static/vendors/boxicons/css/boxicons.min.css";
import Specialties from "./Specialties.jsx";
import ReadMore from "./ReadMore.jsx";
import Skills from "./Skills.jsx";
import Interests from "./Interests.jsx";
import Testimonials from "./Testimonials.jsx";


function About() {
    let dismounted = false;
    
    useEffect(function() {
        if (dismounted) {
            return;
        } else {
            AOS.init();
            PureCounter();
            WaypointInit();
        };

        return function cleanup() {
            dismounted = true;
        };
    }, []);
    
    return (
        <section id="about" className="about">
            <div className="about-me container">
                <div className="section-title">
                    <h2>
                        About
                    </h2>

                    <p>
                        Acquaint yourself with me
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-4" 
                            data-aos="fade-right" data-aos-delay="500">
                        <img 
                            src={me}
                            className="img-fluid"
                            alt="adewale-joshua"
                        />
                    </div>
                    
                    <div className="col-lg-8 pt-4 pt-lg-0 content" 
                            data-aos="fade-left" data-aos-delay="500">
                        <h3 className="cd-headline letters scale">
                            <span className="cd-words-wrapper">
                                

                                <Specialties />


                            </span>
                        </h3>
                        
                        <p className="fst-italic">
                            I'm self-motivated in the above specialty with unlimited creativity, innovation and passionate about
                            it, and as well utilizing technology to turn creative ideas into tangible business value and am 
                            therefore always looking for new and innovative ideas to bring to a project. I believe that using 
                            the right digital tools can maximize our ability to serve others and enhance each user's experience. 
                            I'm also a committed life-long learner and eager to implement more efficient algorithms. My passion 
                            motivates me to think creatively and produce results. I give my all to any project and am always 
                            looking ahead to the next task at hand. Successfully completing one project and moving on to the 
                            next one is very exciting for me. I'm passionate about my work and truly enjoy working toward the 
                            next big goal and always looking for the next project to pour my passion into. I know how to set a 
                            goal for myself and achieve it and I always put extra effort into projects, simply due to my passion 
                            for it, am available for any kind of job opportunity for the above specialty and always open to new 
                            directions in the above specialty.
                        </p>

                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        
                                        <strong>
                                            Birthday:
                                        </strong> 
                                        
                                        <span>
                                            16th April
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <i className="bi bi-chevron-right"></i>
                                        
                                        <strong>
                                            Phone Number:
                                        </strong> 
                                        
                                        <span>
                                            +234 705 300 1118
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        
                                        <strong>
                                            Lives In:
                                        </strong> 
                                        
                                        <span>
                                            Kaduna, Nigeria
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        
                                        <strong>
                                            Gender:
                                        </strong>
                                        
                                        <span>
                                            Male
                                        </span>
                                    </li>

                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        
                                        <strong>
                                            Age:
                                        </strong>
                                        
                                        <span>
                                            15yrs in Cyberspace
                                        </span>
                                    </li>
                                    
                                    <li>
                                        <i className="bi bi-chevron-right"></i> 
                                        
                                        <strong>
                                            Freelance:
                                        </strong>
                                        
                                        <span>
                                            Available
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <ReadMore slice={0} type="paragraph">
                            I'm seeking an opportunity to participate in collaborating, in a competitive and inventive 
                            environment while using my background in the above specialty, as well develop my potential in 
                            business development as well as making my knowledge always up to date to keep up with the new 
                            technologies. I'm ambitious with passion for learning new skills, Obsessed with the above specialty,
                            zealous, confident and believe 
                            
                            &#8204;<b className="fst-italic">
                                "There is NO Impossibility"
                            </b>
                            
                            , except I don't want it to be. I utilize my creativity and problem solving skills to work in the 
                            above specialty for small, medium and large businesses that will help further connect with the 
                            world leading market. I'm a creative problem solver with passion for helping others and finding 
                            strenght through their biggest weaknesses. Looking forward to inspire and generate strong bonds 
                            between people and/or companies through my expertise and communication. I passionately combine good 
                            design, technology, and innovation in all my projects, which I like to accompany from the first idea 
                            to release. I have experience in the above specialty and bringing forth a motivated attitude and a 
                            variety of powerful skills. I love doing a lot of things, and one of them is the above specialty. I 
                            will continue to work until I reach my goal. I'm driven to keep learning, be it on my own or with 
                            others. If you have remotely or non-remotely similar interest, send an email my way. I'm still 
                            learning, so chances are I'll be hearing some concepts for the first time, but I'll try my best to 
                            fill in any gaps and get back to you with my thoughts!
                        </ReadMore>


                    </div>
                </div>
            </div>
            
            <div className="counts container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>

                            <span data-purecounter-start="0" 
                                data-purecounter-end="150" 
                                data-purecounter-duration="1"
                                className="purecounter">
                            </span>

                            <p>
                                Happy Clients
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"></i>

                            <span 
                                data-purecounter-start="0" 
                                data-purecounter-end="3"
                                data-purecounter-duration="1"
                                className="purecounter">
                            </span>

                            <p>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-headset"></i>

                            <span 
                                data-purecounter-start="0" 
                                data-purecounter-end="247" 
                                data-purecounter-duration="1"
                                className="purecounter">
                            </span>

                            <p>
                                Hours Of Support
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-journal-code"></i>

                            <span 
                                data-purecounter-start="0" 
                                data-purecounter-end="20" 
                                data-purecounter-duration="1"
                                className="purecounter">
                            </span>

                            <p>
                                Hours Of Coding A Day
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills container">
                <div className="section-title">
                    <h2>
                        Skills
                    </h2>
                </div>

                <div className="row skills-content">


                    <Skills />


                </div>
            </div>

            <div className="interests container">
                <div className="section-title">
                    <h2>
                        Interests
                    </h2>
                </div>

                <div className="row">


                    <Interests />


                </div>
            </div>

            <div className="testimonials container">
                <div className="section-title">
                    <h2>
                        Testimonials
                    </h2>
                </div>

                <div className="testimonials-slider swiper" 
                        data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        

                        <Testimonials />


                    </div>

                    <div className="swiper-pagination"></div>
                </div>

                <div className="owl-carousel testimonials-carousel"></div>
            </div>
        </section>
    );
};


export default About;
