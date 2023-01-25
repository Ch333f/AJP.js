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

import ReadMore from "./ReadMore.jsx";


function Skills() {
    let skills = [
        {'name': "Coding", 'level': 85},
        {'name': "Python", 'level': 75},
        {'name': "Web3", 'level': 50},
        {'name': "Solidity", 'level': 50},
        {'name': "Hacking", 'level': 50},
        {'name': "Techprenurship", 'level': 55},
        {'name': "Product Ownership", 'level': 95},
        {'name': "Digital Marketing", 'level': 95},
        {'name': "HTML", 'level': 75},
        {'name': "CSS", 'level': 75},
        {'name': "JavaScript", 'level': 75},
        {'name': "Bootstrap", 'level': 55},
        {'name': "JQuery", 'level': 50},
        {'name': "Tailwind CSS", 'level': 35},
        {'name': "Sass", 'level': 50},
        {'name': "NodeJS", 'level': 20},
        {'name': "ReactJS", 'level': 50},
        {'name': "React Native", 'level': 20},
        {'name': "MySQL", 'level': 55},
        {'name': "PostgresSQL", 'level': 20},
        {'name': "MongoDB", 'level': 20},
        {'name': "SQLite", 'level': 55},
        {'name': "SQLAlchemy", 'level': 55},
        {'name': "Jest", 'level': 20},
        {'name': "ElectronJS", 'level': 20},
        {'name': "Johnny-Five", 'level': 20},
        {'name': "GraphQL", 'level': 20},
        {'name': "Cypress", 'level': 20},
        {'name': "Docker", 'level': 20},
        {'name': "Kubernetes", 'level': 20},
        {'name': "Matplotlib", 'level': 25},
        {'name': "Scikit-learn", 'level': 25},
        {'name': "TensorFlow", 'level': 25},
        {'name': "Socket.IO", 'level': 20},
        {'name': "PHP", 'level': 50},
        {'name': "Photoshop", 'level': 25},
        {'name': "CorelDRAW", 'level': 85},
        {'name': "Adobe Illustrator", 'level': 25},
        {'name': "Adobe Premiere Pro", 'level': 50},
        {'name': "Adobe After Effects", 'level': 25},
        {'name': "Adobe XD", 'level': 25},
        {'name': "REST API", 'level': 50},
        {'name': "Flask", 'level': 50},
        {'name': "Django", 'level': 35},
        {'name': "Linux", 'level': 20},
        {'name': "Unix", 'level': 20},
        {'name': "Windows", 'level': 65},
        {'name': "GIT", 'level': 55},
        {'name': "CI CD", 'level': 20},
        {'name': "Figma", 'level': 20},
        {'name': "Pandas", 'level': 25},
        {'name': "NumPy", 'level': 25},
        {'name': "TypeScript", 'level': 35},
        {'name': "Postman", 'level': 50},
        {'name': "SaaS", 'level': 95},
        {'name': "WordPress", 'level': 35},
        {'name': "Webpack", 'level': 25},
        {'name': "AJAX", 'level': 50},
        {'name': "GulpJS", 'level': 20},
        {'name': "Yarn", 'level': 20},
        {'name': "NPM", 'level': 20},
        {'name': "PIP", 'level': 20},
        {'name': "Java", 'level': 20},
        {'name': "JavaFX", 'level': 20},
        {'name': "JavaSwing", 'level': 20},
    ];

    return (
        <ReadMore slice={10} type="division">
            {
                skills.map((skill, index) =>
                    <div className="col-lg-6" key={index}>
                        <div className="progress">
                            <span className="skill">
                                {skill.name}

                                <i className="val">
                                    {skill.level}%
                                </i>
                            </span>

                            <div className="progress-bar-wrap">
                                <div className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={skill.level}
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </ReadMore>
    );
};


export default Skills;
