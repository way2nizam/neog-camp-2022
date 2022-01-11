// 3. Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// version 1 - without using any function

const num1 = 129;
const num2 = 251;

if (num1 > num2) {
  console.log(
    'num1 is greater than num2. num1=' +
      num1 +
      ' num2=' +
      num2 +
      ' (version 1 - without using any function)'
  );
} else
  console.log(
    'num2 is greater than num1. num1=' +
      num1 +
      ', num2=' +
      num2 +
      '. (version 1 - without using any function)'
  );

// version 2 - using Math.max() & Math.min() method)

console.log(
  'maximum number is ' +
    Math.max(num1, num2) +
    ' & Minimum number is ' +
    Math.min(num1, num2) +
    '. num1=' +
    num1 +
    ' num2=' +
    num2 +
    ' (version 2 - using Math.max() & Math.min() method)'
);

// version 3 - using named function

function showMessage3(msg) {
  console.log(
    `${msg} num1=${num1}, num2=${num2}. (version 3 - using Named Function)`
  );
}
function checkMaxMin3(num1, num2) {
  if (num1 > num2) {
    showMessage3(`num1 is greater than num2,`);
  } else showMessage3(`num2 is greater than num1,`);
}

checkMaxMin3(num1, num2);

// version 4 - using arrow function

let showMessage4 = (msg) => {
  console.log(
    `${msg} num1=${num1}, num2=${num2}. (version 4 - using Arrow Function)`
  );
};
let checkMaxMin4 = (num1, num2) => {
  if (num1 > num2) {
    showMessage4(`num1 is greater than num2,`);
  } else showMessage4(`num2 is greater than num1,`);
};

checkMaxMin4(num1, num2);

// version 5 - using Higher Order Function

let showMessage5 = (msg) => {
  console.log(
    `${msg} num1=${num1}, num2=${num2}. (version 5 - using Higher Order Function)`
  );
};
let checkMaxMin5 = (num1, num2, f) => {
  if (num1 > num2) {
    f(`num1 is greater than num2,`);
  } else f(`num2 is greater than num1,`);
};

checkMaxMin5(num1, num2, showMessage5);
