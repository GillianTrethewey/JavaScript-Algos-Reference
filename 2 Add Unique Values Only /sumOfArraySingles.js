function repeats(arr) {
  return arr
    .filter((v, i) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, c) => a + c);
}

// OR

const repeats = (arr) => {
  return arr
    .filter((v, i) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, c) => a + c);
};

console.log(repeats([4, 5, 7, 5, 4, 8])); // indexOf(4) = 0, lastIndexOf(4) = 4
console.log(repeats([9, 10, 19, 13, 19, 13]));
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]));
console.log(repeats([5, 10, 19, 13, 10, 13]));
