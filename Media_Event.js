var lnk = document.querySelector("video");

lnk.addEventListener("canplay", function () {
    console.log("Canplay");
});

lnk.addEventListener("play", function () {
    console.log("Play");
})

lnk.addEventListener("playing", function () {
    console.log("Playing");
});

lnk.addEventListener("pause", function () {
    console.log("Pause");
});

lnk.addEventListener("ended", function () {
    console.log("Video End");
});

lnk.addEventListener("volumechange", function () {
    console.log("Volume Change");
});