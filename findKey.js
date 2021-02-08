const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

const findKey = (object, callback) => {
    for (key in object) {
        const result = callback(object[key]);
        if (result) {
            return key;
        }
    }
}

const answer = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2)

console.log(answer);

assertEqual(answer, 'noma')

module.exports = findKey;