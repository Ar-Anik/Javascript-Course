document.addEventListener("keypress", function (event) {
    var txt = event.key;
    song(txt);
    animation(txt);
});

function song(txt)
{
    switch(txt)
    {
        case "a":
            var adio = new Audio("audio/a.mp3");
            adio.play();
            break;

        case "b":
            var adio = new Audio("audio/b.mp3");
            adio.play();
            break;

        case "c":
            var adio = new Audio("audio/c.mp3");
            adio.play();
            break;
    }
}

function animation(txt)
{
    document.querySelector("." + txt).classList.add("animi");

    setTimeout(function (){
        document.querySelector("." + txt).classList.remove("animi");
    }, 1500);

}

var cnt = 0;
document.querySelector("textarea").addEventListener("keypress", function (event){
    cnt = cnt + 1;
    document.querySelector("p").innerHTML = "You Press " + cnt + " Character";
});