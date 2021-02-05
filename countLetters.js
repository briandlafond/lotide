const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const countLetter = function(string) {
    const results = {}
    for (letter of string) {
        if (results[letter]) {
            results[letter] += 1;
        } else if (string[letter] !== " ") {
            results[letter] = 1;
        }
    }
    return results;
};

let letterCounter = countLetter('LHL');
console.log(letterCounter.L);
console.log(assertEqual(countLetter('LHL')));
assertEqual(letterCounter.L, 2);