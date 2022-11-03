const ptag = document.getElementById("display");

function getData() {
    // fetch is asynchronous function.
    fetch("http://127.0.0.1:5500/Fetch_API/data.txt")
        .then((response) => response.text())
        .then((data) => {
            ptag.innerText = data;
        });
}

// function getData() {
//     fetch("http://127.0.0.1:5500/Fetch_API/data.txt")
//         .then((response) => response.text())
//         .then((data) => {
//             console.log("This is message - 2");
//             ptag.innerText = data;
//         });
// }

// console.log("This is message - 1");

