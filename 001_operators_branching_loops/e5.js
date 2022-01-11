// 5. Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// version 1

let num1 = 35;
let num2 = 29;
let num3 = 46;

if (num1 > num2) {
  if (num2 > num3) {
    console.log(
      'minimum number = ' +
        num3 +
        ', (version 1 - without using any function, using if else)'
    );
  } else if (num3 > num2) {
    console.log(
      'minimum number = ' +
        num2 +
        ', (version 1 - without using any function, using if else)'
    );
  } else
    console.log(
      'minimum number = ' +
        num3 +
        ', (version 1 - without using any function, using if else)'
    );
} else if (num3 > num1) {
  console.log(
    'minimum number = ' +
      num1 +
      ', (version 1 - without using any function, using if else)'
  );
} else
  console.log(
    'minimum number = ' +
      num3 +
      ', (version 1 - without using any function, using if else)'
  );

// version 2 - using Math.min() method

console.log(
  `minimum number = ${Math.min(
    num1,
    num2,
    num3
  )}, (version 2 - using Math.min() method)`
);

// version 3 - using named function

function showMessage3(msg) {
  console.log(`minimum number = ${msg}, (version 3 - using named function)`);
}

function findMax3(num1, num2, num3) {
  if (num1 > num2) {
    if (num2 > num3) {
      showMessage3(num3);
    } else if (num3 > num2) {
      showMessage3(num2);
    } else showMessage3(num3);
  } else if (num3 > num1) {
    showMessage3(num1);
  } else showMessage3(num3);
}
findMax3(num1, num2, num3);

// version 4 - using arrow function

let showMessage4 = (msg) => {
  console.log(`minimum number = ${msg}, (version 4 - using Arrow Function)`);
};

let findMax4 = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num2 > num3) {
      showMessage4(num3);
    } else if (num3 > num2) {
      showMessage4(num2);
    } else showMessage4(num3);
  } else if (num3 > num1) {
    showMessage4(num1);
  } else showMessage4(num3);
};

findMax4(num1, num2, num3);
