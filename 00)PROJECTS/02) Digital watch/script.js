"use strict";
function clock() {
    let Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let period = document.getElementById("ampm");
    let day = document.getElementById("day");
    let date = document.getElementById("date");
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let days = time.getDay();
    let dates = time.getDate();
    let months = time.getMonth();
    let years = time.getFullYear();
    day.innerHTML = Days[days];
    date.innerHTML = Months[months] + " " + dates + "," + years;
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs == 0) {
        hrs = 12;
    }
    let ampm = hrs <= 12 ? "PM" : "AM";
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    period.innerHTML = ampm;
}
setInterval(clock, 1000);
