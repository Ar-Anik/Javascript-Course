document.querySelector("button").addEventListener("click", clickme);

function clickme()
{
    alert("Thank you o_o")
}

var lnk = document.querySelector("h1");

lnk.addEventListener("mouseover", function () {
    lnk.classList.add("csss");
});

lnk.addEventListener("mouseout", function () {
    lnk.classList.remove("csss");
});