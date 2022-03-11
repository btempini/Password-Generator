// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



function generatePassword() {
  var passwordCharacters = []
  var characterLimit = prompt("Choose the length of your password. (8-128)")
  var upperCase = confirm("Would you like to include uppercase letters?")
  var lowerCase = confirm("Would you like to include lowercase letters?")
  var number = confirm("Would you like to include numbers?")
  var symbol = confirm("Would you like to include symbols?")
  
  if (upperCase) { 
    passwordCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    console.log(upperCase);
  }
  if (lowerCase) {
    passwordCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    console.log(lowerCase);
  }
  if (number) {
    passwordCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
    console.log(number);
  }
  if (symbol) {
    passwordCharacters.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "~", "<", ">", ".", ",", ";", ":")
    console.log(symbol);
  }
  
  console.log(passwordCharacters)

  var finalPassword = "";

  for (let i=0; i < characterLimit; i++) {
    var char = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  finalPassword = finalPassword.concat(char);
  }

  return finalPassword;
}




//--------------------------------------------------------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
