// Variables
/* p = 3.1415;
const p;*/
let a = 5;
let b = 10;
let nombre = 'Cami';

console.log(`la suma es ${a+b} \n Mi nombre es ${nombre}`);

// Operadores
/*aritmeticos + - * mod %
comparacion == ===(identico) != !== < > ≤ ≥
lógicos && || ! 

console.info()
console.warn()
console.error()
console.clear()*/

let num1 = parseInt(prompt('Digite el primer número'));
let num2 = parseInt(prompt('Digite el segundo número'));
console.log(`la suma es ${num1+num2}`);
//
function sum(p1, p2) {
    return p1 + p2;
  }
function res(p1, p2) {
    return p1 - p2;
  }
function multiply(p1, p2) {
    return p1 * p2;
  }
function divide(p1, p2) {
    return p1 / p2;
  }

function modulus(dividend, divisor) {
    return dividend % divisor;
}

var result1 = sum(17, 5);
console.log("La suma entre 17 y 5 es:"+ + result1);
var result2 = res(17, 5);
console.log("La suma entre 17 y 5 es:"+ + result2);
var result3 = multiply(17, 5);
console.log("La multiplicación entre 17 y 5 es:"+ + result3);
var result4 = divide(17, 5);
console.log("La división entre 17 y 5 es:"+ + result4);
var result = modulus(17, 5);
console.log("El modulo es: " + result);