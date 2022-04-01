//console.log("hello world")
console.log("welcome");

import("./index.css")
import Icon from "./notes.jpg";

import React from "react";
import ReactDom from "react-dom";

/*
const h1 =  document.createElement("h1");
h1.innerText = "Welcome to Notes";
h1.classList.add("notes");

const myIcon = new Image();
  myIcon.src = Icon;

 document.body.appendChild(myIcon);



document.getElementById("root").appendChild(h1); 
*/

ReactDom.render(
  React.createElement("h1",{className:"notes"}, ["welcome to notes and ",React.createElement("i",null,"life")]),
  document.getElementById("root")
)