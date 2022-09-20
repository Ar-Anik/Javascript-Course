export let txt = "Welcome to Bangladesh";


let name = "Aubdur Rob Anik";
let age = 14;

export {name, age};


export let message = () => {
    let name = "Oshim";
    let age = 18;

    return name + ' is ' + age + ' years old.';
}

export let setText = (txt) => {
    console.log(txt);
}