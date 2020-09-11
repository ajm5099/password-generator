// Assignment Code
var generateBtn = document.querySelector("#generate");

//========================================================================================================================================
// Ask the user for the length of the password they wish to generate between 8 and 128 characters and confirm their entry is valid
//========================================================================================================================================

  //Ask the user how many characters they want their password to be
  var passwordLength;
  function howLongPassword () {
    passwordLength = prompt("How long do you want your password to be? Must be between 8 and 128 characters.")
    //confirm that the users entry is between 8 and 128
    if (passwordLength < 8) {
      passwordLength = prompt(passwordLength + " Was not a valid answer, please enter a number between 8 and 128")
    } else if (passwordLength > 128) {
      passwordLength = prompt(passwordLength + " Was not a valid answer, please enter a number between 8 and 128")
    }
    console.log(passwordLength)
  }

  howLongPassword();

//========================================================================================================================================
// ask the user if they want to include lowercase, uppercase, numeric, and/or special characters
//========================================================================================================================================
var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numberChoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-"];
var charactersToInclude = [];

if (confirm("Would you like your password to include lowercase characters?")) {
  includeLower++;
  console.log(includeLower);
} 

  //Question to include lowercase in the password. If the variable stays 0, dont include that type. If it is 1, include this type.
  var includeLower=0;
  function includeLowerCase () {
    
  }

  //Question to include uppercase in the password. If the variable stays 0, dont include that type. If it is 1, include this type.
  var includeUpper=0;
  function includeUpperCase () {
    if (confirm("Would you like your password to include uppercase characters?")) {
      includeUpper++;
      console.log(includeUpper);
    } 
  }

  //Question to include numbers in the password. If the variable stays 0, dont include that type. If it is 1, include this type.
  var includeNumber=0;
  function includeNum () {
    if (confirm("Would you like your password to include numbers?")) {
      includeNumber++;
      console.log(includeNumber);
    } 
  }

  //Question to include special characters in the password. If the variable stays 0, dont include that type. If it is 1, include this type.
  var includeSpecial=0;
  function includeSpecialChar () {
    if (confirm("Would you like your password to include special characters?")) {
      includeSpecial++;
      console.log(includeSpecial);
    } 
  }

  // includeLowerCase();
  // includeUpperCase();
  // includeNum();
  // includeSpecialChar();


//========================================================================================================================================
//defining the final password variable
//========================================================================================================================================
var finalPassword = [];



//========================================================================================================================================
//Code to select a random character from the upper case, lower case, number, and special character lists
//========================================================================================================================================

//code to create a random string of lowercase characters
  var lowerCaseChoice
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  //Can I get it so that I only have to define alphabet once?
  function getLowerCase () { 
    lowerCaseChoice = lowerCaseAlphabet[Math.floor(Math.random() * 26)];
    console.log(lowerCaseChoice);
    finalPassword.push(lowerCaseChoice);
  }

  // getLowerCase();
  // console.log(lowerCaseChoice)

//code to create a random string of uppercase characters
  var upperCaseChoice
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  function getUpperCase () { 
    upperCaseChoice = upperCaseAlphabet[Math.floor(Math.random() * 26)];
    upperCaseChoice.toUpperCase();
    console.log(upperCaseChoice);
    finalPassword.push(upperCaseChoice);
  }

  // getUpperCase();
  // console.log(upperCaseChoice)

//code to create a random string of numbers
var numberChoice
function getNumber () { 
  numberChoice = Math.floor(Math.random() * 10);
  console.log(numberChoice);
  finalPassword.push(numberChoice);
}

// getNumber();
// console.log(numberChoice)

//code to create a random string of special characters
var specialChoice
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-"]
  function getspecialCharacter () { 
    specialChoice = specialCharacters[Math.floor(Math.random() * 10)];
    console.log(specialChoice);
    finalPassword.push(specialChoice);
  }

// getspecialCharacter();
// console.log(specialChoice)

//========================================================================================================================================
//This code will select at random a character type to generate, and call that specific function
//========================================================================================================================================


function passwordGenerator() {
  //first, generate a random number between 1 and 4 to select which random attribute to call
  var typeSelector;
  typeSelector = Math.floor((Math.random() * 4) + 1);
  console.log(`type selector number is ${typeSelector}`)

  //now the system will select something
  //TODO: I need help here to tell the system that if any of the type selectors value is 0, then it should not run its associated function
  if (typeSelector === 1 ) {
    getLowerCase();
  } else if (typeSelector === 2) {
    getUpperCase();
  } else if (typeSelector === 3) {
    getNumber();
  } else if (typeSelector === 4) {
    getspecialCharacter();
  }
}


//========================================================================================================================================
//This code will run a loop to generate characters until the number of characters generated match the number of characters requested
//========================================================================================================================================

function characterGenerator() {
  //TODO: I need help here defining the loop to run until its the same length as the passwordLength variable
  for (var k = 0; k < 10; k++) {
    passwordGenerator();
    console.log(finalPassword);
  }
}

characterGenerator();


//========================================================================================================================================
// Write password to the #password input
//========================================================================================================================================


//TODO: Here i need to figure out how to write my variable finalPassword to the text box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//========================================================================================================================================
// Add event listener to generate button
//========================================================================================================================================


//TODO: Here is need help knowing how the button will initiate my functions
generateBtn.addEventListener("click", writePassword);