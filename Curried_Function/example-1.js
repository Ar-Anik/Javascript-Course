function multiple(a, b, c) {
  return a * b * c;
}

function curriedMultiple(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(curriedMultiple(4)(5)(6));

let step1 = curriedMultiple(4);
let step2 = step1(5);
let step3 = step2(6);

console.log(step3);

console.log(step1);
console.log(step2);
