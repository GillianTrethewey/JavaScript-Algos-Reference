//Given a positive integer n, generate an n x n matrix filled 
//with elements from 1 to n2 in spiral order.
//Input: n = 3
//Output: [[1,2,3],[8,9,4],[7,6,5]]
//Input: n = 1
//Output: [[1]]

function spiralStructure(num) {
  
let myArr = [];

  //create array to manipulate
  for (let i = 0; i < num; i++) {
    myArr.push(new Array(num).fill(0));
  }

  //pointers
  let topPointer = 0;
  let bottomPointer = num - 1;
  let leftPointer = 0;
  let rightPointer = num - 1;
  let counter = 0;

  while (counter < num * num) {
    //fill top from left to right
    for (let col = leftPointer; col <= rightPointer; col++) {
      myArr[topPointer][col] = counter;
      counter++;
    }
    topPointer++;

    //fill right from top to bottom
    for (let row = topPointer; row <= bottomPointer; row++) {
      myArr[row][rightPointer] = counter;
      counter++;
    }
    rightPointer--;

    //fill bottom from right to left
    for (let col = rightPointer; col >= leftPointer; col--) {
      myArr[bottomPointer][col] = counter;
      counter++;
    }
    bottomPointer--;
    //fill left from bottom to top
    for (let row = bottomPointer; row >= topPointer; row--) {
      myArr[row][leftPointer] = counter;
      counter++;
    }
    leftPointer++;
  }

  //print each array separate line
  for (let i = 0; i < num; i++) {
    console.log(myArr[i]);
  }
}

let testCase1 = 5;

console.log(spiralStructure(testCase1));
