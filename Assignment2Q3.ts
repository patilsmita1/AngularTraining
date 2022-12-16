
// string is palindrome or not

function checkPalindrome(string) {

    
    const len = string.length;

    
    for (let i = 0; i < len / 2; i++) {

        
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = 'NAN';

// call the function
const value = checkPalindrome(string);

console.log(value);