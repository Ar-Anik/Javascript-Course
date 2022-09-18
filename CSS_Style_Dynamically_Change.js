function add()
{
    var lnk = document.querySelector("#fristcls");
    lnk.style.color = "blue";
    lnk.style.fontSize = "3rem";
    lnk.style.fontWeight = "bold";
    lnk.style.fontStyle = "italic";
    lnk.style.textAlign = "center";
}

function remove()
{
    var lnk = document.querySelector("#fristcls");
    lnk.style.color = "black";
    lnk.style.fontSize = "1rem";
    lnk.style.fontWeight = "normal";
    lnk.style.fontStyle = "normal";
    lnk.style.textAlign = "left";
}

var lnk = document.querySelector(".cls");

function plus()
{
    lnk.classList.add("csss");
}

function minus()
{
    lnk.classList.remove("csss");
}