const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
console.log(fruits.hasOwnProperty(3));
console.log(fruits.hasOwnProperty(5));

const object = {};
object.name = "Aubdur Rob Anik";
object.id = 18101073;

console.log(object.hasOwnProperty("name"));
console.log(object.hasOwnProperty("roll"));

const example = {};
example.prop = null;
example.props = undefined;

console.log();
console.log(example.hasOwnProperty("prop"));
console.log(example.hasOwnProperty("props"));

const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(buz[name]);
  } else {
    console.log(buz[fog]);
  }
}

// in VS hasOwnProperty

const info = {};
info.name = "DJ Pori";

console.log(info.hasOwnProperty("info"));
console.log(info.hasOwnProperty("toString"));
console.log(info.hasOwnProperty("hasOwnProperty"));

console.log();

console.log("name" in info);
console.log("toString" in info);
console.log("hasOwnProperty" in info);
