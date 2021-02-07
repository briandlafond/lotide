const eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

const assertArraysEqual = function(actual, expected) {

    let isEqual = eqArrays(actual, expected);

    if (isEqual) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const middle = function(arr) {

    if (arr.length < 3) { // if array is less that 3 elements, return []. no middle element
        return [];
    } else {
        if (arr.length % 2 === 0) { // if array is divisible by two (even)
            let evenIndex = (Math.floor(arr.length / 2)); // array index length / 2 = lesser of the array index
            return [arr[evenIndex - 1], arr[evenIndex]] // returns former and latter of even indicies 
        } else {
            let oddIndex = (Math.floor(arr.length / 2));
            return [arr[oddIndex]]
        }
    }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]