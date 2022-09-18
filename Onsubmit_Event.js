var form = document.querySelector("form");
var name = form.querySelector("div #name");
var email = form.querySelector("div #email");
var password = form .querySelector("div #password");

form.addEventListener("submit", sbmtevent);

function sbmtevent(event)
{
    event.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

    var info = {
        name : event.target.name.value,
        email : email.value,
        password : password.value,
    }

    console.log(info);
    name.value = "";
    email.value = "";
    password.value = "";
}