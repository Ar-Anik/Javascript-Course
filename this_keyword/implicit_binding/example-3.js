var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },

    brother: {
      name: "Mr. Jonny Sins",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

var anik = Person("Mr. Anik Sins", 35);
anik.printName();
anik.brother.printName();
