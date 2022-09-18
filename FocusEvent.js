var inpt = document.querySelector("input");

inpt.addEventListener("blur", function (event){
    // console.log("Blur is Occured");
    // inpt.style.backgroundColor = "transparent";
    // inpt.style.padding = 0;

    // console.log(event.target.value);
    inpt.value = event.target.value.toUpperCase();
});

inpt.addEventListener("focus", function (){
    // console.log("Foucs is Occured");
    inpt.style.backgroundColor = "tomato";
    inpt.style.padding = "15px";
});

inpt.addEventListener("focusin", function (){
    console.log("Focus In is Occured");
});

inpt.addEventListener("focusout", function (){
    console.log("Focus Out is Occured");
});