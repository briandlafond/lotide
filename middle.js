function eqArrays(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true
}

const assertArraysEqual = function(actual, expected) {

    let isEqual = eqArrays(actual, expected);

    if (isEqual) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const middle = function(arr) {

    if (arr.length < 3) {
        return [];
    } else {
        if (arr.length % 2 === 0) {
            let evenIndex = (Math.floor(arr.length / 2));
            return [arr[evenIndex - 1], arr[evenIndex]]
        } else {
            let oddIndex = (Math.floor(arr.length / 2));
            return [arr[oddIndex]]
        }
    }
}


assertArraysEqual(middle([1])) // => []
assertArraysEqual(middle([1, 2])) // => []
assertArraysEqual(middle([1, 2, 3])) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5])) // => [3]
assertArraysEqual(middle([1, 2, 3, 4])) // => [2, 3] 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]