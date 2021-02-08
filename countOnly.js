const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`👌👌👌Assertion Passed: ${actual} === ${expected}`)
    } else if (actual !== expected) {
        console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`)
    }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (const item of allItems) { //loops through every item in allItems
        if (itemsToCount[item]) { // if item of itemsToCount
            if (results[item]) { // if specific item in allItems..
                results[item] += 1; // add to results every instance
            } else {
                results[item] = 1; //add to results once
            }
        }
    }
    return results;
};

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
]


const result1 = countOnly(firstNames, {
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false
});



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;