function discount(disc) {
  return (price) => {
    return price - price * disc;
  };
}

let tenPercentDiscount = discount(0.1);
let twentyPercentDiscount = discount(0.2);

let custormer1 = tenPercentDiscount(600);
let custormer2 = tenPercentDiscount(700);
let custormer3 = tenPercentDiscount(800);

let custormer4 = twentyPercentDiscount(900);

console.log(custormer1);
console.log(custormer2);
console.log(custormer3);

console.log(custormer4);
