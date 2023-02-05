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
import { useParams } from "react-router-dom";

import PortfolioDB from "../Portfolio.json";
import "../static/assets/css/PortfolioDetail.css";


function PortfolioDetail() {
    const { slug } = useParams();

    let works = PortfolioDB;
    let work = works.find(function (work) {
        return work.slug === slug
    });

    if (work) {
        return (
            <div id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="portfolio-title">
                                Portfolio Detail
                            </h2>

                            <div className="portfolio-details-slider swiper">
                                <div className="swiper-wrapper align-items-center">


                                    {
                                        work.previews.length !== 0
                                            ? work.previews.map(
                                                function (preview, index) {
                                                    return (
                                                        <div className="swiper-slide"
                                                            key={index}>
                                                            <img
                                                                src={
                                                                    require(
                                                                        "../static/assets/img/portfolio/"
                                                                        + preview
                                                                    )
                                                                }
                                                                alt={work.name}
                                                            />
                                                        </div>
                                                    );
                                                })
                                            : <div className="swiper-slide">
                                                <img
                                                    src={
                                                        require(
                                                            "../static/assets/img/portfolio/"
                                                            + work.header_img
                                                        )
                                                    }
                                                    alt={work.name}
                                                />
                                            </div>
                                    }


                                </div>

                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="col-lg-4 portfolio-info">
                            <h3>
                                Project Information
                            </h3>

                            <ul>
                                <li>
                                    <strong>
                                        Category
                                    </strong>

                                    : {work.category}
                                </li>

                                <li>
                                    <strong>
                                        Client
                                    </strong>

                                    : {work.client}
                                </li>

                                <li>
                                    <strong>
                                        Date
                                    </strong>

                                    : {work.date}
                                </li>

                                <li>
                                    <strong>
                                        URL
                                    </strong>

                                    :

                                    &#8204;<a href={"https://" + work.url}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {work.url}
                                    </a>
                                </li>
                            </ul>

                            <p>
                                {work.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        // return;
    };
};


export default PortfolioDetail;
