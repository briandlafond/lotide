const assertEqual = require('./assertEqual'); //imports the assertEqual function into this file

const head = function(array) {
    if (array.length > 0) {
        return array[0];
    } else {
        return undefined;
    }
};


module.exports = head;