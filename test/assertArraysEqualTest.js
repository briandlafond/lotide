const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 5]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = eqArrays;
module.exports = assertArraysEqual;