//  
// App Data in its default state: 
//  

const alphabets = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

const characters = [alphabets, numbers, specialCharacters]; 

//
// DOM Variables:
//

const passwordLength = document.getElementById("passwordLength");
const numberInclusion = document.getElementById("numberInclusion");
const specialCharInclusion = document.getElementById("specialCharInclusion");

const generatePassword = document.getElementById("generatePassword");
const passwordOne = document.getElementById("passwordOne");
const passwordTwo = document.getElementById("passwordTwo");

let result = ""

// 
// Function to iterate over sub-arrays inside character array:
// 

function getSubIndex(arr) {
    const subIndex = Math.floor(Math.random() * arr.length);
            result += arr[subIndex];
}

//
// Function to remove elements (numbers & specialCharacters) from character array upon user input:
//

function removeArrayElements() {
    if (!(specialCharInclusion.checked)) {
        characters.splice(characters.indexOf(specialCharacters), 1)
    }
    if (!(numberInclusion.checked)) {
        characters.splice(characters.indexOf(numbers), 1)
    }
}

//
// Function to check & get the character array back to its default state:
//

function addArrayElements(arrEl) {
    if (!characters.includes(arrEl)) {
        characters.push(arrEl);
    }
}

//
// Main function to create the required (i.e respecting the user input) password from the data:
//

function evaluatePassword(output) {
    
    for (let i = 0; i < +passwordLength.value; i++) {
        let mainIndex = Math.floor(Math.random() * characters.length);

        if (mainIndex === characters.indexOf(alphabets)) {
            getSubIndex(alphabets);
        }
        else if (mainIndex === characters.indexOf(numbers)) {
             getSubIndex(numbers);
        }
        else {
             getSubIndex(specialCharacters);
        }
    }
    output.value = result;
    result = "";
}

//
// Function that runs the above functions with necessary arguments in order when called upon:
//

function printPasswords() {
    removeArrayElements();
    evaluatePassword(passwordOne);
    evaluatePassword(passwordTwo);
    addArrayElements(numbers);
    addArrayElements(specialCharacters);
}

generatePassword.addEventListener("click", printPasswords)

