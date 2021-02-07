const assertArraysEqual = function(actual, expected) {

    let isEqual = eqArrays(actual, expected);

    if (isEqual) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

//Function to return indices of letter positions within a string
const letterPositions = (sentence) => {
    const results = {};
    for (let i = 0; i < sentence.length; i++) { // loop through given sentence
        const character = sentence[i]; // letter charachter = index of sentence 
        if (results[character] && Array.isArray(results[character])) {
            results[character].push(i); // adds index position of subsequent character occurence within object
        } else {
            results[character] = [i]; // sets up the the character for first time in the new object w/ index value
        }
    }
    console.log(results);
    return results;
};
letterPositions("Brian Daniel LaFond goes to Bootcamp");

assertArraysEqual(letterPositions("hello").e, [1]);