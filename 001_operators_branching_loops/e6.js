// 6. Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// version 1 - without using any function

let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let inputMonth = 5; // here the input is 2 i.e Febuary
console.log(
  'The month has ' +
    monthDays[inputMonth - 1] +
    ' days. (version 1 - without using any function)'
);

// version 2 - using switch case with named function

function printNumberOfDays(n) {
  switch (n) {
    //Days of 31 days

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(
        `The month has ${
          monthDays[n - 1]
        } days. (version 2 -  using switch case with named function)`
      );
      break;

    case 2:
      console.log(
        `The month has ${
          monthDays[n - 1]
        } days. (version 2 -  using switch case with named function)`
      );
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(
        `The month has ${
          monthDays[n - 1]
        } days. (version 2 -  using switch case with named function)`
      );
      break;
  }
}

printNumberOfDays(4); // n is the input month

// version 2 - using switch case with Arrow Function

let printNumberOfDays2 = (n) => {
  switch (n) {
    //Days of 31 days

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(
        `The month has ${
          monthDays[n - 1]
        } days. (version 2 -  using switch case with Arrow Function)`
      );
      break;

    case 2:
      console.log(
        `The month has ${
          monthDays[n - 1]
        } days. (version 2 -  using switch case with Arrow Function)`
      );
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(
        `The month has ${
          monthDays[n - 1]
        } days. (version 2 -  using switch case with Arrow Function)`
      );
      break;
  }
};

printNumberOfDays2(2); // n is the input month
