// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// version 1 - without using any function, usinf if else

let num1 = 8;
let num2 = 23;
let num3 = 17;

if (num1 > num2) {
  if (num2 > num3) {
    console.log(
      'maximum number = ' +
        num1 +
        ', (version 1 - without using any function, using if else)'
    );
  } else if (num3 > num1) {
    console.log(
      'maximum number = ' +
        num3 +
        ', (version 1 - without using any function, using if else)'
    );
  } else
    console.log(
      'maximum number = ' +
        num1 +
        ', (version 1 - without using any function, using if else)'
    );
} else if (num2 > num3) {
  console.log(
    'maximum number = ' +
      num2 +
      ', (version 1 - without using any function, using if else)'
  );
} else
  console.log(
    'maximum number = ' +
      num3 +
      ', (version 1 - without using any function, using if else)'
  );

// version 2 - using Math.max() method

console.log(
  `maximum number = ${Math.max(
    num1,
    num2,
    num3
  )}, (version 2 - using Math.max() method)`
);

// version 3 - using named function

function showMessage3(msg) {
  console.log(`maximum number = ${msg}, (version 3 - using named function)`);
}

function findMax3() {
  if (num1 > num2) {
    if (num2 > num3) {
      showMessage3(num1);
    } else if (num3 > num1) {
      showMessage3(num3);
    } else showMessage3(num1);
  } else if (num2 > num3) {
    showMessage3(num2);
  } else showMessage3(num3);
}

findMax3(num1, num2, num3);

// version 4 - using arrow function

let showMessage4 = (msg) => {
  console.log(`maximum number = ${msg}, (version 4 - using Arrow Function)`);
};

let findMax4 = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num2 > num3) {
      showMessage4(num1);
    } else if (num3 > num1) {
      showMessage4(num3);
    } else showMessage4(num1);
  } else if (num2 > num3) {
    showMessage4(num2);
  } else showMessage4(num3);
};

findMax4(num1, num2, num3);
