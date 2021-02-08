const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle')

describe("#middle", () => {
    it("returns [2] for [1, 2, 3]", () => {
        assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });
});

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = assertArraysEqual;
module.exports = middle;