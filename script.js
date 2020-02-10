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