const assertArraysEqual = function(actual, expected) {

    let isEqual = eqArrays(actual, expected);

    if (isEqual) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);