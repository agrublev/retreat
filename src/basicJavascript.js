// Dima Lesson

// ES6
// - Arrow, this
const Dima = {test:52};

Dima.f = function() {
    setTimeout(() => {
        console.log(this.test);
    },500);
};



// - Spread
// - Include
// - Destructuring

// object matching
// const ob = { op: { a: "a" }, rhs: { c: "c" } };
// var { op: a, rhs: c } = getASTNode();

function g({ name: x }) {
    console.log(x);
}

function g({ name }) {
    console.log(name);
}

// default
function f(x, y = 12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}

/**
 * Exports modules
 */

export function sum(x, y) {
    return x + y;
}
export const pi = 3.141593;

import * as math from "lib/math";

import { sum, pi } from "lib/math";
console.log("2π = " + sum(pi, pi));

// lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default function(x) {
    return Math.exp(x);
}

// app.js
import exp, { pi, e } from "lib/mathplusplus";
console.log("e^π = " + exp(pi));

/**
 * map, filter, forEach, for in
 */

/**
 * Promises
 */

return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
});
