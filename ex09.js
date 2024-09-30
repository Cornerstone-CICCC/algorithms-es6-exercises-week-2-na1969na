/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = function (input) {
  const str = input.split(" ");
  let capitalizedWords = [];

  capitalizedWords.push(str[0].toLowerCase());

  for (let i = 1; i < str.length; i++) {
    const firstLetter = str[i].charAt(0).toUpperCase(); 
    const remainingLetters = str[i].slice(1).toLowerCase(); 
    capitalizedWords.push(firstLetter + remainingLetters);
  }
  return capitalizedWords.join("");
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
