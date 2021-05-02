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

// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

let get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asking user for input on length and alerts them to put a value in if they did not
    enter = parseInt(prompt("How many characters would you like? Choose between 8 and 128."));
    if (!enter) {
        alert("This needs a value!");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
    }
}