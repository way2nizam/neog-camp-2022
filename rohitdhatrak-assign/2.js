// 2. Convert ES6 to ES5

//code ...

const packIt = (...args) => console.log(args);

packIt(1, 2, 3, 5, 5);

// solution(es5);

function packIt() {
  var packItNumber = [];
  for (let i = 0; i < arguments.length; i++) {
    packItNumber.push(arguments[i]);
  }
  console.log(packItNumber);
}

packIt(1, 2, 3, 5, 5);
