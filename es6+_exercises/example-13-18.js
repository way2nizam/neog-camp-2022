// section 5: Dynamic fields/ Object literal/ Template literal

// example 16

// Topic: Dynamic fields in an object/computed property syntax

// let key = 'ram';
// const obj = { [key]: 122 };
// console.log(obj);

// output: { ram: 122 }

// example 17

// Topic: Object literals/Shorthand property value

// let aaloo = 1;
// let bhaaloo = 2;

// const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo };
// console.log(obj1);
// // { aaloo: 1, bhaaloo: 2}
// const obj2 = { aaloo, bhaaloo };
// console.log(obj2);
// // { aaloo: 1, bhaaloo: 2}

// example 18

// Topic: Template Literal

let name = 'Tanay';
let line = 'Helloo ' + name + ' !';
console.log(line);

// Hello Tanay ! here we have used concatenation.

const helloTemp = `Hello ${name} !`;
console.log(helloTemp);

//output: Hello Tanay ! here we have used template literal
