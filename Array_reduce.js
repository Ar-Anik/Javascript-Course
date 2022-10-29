// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var numbers = [1, 2, 3, 4, 5, 6];

var sum = numbers.reduce((previusValue, currentValue) => {
    return previusValue + currentValue;
}, 0); // intial previsuValue = 0 set

console.log("Summation : ",sum);


const array = [200, 50, 25, 5];

function Subtraction(total, num){
    return total - num;
}

var result = array.reduce(Subtraction);

console.log(result);


let arr = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num){
    return total + Math.round(num);
}

var rs = arr.reduce(getSum, 0);

console.log(rs);
