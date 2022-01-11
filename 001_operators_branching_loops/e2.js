// 2. Write a program to take a number input from user and determine whether the number is odd or even.

// version 1 - using Named Function

function showMessage(msg) {
  console.log(msg + ') (version 1 - using Named Function)');
}

function check(n) {
  if (n > 0) {
    if (n % 2 == 0) {
      showMessage('The given number is Even Number (' + n);
    } else showMessage('The given number is Odd Number (' + n);
  } else showMessage('Please enter the number greater than zero (' + n);
}

check(3); //input number is 3.

//version 2 - using arrow function

let showMessage2 = (msg) => {
  console.log(`${msg} (version 2 - using Arrow Function)`);
};

let check2 = (n) => {
  if (n > 0) {
    if (n % 2 == 0) {
      showMessage2(`The given number is Even Number (${n})`);
    } else showMessage2(`The given number is Odd Number (${n})`);
  } else showMessage2(`Please enter the number greater than zero ${n}`);
};

check2(4); //input number is 4.

// version 3 - using Higher Order Function

let showMessage3 = (msg) => {
  console.log(`${msg} (version 2 - using Higher Order Function)`);
};

let check3 = (n, f) => {
  if (n > 0) {
    if (f(n)) {
      showMessage3(`The given number is Even Number (${n})`);
    } else showMessage3(`The given number is Odd Number (${n})`);
  } else showMessage3(`Please enter the number greater than zero ${n}`);
};

let checkOddEven = (n) => n % 2 == 0;

check3(9, checkOddEven); //input number is 9.
