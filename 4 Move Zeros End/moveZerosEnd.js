function moveZeros(arr) {
  // filter out zeros
  // count zeros - compare the length of original to length of the filtered
  // create a new array of length populated with zeros
  // spread operator to concatenate the two
  // add zeros to end

  let filteredArr = arr.filter((e) => e !== 0);
  //   let count = arr.length - filteredArr.length;
  //   let zeroArr = new Array(count).fill(0);
  let zeroArr = arr.filter((e) => e === 0);
  return [...filteredArr, ...zeroArr];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros2 = (arr) => {
  return [...arr.filter((e) => e !== 0), ...arr.filter((e) => e === 0)];
};

console.log(moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
