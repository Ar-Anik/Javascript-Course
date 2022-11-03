const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log('Course enrollment is in process');

    setTimeout(function(){
        if(paymentSuccess) {
            callback();
        } else {
            console.log('Payment Failed');
        }
    }, 2000);
}

function progress(callback) {
    console.log('Course on Progress....');

    setTimeout(function() {
        if(marks >= 80) {
            callback();
        } else {
            console.log('You could not get enough marks to get the certificate');
        }
    }, 3000);
}

function getCertificate() {
    console.log('Preparing Your Certificate.');

    setTimeout(function() {
        console.log('Congrats You got the Certificate');
    }, 1000);
}

// enroll(progress);
// progress(getCertificate);
// getCertificate();

// console.log("\n\n\n");

enroll(function(){
    progress(function() {
        getCertificate();
    });
});
