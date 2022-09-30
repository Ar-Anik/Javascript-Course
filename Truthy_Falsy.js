// Falsy = False, 0, "", Null, Undefined, NaN;
// all other are Truthy

let vlu = "test";

if(vlu)
{
    console.log("this is truthy");
}
else
{
    console.log("this is falsy");
}

let a = [];

if(a)
{
    console.log("this is truthy");
}
else
{
    console.log("this is falsy");
}

let b = "";

if(b)
{
    console.log("this is truthy");
}
else
{
    console.log("this is falsy");
}