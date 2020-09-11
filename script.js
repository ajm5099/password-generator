// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordTextArea = document.querySelector("#password");

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
    } else if (passwordLength.match(/[a-z]/i)) {
      passwordLength = prompt("letters are not accepted. Please enter a value between 8 and 128")
    }
    console.log(passwordLength)
  }

//========================================================================================================================================
// ask the user if they want to include lowercase, uppercase, numeric, and/or special characters
//========================================================================================================================================
function passwordSpecifications() {
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numberChoice = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-"];
  var charactersToInclude = [];
  //Asking if user wants to include lowercase characters
  if (confirm("Would you like your password to include lowercase characters?")) {
    charactersToInclude = [...charactersToInclude,...lowerCaseAlphabet]
  } 
  //Asking if user wants to include uppercase characters
  if (confirm("Would you like your password to include uppercase characters?")) {
    charactersToInclude = [...charactersToInclude,...upperCaseAlphabet]
  }
  //Asking if user wants to include numbers
  if (confirm("Would you like your password to include numbers?")) {
    charactersToInclude = [...charactersToInclude,...numberChoice]
  } 
  //Asking if user wants to include special characters
  if (confirm("Would you like your password to include special characters?")) {
    charactersToInclude = [...charactersToInclude,...specialCharacters]
  }   
  howLongPassword();
  return charactersToInclude;
}

//========================================================================================================================================
//function to create and write the password
//========================================================================================================================================
function writePassword() { 
  var charactersToInclude = passwordSpecifications();
  var finalPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    var arrayLength = charactersToInclude.length;
    var randomNumber = Math.floor(Math.random() * arrayLength);
    finalPassword.push(charactersToInclude[randomNumber]);
  }
  passwordTextArea.innerHTML = finalPassword.join("");
}

//========================================================================================================================================
// Add event listener to generate button
//========================================================================================================================================

generateBtn.addEventListener("click", writePassword);