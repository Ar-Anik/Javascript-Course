const paymentSuccess = true;
const marks = 80;

function enroll() {
    console.log('Course Enrollment is in Progress');

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess)
            {
                resolve();
            } else {
                reject('Payment Failed');
            }
        }, 2000);
    });

    console.log("Enroll Promise : ", promise);
    return promise;
}

function progress() {
    console.log('Course On Progress.... ');

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(marks >= 80){
                resolve();
            } else {
                reject('You Could not get Enough marks to get the certificate');
            }
        }, 3000);
    });

    console.log("Progress Promise : ", promise);
    return promise;
}

function getCertificate() {
    console.log("Preparing Your Certificate..");

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrats! You got the Certificate");
        }, 1000);
    });

    console.log("GetCertificate Promise : ", promise);
    return promise;
}

async function course() {
    try{
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);
    } catch(error) {
        console.log(error);
    }
}

course();
