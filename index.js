let hourHand = document.querySelector('.hour')
let minuteHand = document.querySelector('.minute')
let secondHand= document.getElementById('second')

const int = setInterval(() => {
    

let date = new Date();

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();


let secondDeg = 360/60*second
let minuteDeg = 360/60*minute
let hourDeg = 360/12*hour
secondHand.style.transform = `rotate(${secondDeg}deg)`
minuteHand.style.transform = `rotate(${minuteDeg}deg)`
hourHand.style.transform = `rotate(${hourDeg}deg)`

}, 1000);
