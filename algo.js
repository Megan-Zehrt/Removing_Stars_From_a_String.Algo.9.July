// 2390. Removing Stars From a String



// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:

// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.



/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    
    // Iterate through each character in the string
    for (let char of s) {
        if (char === '*') {
            // Remove the closest non-star character to the left
            stack.pop();
        } else {
            // Push non-star characters onto the stack
            stack.push(char);
        }
    }
    
    // Join the stack to form the resulting string
    return stack.join('');
};