////////////////////////////////////////
var inpt = document.querySelector("input[name=name]");
inpt.addEventListener("change", changeHandler);

function changeHandler(event)
{
    console.log(event);
    console.log(event.type);

    console.log(event.target);
    console.log(event.target.value);

    console.log(event.target.className);
    console.log(event.target.id);
}

////////////////////////////////////////////
var ckBox = document.querySelectorAll("input[name=language]");

Array.from(ckBox).map((emnt) => {
    emnt.addEventListener("change", ckBoxhandler);
});

function ckBoxhandler(event)
{
    if(event.target.checked)
        console.log(event.target.value);
}

/////////////////////////////////////////////
var dprt = document.querySelector("select[name=department]");

dprt.addEventListener("change", barhandler);

function barhandler(event)
{
    console.log(event.target.value);
}