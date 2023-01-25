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


// Canvas animation with mouse move
var canvas, 
    gc;
var color = [
    "#f00", 
    "#ffa500", 
    "#ffff00", 
    "#00FF00", 
    "#0000ff", 
    "#4b0082", 
    "#ee82ee",
];
var mouse = {
    x: 0,
    y: 0,
};
var radius = 50;
var circle = [];
var radiusLineWidth = 2;


function getGraphicContext() {
    canvas = document.getElementById("canvas");
    gc = canvas.getContext("2d");
};


function fitCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};


// function random(min, max) { transparent
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };


class Circle {
    constructor(x, y, radius, radiusLineWidth, color) {
        this.radius = Math.floor(Math.random() * radius + 1);
        this.color = color;
        this.radiusLineWidth = radiusLineWidth;
        this.dx = (Math.random() - 0.5) * 5;
        this.dy = (Math.random() - 0.5) * 5;
        this.pos = {
            x: x,
            y: y,
        };
    };

    update() {
        this.pos.x += this.dx;
        this.pos.y += this.dy;

        if (this.pos.x + this.radius > canvas.width
                || this.pos.x - this.radius < 0) {
            this.dx = -this.dx;
        };
        
        if (this.pos.y + radius > canvas.height || this.pos.y - radius < 0) {
            this.dy = -this.dy;
        };

        if (this.pos.x + this.radius * 2 > mouse.x && mouse.x !== 0) {
            this.dx -= 1;
        };

        if (this.pos.x < mouse.x - this.radius * 2 && mouse.x !== 0) {
            this.dx += 1.5;
        };

        if (this.dx > 5) {
            this.dx -= 1;
        };

        if (this.pos.y + this.radius * 2 > mouse.y + this.radius * 1 
                && mouse.y !== 0) {
            this.dy -= 1;
        };

        if (this.pos.y < mouse.y - this.radius * 2 && mouse.y !== 0) {
            this.dy += 1.5;
        };

        if (this.dy > 5) {
            this.dy -= 1;
        };
    };

    render() {
        gc.beginPath();
        gc.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
        
        gc.strokeStyle = this.color;
        gc.lineWidth = this.radiusLineWidth;

        gc.stroke();
    };

    initCircle() {
        this.pos = {
            // x : Math.random() * (canvas.width - this.radius * 2) + this.radius,
            // y : Math.random() * (canvas.height - this.radius * 2) + this.radius
        };
    };
};


function animationInit() {
    for (var i = 0; i < 10; i++) {
        var randomX = Math.random() * (canvas.width - radius * 1) + radius;
        var randomY = Math.random() * (canvas.height - radius * 1) + radius;

        circle.push(
            new Circle(
                randomX, randomY, radius, radiusLineWidth,
                color[Math.floor(Math.random() * color.length)],
            )
        );
    };
};


function loop() {
    gc.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < circle.length; i++) {
        circle[i].update();
        circle[i].render();
    };

    requestAnimationFrame(loop);
};


function cammInit() {
    window.addEventListener("mousemove", function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    
    getGraphicContext();
    fitCanvas();
    animationInit();
    loop();
};


export default cammInit;
