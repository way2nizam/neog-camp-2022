/*
2. Print the following star pattern :-

 *
 * *
 * * *
 * * * *
 * * * * *
 
 */

// version 1 -

let star = '';

function printStar() {
  for (let i = 0; i < 5; i++) {
    star = star + '*';
    console.log(star);
  }
}

printStar();

// version 2
