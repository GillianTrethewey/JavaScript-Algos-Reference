Given an array of numbers, return a new array of length number
containing the last even numbers from the original array
(in the same order).
The original array will be not empty and will contain at
least "number" even numbers.

function evenNumbers(array, number) {
  return array.filter((e) => e % 2 === 0).slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
console.log(animals.slice(0, -2));
// expected output: Array [ 'ant', 'bison', 'camel' ]
console.log(animals.slice(1, -2));
//expected output: Array [ 'bison', 'camel' ]

console.log(animals.slice(0, -1));
// expected output: Array [ 'ant', 'bison', 'camel', 'duck' ]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
