window.addEventListener("load", function() {
    console.log("Load");
});

window.addEventListener("unload", function() {
    console.log("Unload");
});

window.addEventListener("scroll", function() {
    console.log("Scroll");
});

window.addEventListener("resize", function () {
    var height = window.outerHeight;
    var width = window.outerWidth;

    console.log("Height : ", height, " Width : ", width);
});

var lnk = document.querySelector("details");

lnk.addEventListener("toggle", function (event) {
    if(event.target.open)
        console.log("Open")
});
