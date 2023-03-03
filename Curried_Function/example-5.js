const multiply = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

const multi = (a) => (b) => (c) => a * b * c;

console.log(multiply(2)(3)(4));
console.log(multi(2)(3)(4));
