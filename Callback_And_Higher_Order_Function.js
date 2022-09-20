// function square(x){
//     console.log(`Square of ${x} : ${x*x}`);
// }

// const y = square;
// y(5);

// function higherOrderfunction(num, callback){
//     callback(num);
// }

// higherOrderfunction(6, square);

const taskOne = (callback) => {
    console.log("Task-1");
    callback();
};

const taskTwo = (callback) => {
    setTimeout(function(){
        console.log("Task-2");
        callback();
    }, 2000);
};

const taskThree = (callback) => {
    console.log("Task-3");
    callback();
};

const taskFour = (callback) => {
    console.log("Task-4");
    callback();
};

const taskFive = (callback) => {
    console.log("Task-5");
    callback();
};

// taskOne(function f1() {
//     taskTwo(function f2() {
//         taskThree(function f3() {
//             taskFour(function f4() {
//                 taskFive();
//             });
//         });
//     });
// });

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});

console.log("Button Start");
document.querySelector("button").addEventListener("click", () => {
    console.log("You click a button");
});
console.log("Button End")