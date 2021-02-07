const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const countLetter = function(string) {
    const results = {} // empty object to host result
    for (letter of string) { // loops through string searching for letter
        if (results[letter]) {
            results[letter] += 1; //increment each found letter, add to results objct
        } else if (string[letter] !== " ") { // if letter is not whitespace,
            results[letter] = 1; // add to results object
        }
    }
    return results; // returns result object
};

let testString = 'Brian Daniel LaFond goes to Bootcamp';
let testResultObject = countLetter(testString);
console.log(testResultObject);