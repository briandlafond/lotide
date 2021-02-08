const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
    }
};

const findKeyByValue = function(object, value) {
    const keyOfObject = Object.keys(object); // new variable allows access to objects keys
    let foundKey = "";
    for (const key of keyOfObject) { //loop through object keys (sci_fi, comedy, drama)
        if (object[key] === value) { //if found key === value, set foundKey to key holding value
            foundKey = key;
        } else {
            foundKey = undefined; //// sets foundKey to undefined otherwise
        }
    }
    return foundKey;
};

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;