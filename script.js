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
        // Validates user input
        // Start user prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));
    } else {
// Continues once user input is validated
        confirmLowercase = confirm("Would you like lowercase characters in your password?");
        confirmUppercase = confirm("How about any uppercase characters?");
        confirmNumber = confirm("Would you like to add a few numbers?");
        confirmCharacter = confirm("Will this contain any special characters?");

    };

    // Else if for 4 negative optioins
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");
    }

    // First if statement that takes user input prompts to establish choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmLowercase && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha, alpha2);
    }

// else if for 3 positive options
else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
}

// else if for 2 positive options
else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

}
else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

}
else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
    choices = character.concat(number);
}
else if (confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha2);
}
else if (confirmNumber && confirmUppercase) {
    choices = character.concat(alpha2);
}
}