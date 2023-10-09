console.log("\n");
/*ES6 Module*/
/*Importing functions, values & others from external file*/
import { EarthsGravity, double, gravityMulitpler } from "./util.js";

console.log(`Earths gravity : ${EarthsGravity}m/s²`);
console.log(`Earths gravity doubled : ${double(EarthsGravity)}m/s²`);
console.log(`Earth gravity x5 : ${gravityMulitpler(5, EarthsGravity)}m/s²`);
