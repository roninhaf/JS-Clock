"use strict";

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = Array.from(document.querySelectorAll('.second-hand,.min-hand,.hour-hand'));

function clockDisplay(){
    
    const getTime = new Date();
    
    const seconds = getTime.getSeconds();
    const secondInDegree = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondInDegree}deg)`;

    const min = getTime.getMinutes();
    const minInDegree = (min / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minInDegree}deg)`;

    const hour = getTime.getHours();
    const hourInDegree = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourInDegree}deg)`;
    
    hand.forEach(hand => hand.style.transform == "rotate(90deg)" ? hand.style.transitionDuration = "0s" : hand.style.transitionDuration = "0.2s");
}

setInterval(clockDisplay,1000);