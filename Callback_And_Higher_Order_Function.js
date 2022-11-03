// function square(x){
//     console.log(`Square of ${x} : ${x*x}`);
// }

// const y = square;
// y(5);

// function higherOrderfunction(num, callback){
//     callback(num);
// }

// higherOrderfunction(6, square);

function prnt(value){
    console.log(value);
}

function calculator(num1, num2, callback){
    var sum = num1+num2;

    callback(sum);
}

calculator(5, 6, prnt);

const task1 = (callback) => {
    console.log("task 1");
    callback();
};

const task2 = (callback) => {
    setTimeout(function(){
        console.log("Task-2");
        callback();
    }, 2000);
};

const task3 = (callback) => {
    setTimeout(function(){
        console.log("Task-3");
        callback();
    }, 1000);
}

const task4 = (callback) => {
    setTimeout(function(){
        console.log("Task-4");
        callback();
    }, 3000);
}

const task5 = (callback) => {
    console.log("Task-5");
}


task1(function(){
    task2(function() {
        task3(function(){
            task4(function(){
                task5();
            });
        });
    });
});


task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5();
            });
        });
    });
});


console.log("Button Start");
document.querySelector("button").addEventListener("click", () => {
    console.log("You click a button");
});
console.log("Button End")