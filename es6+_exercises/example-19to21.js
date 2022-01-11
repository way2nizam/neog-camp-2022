// section 6: Module system

// Note : here example 19 20 21, some error occurs, i'm working on it. will update very soon.

//example 19
//Topic: import/export

//  →  /utils.js
export const add = (a, b) => a + b;
export const square = (a) => a * a;

// example 20

const square2 = (a) => a * a;
export default square2;

// example 21

const add2 = (x, y) => x + y;

export { add2 as sum };
