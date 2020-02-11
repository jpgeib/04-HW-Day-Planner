//Timeslot DOMs
const nineAM = document.getElementById("9");
const tenAM = document.getElementById("10");
const elevenAM = document.getElementById("11");
const twelvePM = document.getElementById("12");
const onePM = document.getElementById("1");
const twoPM = document.getElementById("2");
const threePM = document.getElementById("3");
const fourPM = document.getElementById("4");
const fivePM = document.getElementById("5");
const submitBtn = document.getElementsByClassName("btn btn-primary btn-block");

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
//Local Storage for timeslots
function saveInput() {
    if(typeof(Storage) !== "undefined") {

    }
}

//Time 

//Call functions

clock();
todaysDate();


//Event Listeners