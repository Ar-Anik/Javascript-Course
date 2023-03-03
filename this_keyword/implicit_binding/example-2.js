var printNameFunction = function (obj) {
  obj.printName = function () {
    console.log(this.name);
  };
};

var anik = {
  name: "Anik",
  age: 14,
};

var sourav = {
  name: "Sourav",
  age: 22,
};

printNameFunction(anik);
printNameFunction(sourav);

anik.printName();
sourav.printName();
