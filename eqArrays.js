const assertEqual = require('./assertEqual');


const eqArrays = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === arr2[2]) {
            return true;
        }
    };
    return false;
};


module.exports = eqArrays;