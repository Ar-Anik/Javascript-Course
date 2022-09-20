console.log("Promise Start");

const promise1 = new Promise((resolve, reject) => {
    let promise = true;

    if(promise)
    {
        resolve("Solve Promise 1");
    }
    else
    {
        reject("Reject Promise 1");
    }
});

console.log(promise1);

promise1
    .then((reslv) => {
        console.log(reslv);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("Promise End");

const promise2 = new Promise((resolve, reject) => {
    let promise = false;

    if(promise)
    {
        resolve("Solve Promise 2");
    }
    else
    {
        reject("Reject Promise 2");
    }
});

console.log(promise2);

promise2
.then((reslv) => {
    console.log(reslv);
})
.catch((error) => {
    console.log(error);
});


//////////////////////////// ////////
Promise.all([promise1, promise2])
.then(([reslv1, reslv2]) => {
    console.log(reslv1, reslv2);
})
.catch(([rejt1, rejt2]) => {
    console.log(rejt1, rejt2);
});
/////////////////////////////////////

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise-3");
    }, 2000);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise-4");
    }, 1000);
});

Promise.race([promise3, promise4]).then((reslv) => {
    console.log("reslv");
}).catch((rejt) => {
    console.log(rejt);
});