const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false