var div = document.querySelector("div");
var p = document.querySelector("p");

p.addEventListener("dragstart", function (event){
    //console.log(event.target);
    event.dataTransfer.setData("Text", event.target.id);
});

div.addEventListener("dragover", function (event){
    event.preventDefault();
});

div.addEventListener("drop", function (event){
    var id = event.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(id));
});
