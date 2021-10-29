// Given a number as an input, print out every integer
// from 1 to that number. However, when the integer is
// divisible by 3, print out “Fizz”; when it’s divisible by 5,
// print out “Buzz”; when it’s divisible by both 3 and 5,
// print out “Fizz Buzz”.

// const fizzBuzz = (n) => {
//   for (let num = 1; num <= n; num++) {
//     console.log((num % 3 ? "" : "fizz") + (num % 5 ? "" : "buzz") || num);
//   }
// };

const fizzBuzz = (n) => {
  for (let num = 1; num <= n; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
};

// const fizzBuzz = (n) => {
//   for (let num = 1; num <= n; num++) {
//     console.log((num % 3 ? "" : "fizz") + (num % 5 ? "" : "buzz") || num);
//   }
// };
fizzBuzz(25);
