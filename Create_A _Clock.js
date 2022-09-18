var btn = document.querySelector("button");
var plnk = document.querySelector("p");

btn.addEventListener("click", startClock);

function startClock()
{
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(minute < 10)
        minute = "0" + minute;
    if(second < 10)
        second = "0" + second;

    var time = hour + " : " + minute + " : " + second;
    plnk.textContent = time;

    setInterval(startClock, 1000);
}
