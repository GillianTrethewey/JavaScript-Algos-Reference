/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

// Big O too large:
// const last = (str) => {
//   return str
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .sort()
//     .map((el) => el.split("").reverse().join(""));
// }

const last = (str) => {
  return str
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

console.log(last("man i need a taxi up to ubud"));
// expect ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last("what time are we climbing up the volcano"));
// ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
console.log(last("take me to semynak"));
// ['take', 'me', 'semynak', 'to']
console.log(last("what time are we climbing up the volcano"));
//[ 'time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what' ]

// ['ekat', 'em', 'kanymes', 'ot']
// map - index[0] - 'ekat'
//split('') => ['e', 'k', 'a', 't']
//reverse() => ['t', 'a', 'k', 'e']
//join("") => 'take'
// ['take', 'me', 'semynak', 'to']

//sort ... (a,b) => b-a = descending order
// b = 98, a = 97 ... b-a = 1 ... positive
