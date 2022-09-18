document.querySelector("button").addEventListener("click", function (event) {
    var value = document.querySelector("input").value;

    try{
        if(value < 5)
        {
            throw "input is less than five";
        }
        else if(value > 10)
        {
            throw "input is greater than ten";
        }
        else
        {
            console.log(value);
        }
    }catch(error){
        console.log(error);
    }
});