alert("Hello\nHow are you?");

function deleteSomething()
{
    var value = confirm("Do you want ot Delete?");
    
    if(value){
        console.log("Deleted");
    }else{
        console.log("Not Deleted");
    }
}

deleteSomething();

function welcomemsg()
{
    var h1 = document.createElement("h1");
    var txt;

    var name = prompt("Enter Your Name : ");

    if(name == null || name == "")
    {
        txt = "No Name Found";
    }else{
        txt = "Welcome " + name;
    }

    var txtNode = document.createTextNode(txt);
    h1.appendChild(txtNode);

    document.body.appendChild(h1);
}

welcomemsg();

