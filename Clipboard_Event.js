var lnk = document.querySelector("input");

lnk.addEventListener("copy", function () {
    // console.log("Copy Event is Occured");
    document.querySelector("p").innerHTML = "Copy Event is Occured";
});

lnk.addEventListener("cut", function () {
    // console.log("Cut Event is Occured");
    document.querySelector("p").innerHTML = "Cut Event is Occured";
});

lnk.addEventListener("paste", function () {
    // console.log("Paste Event is Occured");
    document.querySelector("p").innerHTML = "Paste Event is Occured";
});