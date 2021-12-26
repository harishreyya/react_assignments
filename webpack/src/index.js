//console.log("hello world")
console.log("welcome");

import("./index.css")


const h1 =  document.createElement("h1");
h1.innerText = "Welcome to Notes";
h1.classList.add("notes")

document.getElementById("root").appendChild(h1);