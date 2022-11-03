const paymentSuccess = true;
const marks = 70;

function enroll() {
    console.log("Course Enrollment is Progress..");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess)
                resolve();
            else
                reject("Please Complete Your Payment First..");
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log("Course is Progress..");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(marks >= 80)
                resolve();
            else
                reject("You have not Enough marks for get The Certificate.");
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log("Your Certificate is Prepared...");

    const promise =  new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Congratulation you get the certificate.");
        }, 3000);
    });

    return promise;
}

async function Course() {
    try{
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);

    } catch(error){
        console.log(error);
    }
}

Course();
