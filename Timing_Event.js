setTimeout(() => {
    console.log("Hi");
}, 3000);

setTimeout(name, 2000);

function name()
{
    console.log("University Of Asia Pacific");
}

var lnk = document.querySelector("button");
var ptag = document.querySelector("p");

lnk.addEventListener("click", function (){
    ptag.textContent = "User Registration Successfully";

    setTimeout(() => {
        ptag.textContent = "";
    }, 2000);
});

var btn = document.querySelector(".cls");
var para = document.querySelector(".pcls");

btn.addEventListener("click", function(){
    var cnt = 1;
    para.textContent = cnt;

    setInterval(() => {
        cnt++;
        para.textContent = cnt;
    }, 1000);
});
