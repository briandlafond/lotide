const eqArrys = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')


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


module.exports = middle;