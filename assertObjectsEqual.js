const eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

const eqObjects = function(object1, object2) {

    const objectKeys1 = Object.keys(object1); // returns an array of a given object's (object 1) own enumerable property
    const objectKeys2 = Object.keys(object2); // returns an array of a given object's (object 2) own enumerable property

    if (objectKeys1.length !== objectKeys2.length) { // Returns true if both objects have identical keys with identical values.
        return false;
    }
    for (const key of objectKeys1) { //loop through keys of object 1
        if (Array.isArray(object1[key] || Array.isArray(object2[key]))) { // tests if key values are arrays
            return (eqArrays(object1[key], object2[key])); // returns true is object keys for both objects are equal
        } else if (object1[key] !== object2[key])
            return false; // Otherwise returns false
    }
    return true;
};

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`👌👌👌 Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
    } else {
        console.log(`😒😒😒 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

module.exports = assertObjectsEqual;