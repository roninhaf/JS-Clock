"use strict";

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function clockDisplay(){
    
    const getTime = new Date();
    
    const seconds = getTime.getSeconds();
    console.log(seconds);
    const secondInDegree = (seconds/60)*360+90;
    secondHand.style.transform = `rotate(${secondInDegree}deg)`;

    const min = getTime.getMinutes();
    console.log(min);
    const minInDegree = (min/60)*360+90;
    minHand.style.transform = `rotate(${minInDegree}deg)`;

    const hour = getTime.getHours();
    console.log(hour);
    const hourInDegree = (hour/12)*360+90;
    hourHand.style.transform = `rotate(${hourInDegree}deg)`;
}

setInterval(clockDisplay,1000);