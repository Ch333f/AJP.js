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

import "../static/assets/css/Services.css";


function Services() {
    let services = [
        {
            'icon': "bi bi-gear",
            'name': "Technical Support",
            'description': `Troubleshoot, Manage, Maintain, Repair IT Systems/Faults, Diagnose, Resolving Network Issues, 
                Installing and Configuring Hardware/Software, SEO Optimize, Collaborate, Testing and Evaluating New 
                Technologies.`,
        },
        {
            'icon': "bi bi-people",
            'name': "Coaching",
            'description': `We focus on helping individual "learn what it takes" for him or her to improve existing
                Capabilities, Understand and Eliminate Barriers to more Effective Performance, set meaningful Goals and be 
                Accountable for his or her Results in any of our Specialties.`,
        },
        {
            'icon': "bi bi-router",
            'name': "Digital Marketing",
            'description': `We use digital channels/platforms to reach potential customers, build/boost brand awareness, promote 
                products/services and managing all the marketing campaigns, with the help of our unique combination of planning, 
                creativity and strategy.`,
        },
        {
            'icon': "bi bi-hdd-rack",
            'name': "Hosting",
            'description': `Web Apps, Mobile Apps, Desktop Apps, SaaS Apps, Apps/Software Maintenance, Management, Support and 
                Deployment, making sure the Server is up and running, Testing and Debugging.`,
        },
        {
            'icon': "bi bi-graph-up-arrow",
            'name': "Product Ownership",
            'description': `Develop the Product Features and Goals, Serve as the Liaison between Business Stakeholders, Team 
                Members and End Users, Optimize Value Delivery and Collaborating with the Development Team to achieve the 
                Product Goal.`,
        },
        {
            'icon': "bi bi-brush",
            'name': "Designing",
            'description': `Web/Mobile App UI/UX, Logos, Business Cards, ID Cards, Posters, Flyers, Brochures, Banners, Books,
                Magazines, Newspapers, Product Packaging, Billboards, Invitations and other Marketing Materials/Publications.`,
        },
        {
            'icon': "bi bi-camera-reels",
            'name': "Video Editing",
            'description': `Cutting or Splicing Segments, Re-sequencing Clips, Adding Transitions, Color Grading, Sound Mixing, 
                Animation, Implementing Special Effects, Formatting, and many more.`,
        },
        {
            'icon': "bi bi-journal-plus", 
            'name': "And Many More", 
            'description': `What Job/Task/Project did you want us to work on in any area of our specialties or something 
                different? Make it known to us and we'll get it done for you ASAP.`,
        },
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>

                    <p>My Services</p>
                </div>

                <div className="row">

    
                    {
                        services.map((service, index) =>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4" 
                                    key={index}>
                                <div className="icon-box">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    
                                    <h4>
                                        {service.name}
                                    </h4>
                                    
                                    <p>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </section>
    );
};


export default Services;
