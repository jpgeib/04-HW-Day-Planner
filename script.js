//Timeslot DOMs
const nineAM = document.getElementById("timeslot-9AM");
const tenAM = document.getElementById("timeslot-10AM");
const elevenAM = document.getElementById("timeslot-11AM");
const twelvePM = document.getElementById("timeslot-12PM");
const onePM = document.getElementById("timeslot-1PM");
const twoPM = document.getElementById("timeslot-2PM");
const threePM = document.getElementById("timeslot-3PM");
const fourPM = document.getElementById("timeslot-4PM");
const fivePM = document.getElementById("timeslot-5PM");

//Clock function

function clock() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0 ) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    var currentTime = document.getElementById("currentTime").innerText = hour + " : " + min + " : " + sec + " " + midday;
    var t = setTimeout(function() {
        clock();
    }, 1000);
    
};

//Date function

function todaysDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    document.getElementById("currentDay").innertext = month + "/" + day + "/" + year;

};

//Time update function

function updateTime(i) {
    if(i < 10) {
        return "0" + i;
    } else {
        return i;
    };
};

//Call functions

clock();
todaysDate();


//Local Storage for timeslots