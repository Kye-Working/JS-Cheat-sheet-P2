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
document.getElementById("counterH1").innerHTML = "!!! Counter !!!";
console.log("\n");
