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
import { Link } from "react-router-dom";

import PortfolioDB from "../Portfolio.json";
import "../static/assets/css/Portfolio.css";


function Portfolio() {
    let works = PortfolioDB;
    
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2>
                        Portfolio
                    </h2>

                    <p>
                        My Works
                    </p>
                </div>

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">
                                All
                            </li>

                            <li data-filter=".filter-web">
                                Web
                            </li>
                            
                            <li data-filter=".filter-app">
                                App
                            </li>

                            <li data-filter=".filter-logo">
                                Logo
                            </li>

                            <li data-filter=".filter-video">
                                Video
                            </li>

                            <li data-filter=".filter-art">
                                Art
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-container">


                    {
                        works.map((work, index) =>
                            <div className={
                                        "col-lg-4 col-md-6 portfolio-item filter-" 
                                        + work.category.toLowerCase()
                                    }
                                    key={index}>
                                <div className="portfolio-wrap">
                                    <img 
                                        src={
                                            require(
                                                "../static/assets/img/portfolio/" 
                                                + work.header_img
                                            )
                                        }
                                        className="img-fluid"
                                        alt={work.name}
                                    />
                                    
                                    <div className="portfolio-info">
                                        <h4>
                                            {work.name}
                                        </h4>
                                        
                                        <p>
                                            {work.category}
                                        </p>
                                        
                                        <div className="portfolio-links">
                                            <a href={
                                                        require(
                                                            "../static/assets/img/portfolio/" 
                                                            + work.header_img
                                                        )
                                                    }
                                                    title={work.name}
                                                    data-gallery="portfolioGallery"
                                                    className="portfolio-lightbox">
                                                <i className="bx bx-plus"></i>
                                            </a>
                                            
                                            <Link to={"/portfolio/portfolio-detail/" + work.slug}
                                                    title="Portfolio Detail"
                                                    data-gallery="portfolioDetailsGallery"
                                                    data-glightbox="type: external"
                                                    className="portfolio-details-lightbox">
                                                <i className="bx bx-link"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    
                </div>
            </div>
        </section>
    );
};


export default Portfolio;
