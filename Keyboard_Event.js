var txt = document.querySelector("textarea");

txt.addEventListener("keydown", function (){
    console.log("KeyDown");

    // if(event.repeat)
    // {
    //     alert("Don't Repeat");
    // }
});

txt.addEventListener("keypress", function (event){
    console.log("KeyPress");
    // console.log(event.code);
    // console.log(event.shiftKey);
    // console.log(event.key);

    // if(event.shiftKey)
    // {
    //     console.log("Shift + " + event.key);
    // }
});

txt.addEventListener("keyup", function(){
    console.log("KeyUp");
});

