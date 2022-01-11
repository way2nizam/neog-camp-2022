// section 1: let, const, and var
// Topic: Block scope & functional scope

// Note: just copy the code and try in your system on console.

// 1.

if (true) {
  let a = 2;
  // var a = 2;
}
console.log(a); // output: ReferenceError

// Because: ReferenceError beacuse a is defined with 'let' in the body of if condition, and let is block scoped. so when we will try to acces outside the scope, we will encountred ReferenceError.

// Let's try with 'var'
// 2.

if (true) {
  var a = 2;
}
console.log(a); // output: 2

// Because : here 'a' is declared with var and var is globally-scoped variable. Even if 'a' is declared after the function, it will not trigger an error. because variable with 'var' are processed (with 'undefined') before any code is executed. This is called hoisting.

// 3.

let a = 42;
{
  let a = 100;
}
console.log(a); // output: 42

// Because : 'a' declared 'let' inside block scope can not with accessed. because let is a block-scoped local variable.

// 4.

let a = 100;
function App() {
  console.log('1', a);
  let a = 42;
  console.log('2', a);
  {
    let a = 100;
  }
  console.log('3', a);
}

App();

//output: ReferenceError beacuse line 38 (console.log('1', a);) is trying to access a before the initialisation in their block scope. but if the 'a' declaration is removed from the line 39 (let a = 42;). then we do not get any error, and a is accessed from the global scope. here TDZ (temporal dead zone) concept will talk about it next example.

// 5.

let a = 100;
function App() {
  a = 42;
  console.log('1', a);
}
App();

// output: 42, because a is available before accessing. and 'a' is initialised in global scope and value is changed in App() function.
