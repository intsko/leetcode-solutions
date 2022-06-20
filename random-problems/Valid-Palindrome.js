/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

var isPalindrome = function(s) {
    const formatted = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '')

    const reversed = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s/g, '')
                        .split('').reverse().join('')
    
    return formatted === reversed ? true : false 
};

console.log(
    isPalindrome("A man, a plan, a canal: Panama")
);