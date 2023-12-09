"use strict"

let x = parseInt(prompt("Enter a number: "));
let y = parseInt(prompt("Enter a number: "));
let z = parseInt(prompt("Enter a number: "));

const sum = x +  y + z ;
const product = x * y * z;
const a = sum / 3;

document.querySelector("p").innerHTML =  "Sum: " + sum + "Product: " + product + "Average: " + a;