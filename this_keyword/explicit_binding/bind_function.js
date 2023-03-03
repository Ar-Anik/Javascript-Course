var printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2} and ${v3}`);
};

var anik = {
  name: "Aubdur Rob Anik",
  age: 35,
};

let virtue1 = "Handsome";
let virtue2 = "Good Lover";
let virtue3 = "Good Husband";

let namePrint = printName.bind(anik, virtue1, virtue2, virtue3);
namePrint();
