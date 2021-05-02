// User input variables:

let enter;
let confirmNumber;
let confirmCharacter;
let confirmUppercase;
let confirmLowercase;

// Variable values:
// Added values for special characters, numeric characters, and alphabetical characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];
let choices;

// Added to convert letters to uppercase
let toUpper = function (x) {
    return x.toUpperCase();
};
