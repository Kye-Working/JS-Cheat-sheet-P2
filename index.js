console.log("\n");

/*ES6 Module*/
/*Importing functions, values & others from external file*/
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
promise2.then(() => console.log("\n Promise A fulfilled."));

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));
wait(2500).then(() => console.log("\n Promise B fulfilled."));

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

loadFile()
  .then((value) => {
    console.log(value);
  }) /*catch will catch the error*/
  .catch((error) => console.log(error));
