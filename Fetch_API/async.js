const ptag = document.getElementById("display");

async function getData() {
    const response = await fetch("http://127.0.0.1:5500/Fetch_API/data.txt");
    const data = await response.text();

    console.log(response);
    ptag.innerText = data;
}
