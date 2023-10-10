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

/*Pending a result*/
const promise1 = new Promise((resolve, reject) => {
  let fileLoaded = false;

  if (fileLoaded) {
    resolve("File loaded");
  } else {
    reject("File missing");
  }
});
console.log("\n");

/*Fulfilling a result*/
promise1
  .then((value) => {
    /*If true file will be recognised as loaded*/
    console.log(value);
  }) /*If false file will pass reject through as an error*/
  .catch((error) => console.log(error));

const promise2 = new Promise((resolve) => setTimeout(resolve, 2000));

promise2.then(() => console.log("\n Promise fulfilled."));
