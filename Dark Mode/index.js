function darkmode(){
    var element = document.body;
    
    element.classList.toggle("dark-mode");

    var theme;

    if(element.classList.contains("dark-mode"))
    {
        console.log("Dark-mode");
        theme = "Dark";
    }
    else
    {
        console.log("White-mode");
        theme = "White";
    }

    var vlu = JSON.stringify(theme);
    localStorage.setItem("theme", vlu);
}

var getTheme = JSON.parse(localStorage.getItem("theme"));

if(getTheme === "Dark")
{
    document.body.classList = "dark-mode";
}
