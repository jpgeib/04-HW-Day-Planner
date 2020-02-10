//Clock function

function clock() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("currentTime").innerText = hour + " : " + min + " : " + sec;
    var t = setTimeout(function() {
        clock();
    }, 1000);
};

//Time update function

function updateTime(i) {
    if(i < 10) {
        return "0" + i;
    } else {
        return i;
    };
};

clock();