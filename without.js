const assertArraysEqual = function(actual, expected) {

    let isEqual = eqArrays(actual, expected);

    if (isEqual) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

function eqArrays(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true
}

const without = function(source, itemsToRemove) {
    for (let i = 0; i < source.length; i++) {
        for (let j = 0; j < itemsToRemove.length; j++) {
            if (source[i] === itemsToRemove[j]) {
                source.splice(i, 1)
            }

        }
    }
    console.log(source);
    return source;
}