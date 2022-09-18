var len = document.querySelectorAll(".btn").length;

for(var i=0; i<len; i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var txt = this.innerHTML;
        songPlay(txt);
        animation(txt);
    });
}

function songPlay(txt)
{   
    switch(txt)
    {
        case "First":
            var adio = new Audio("audio/a.mp3");
            adio.play();
            break;

        case "Second":
            var adio = new Audio("audio/b.mp3");
            adio.play();
            break;

        case "Third":
            var adio = new Audio("audio/c.mp3");
            adio.play();
            break;
    }
}

function animation(txt)
{
    var lnk = document.querySelector("." + txt);
    lnk.classList.add("animi");

    setTimeout(function(){
        document.querySelector("." + txt).classList.remove("animi");
    }, 1500);
}