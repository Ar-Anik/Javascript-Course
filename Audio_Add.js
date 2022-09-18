var len = document.querySelectorAll(".btn").length;

for(var i=0; i<len; i++){
    var btn1 = document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var txt = this.innerHTML;

        if(txt == "First")
        {
            var adio = new Audio("audio/a.mp3");
            adio.play();
        }
        else if(txt == "Second")
        {
            var adio = new Audio("audio/b.mp3");
            adio.play();
        }
        else if(txt == "Third")
        {
            var adio = new Audio("audio/c.mp3");
            adio.play();
        }
    });
}
