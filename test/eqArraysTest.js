const assertEqual = require('../assertEqual'); // Test Case: Check the original array 
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //arr1 does not equal arr2 -> false !== true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); //arr1 does not equal arr2 -> false !== true


module.exports = assertEqual;
module.exports = eqArrays;