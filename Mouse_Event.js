var lnk = document.querySelector("div");

lnk.addEventListener("click", function (event){
    console.log("Clicked is Occured");

    console.log(event.target);
    console.log(event.target.className);
    console.log(event.target.id);
    console.log(event.target.innerHTML);

    console.log(event.target.innerText);
    console.log(event.target.textContent);

});

lnk.addEventListener("dblclick", function (){
    console.log("Double Click is Occured");
});

lnk.addEventListener("mousedown", function (){
    console.log("MouseDown is Occured");
});

lnk.addEventListener("mouseup", function (){
    console.log("MouseUp is Occured");
});

lnk.addEventListener("mouseenter", function () {
    console.log("MouseEnter is Occured");
});

lnk.addEventListener("mouseleave", function (){
    console.log("MouseLeave is Occured");
})

lnk.addEventListener("mouseover", function (){
    console.log("MouseOver is Occured");
});

lnk.addEventListener("mousemove", function (event){
    console.log("X-axis : " + event.offsetX, " Y-axis : " + event.offsetY);
});

var blnk = document.querySelectorAll(".btn");

Array.from(blnk).map((btn) => {
    btn.addEventListener("click", function () {
        var txt = this.innerHTML;
        console.log(txt);
    });
});