const Status = true;

console.log("Task-1");

const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(Status) {
            resolve('Task-2');
        } else {
            reject('Faild');
        }
    }, 2000);
});


promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(error){
        console.log(error);
    })

console.log("Task-3");
