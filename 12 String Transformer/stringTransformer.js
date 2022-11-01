/* 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
*/

function stringTransformer(str) {
  return str
    .split("")
    .map((l) => (l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()))
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}

console.log(stringTransformer("EXample string")); // expected is 'STRING exAMPLE'
console.log(stringTransformer("happY BIRthday TO You")); //expected is 'yOU to birTHDAY HAPPy'
console.log(stringTransformer("happY   BIRthday TO You  ")); //expected is 'yOU to birTHDAY HAPPy'
