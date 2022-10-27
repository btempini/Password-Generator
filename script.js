// Assignment Code
function generatePassword() {
  //arrays
  var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var specialArr = ['!', '@', '#', '$', '*', '%'] 

  //prompts for password criteria
  var passwordLength = prompt('Please choose the length of your password, between 8-128)');
  passwordLength = Number(passwordLength)
  console.log(passwordLength)
  //errors and more prompts
  if (passwordLength < 8) {
    alert("Please make sure your password has more than 8 characters!");
    generatePassword();
  } else if (passwordLength > 128) {
    alert("Please make sure your password has less than 128 characters!");
    generatePassword();
  } else {
    var lowerCase = confirm("Would you like to include lowercase letters?")
    var upperCase = confirm("Would you like to include uppercase letters?")
    var numbers = confirm("Would you like to include numbers?")
    var special = confirm("Would you like to include special characters?")
    var newPasswordCharacters = []
    if (lowerCase) {
      newPasswordCharacters = newPasswordCharacters.concat(lowerCaseArr)
    }
    if (upperCase) {
      newPasswordCharacters = newPasswordCharacters.concat(upperCaseArr)
    }
    if (numbers) {
      newPasswordCharacters = newPasswordCharacters.concat(numbersArr)
    }
    if (special) {
      newPasswordCharacters = newPasswordCharacters.concat(specialArr)
    }
    console.log(newPasswordCharacters)
  }
  var newPassword = []
  //take password length and create a new array based on user input
  for (var i=0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * newPasswordCharacters.length);
    newPassword = newPassword.concat(newPasswordCharacters[random])
  }
  newPassword = newPassword.join("");
  console.log(newPassword)
  return(newPassword)
}
















// assigns a variable that targets a button element with id="generate"
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //assigns value of password to function generatePassword()
  var password = generatePassword();
  //targets text area
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
//when you click this button it will fire function write password
generateBtn.addEventListener("click", writePassword);
