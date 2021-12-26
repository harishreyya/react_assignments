//console.log("hello world")
console.log("welcome");

import("./index.css")
import Icon from "./notes.jpg"


const h1 =  document.createElement("h1");
h1.innerText = "Welcome to Notes";
h1.classList.add("notes");

const myIcon = new Image();
  myIcon.src = Icon;

 document.body.appendChild(myIcon);



document.getElementById("root").appendChild(h1);