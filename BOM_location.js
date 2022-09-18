// Window Loaction Object

// console.log(window);
// console.log(window.document);
// console.log(window.location);

// href
// console.log(location.href);

// protocol
// console.log(location.protocol);

// hostname
// console.log(location.hostname);

// port
// console.log(location.port);

// pathname
// console.log(location.pathname);

var ptag = document.querySelector("div");

ptag.children[0].textContent = "href : " + location.href;

ptag.children[1].textContent = "protocol : " + location.protocol;

ptag.children[2].textContent = "hostname : " + location.hostname;

ptag.children[3].textContent = "port : " + location.port;

ptag.children[4].textContent = "pathname : " + location.pathname;

var lnk = document.querySelector("button");

lnk.addEventListener("click", function (){
    location.assign("http://aranik43.blogspot.com/");
});


