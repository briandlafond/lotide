//Function to return indices of letter positions within a string
const letterPositions = (sentence) => {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        const character = sentence[i];
        if (results[character] && Array.isArray(results[character])) {
            results[character].push(i); // adds index position of subsequent character occurence within object
        } else {
            results[character] = [i]; // sets up the the character for first time in the new object w/ index value
        }
    }
    console.log(results);
    return results;
};
letterPositions("lighthouse is in the house");