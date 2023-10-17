console.log("\n");

/*ES6 Module*/
/*A file of reusable code that can be imported*/
import { EarthsGravity, double, gravityMulitpler } from "./util.js";

console.log(`Earths gravity : ${EarthsGravity}m/s²`);
console.log(`Earths gravity doubled : ${double(EarthsGravity)}m/s²`);
console.log(`Earth gravity x5 : ${gravityMulitpler(5, EarthsGravity)}m/s²`);

/*promise*/
/*An object representing the eventual 
completion or failure of an asynchronous operation*/

/*pending a result*/
const promise1 = new Promise((resolve, reject) => {
  let fileLoaded = true;

  if (fileLoaded) {
    resolve("\n File A loaded");
  } else {
    reject("\n File A missing");
  }
});
console.log("\n");

/*fulfilling a result*/
promise1
  .then((value) => {
    /*If true file will be recognised as loaded*/
    console.log(value);
  }) /*If false file will pass reject through as an error*/
  .catch((error) => console.log(error));

const promise2 = new Promise((resolve) => setTimeout(resolve, 2000));
promise2.then(() => console.log("\n Promise 1 fulfilled."));

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
wait(2500).then(() => console.log("\n Promise 2 fulfilled."));

/*async*/
/*makes a function return a promise*/
async function loadFile() {
  let fileLoaded = false;
  if (fileLoaded) {
    return "\n File B loaded";
  } else {
    /*throw will raise an error*/
    throw "\n File B missing";
  }
}

/*this section of code can be removed if
await is used along side the async fucntion*/
/*will give identical result as code below*/
loadFile()
  .then((value) => {
    console.log(value);
  }) /*catch will catch the error*/
  .catch((error) => console.log(error));
console.log("\n");

/*Await*/
/*makes an async function wait for a promise 
to finish before continuing*/
/*Await must be used within an async function*/
async function startProcess() {
  try {
    let checker = await loadFile();
    console.log(checker);
  } catch (error) {
    console.log(error);
  }
}

startProcess();

/*DOM*/
/*Document Object Model (API)*/
/*An interface for changing the content of a page*/
console.log(document);
document.title = "JS-Cheatsheet";
console.log(document.title);
console.log(document.URL);
document.body.style.backgroundColor = "#323b47";
document.body.style.color = "#b8a818";
document.getElementById("Title1").innerHTML = "The Title";
console.log("\n");

/*HTML - add/change elements*/
/*.textContent : is used to change HTML in JS*/
/*.innerHTML : can be used but more valnerable*/
const myDiv1 = document.querySelector("#JSchanges");
const Heading = document.createElement("h1");
Heading.textContent = "ADDING/CHANGING HTML VIA JS";
/*prepend() for the top*/
myDiv1.prepend(Heading);

const myList1 = document.querySelector("#fruit");
const Listitem1 = document.createElement("li");
Listitem1.textContent = "Mango";
/*append() for the bottom*/
myList1.append(Listitem1);

const myList2 = document.querySelector("#fruit");
const Listitem2 = document.createElement("li");
Listitem2.textContent = "Lime";
/*For inserting inbetween somewhere*/
myList2.insertBefore(Listitem2, myList2.getElementsByTagName("li")[2]);

const myDiv2 = document.querySelector("#JSchanges");
const line = document.createElement("hr");
myDiv2.append(line);

/*CSS - add/change properties*/
const title = document.getElementById("Title2");

title.style.backgroundColor = "black";
title.style.color = "lightgreen";
title.style.fontFamily = "Charcoal";
title.style.border = "1px solid";
title.style.textAlign = "center";
title.style.padding = "10px";

/*Events*/
/*onclick*/
const buttonElement = document.getElementById("eventButton");
buttonElement.onclick = doEvent;

function doEvent() {
  alert("Event occuring.");
}

/*onload*/
buttonElement.onload = alert("Body loaded");

const colorboxA = document.getElementById("colorBox1");
colorboxA.style.backgroundColor = "green";
colorboxA.style.border = "1px solid";
colorboxA.style.textAlign = "center";
colorboxA.style.padding = "10px";

/*onmouseover*/
colorboxA.onmouseover = colorChangerHoverA;
function colorChangerHoverA() {
  colorboxA.style.backgroundColor = "red";
}

/*onmouseout*/
colorboxA.onmouseout = colorChangeDefaultA;
function colorChangeDefaultA() {
  /*this. can be used for the event being selected*/
  this.style.backgroundColor = "green";
}

/*.addEventListener(event, function, useCapture)*/
/*used to add many event handlers to one element*/
const outerBox = document.getElementById("outerBox");
outerBox.style.backgroundColor = "black";
outerBox.style.border = "1px solid";
outerBox.style.textAlign = "center";
outerBox.style.padding = "10px";

const innerBox = document.getElementById("innerBox");
innerBox.style.backgroundColor = "black";
innerBox.style.border = "1px solid";
innerBox.style.textAlign = "center";
innerBox.style.padding = "10px";

/*adding true to the end will give that event preference*/
outerBox.addEventListener("click", changeColor, true);
innerBox.addEventListener("click", changeColor);

function changeColor() {
  this.style.backgroundColor = "white";
}
