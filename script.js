function generatePassword() {
  var passwordCharacters = []
  var characterLimit = prompt("Choose the length of your password. (8-128)")
  if (characterLimit < 8 || characterLimit > 128) {
    // alert("Please Enter A Valid Number");
    // return(characterLimit.prompt)
    return("Please Enter A Valid Number")
  }
  var upperCase = confirm("Would you like to include uppercase letters?")
  var lowerCase = confirm("Would you like to include lowercase letters?")
  var number = confirm("Would you like to include numbers?")
  var symbol = confirm("Would you like to include symbols?")
  
  if (upperCase) { 
    passwordCharacters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    console.log(upperCase);
  }
  if (lowerCase) {
    passwordCharacters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    console.log(lowerCase);
  }
  if (number) {
    passwordCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    console.log(number);
  }
  if (symbol) {
    passwordCharacters.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "~", "<", ">", ".", ",", ";", ":");
    console.log(symbol);
  }
  
  console.log(passwordCharacters);

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
