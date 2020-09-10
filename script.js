// Assignment Code
var generateBtn = document.querySelector("#generate");

// Ask the user for the length of the password they wish to generate between 8 and 128 characters and confirm their entry is valid

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

  // howLongPassword();
// ask the user if they want to include lowercase, uppercase, numeric, and/or special characters

  //Question to include lowercase in the password
  var includeLower=0;
  function includeLowerCase () {
    if (confirm("Would you like your password to include lowercase characters?")) {
      includeLower++;
      console.log(includeLower);
    } 
  }

  //Question to include uppercase in the password
  var includeUpper=0;
  function includeUpperCase () {
    if (confirm("Would you like your password to include uppercase characters?")) {
      includeUpper++;
      console.log(includeUpper);
    } 
  }

  //Question to include numbers in the password
  var includeNumber=0;
  function includeNum () {
    if (confirm("Would you like your password to include numbers?")) {
      includeNumber++;
      console.log(includeNumber);
    } 
  }

  //Question to include special characters in the password
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

// code to take the number of characters, and divide it by the number of character types they want in the password, and pass this to variables

  //code to determine the total number of character types to include
  // var characterTypes = 0;
  // function calculateTypes () {
  //   if (includeLower === 1) {
  //     characterTypes++;
  //   }
  //   if (includeUpper === 1) {
  //     characterTypes++;
  //   }
  //   if (includeNumber === 1) {
  //     characterTypes++;
  //   }
  //   if (includeSpecial === 1) {
  //     characterTypes++;
  //   }
  //   console.log(characterTypes);
  // }

  // calculateTypes();

  //code to determine the number of characters each character type should generate


//code to create a random string of lowercase characters
  var lowerCaseChoice
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  //Can I get it so that I only have to define alphabet once?
  function getLowerCase () { 
    lowerCaseChoice = lowerCaseAlphabet[Math.floor(Math.random() * 26)];
  }

  getLowerCase();
  console.log(lowerCaseChoice)

//code to create a random string of uppercase characters
  var upperCaseChoice
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  function getUpperCase () { 
    upperCaseChoice = upperCaseAlphabet[Math.floor(Math.random() * 26)];
    upperCaseChoice.toUpperCase();
  }

  getUpperCase();
  console.log(upperCaseChoice)

//code to create a random string of numbers
var numberChoice
function getNumber () { 
  numberChoice = Math.floor(Math.random() * 10);
}

getNumber();
console.log(numberChoice)

//code to create a random string of special characters
var specialChoice
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-"]
  function getspecialCharacter () { 
    specialChoice = specialCharacters[Math.floor(Math.random() * 10)];
  }

getspecialCharacter();
console.log(specialChoice)

//code to create one character of each character type sequentially based on the number of characters requested, and concationate them together

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);