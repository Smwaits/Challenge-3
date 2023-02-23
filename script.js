// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var length = prompt("How many characters would you like in your password?");
  var uppercase = confirm("Would you like uppercase characters?");
  var lowercase = confirm("Would you like lowercase characters?");
  var numeric = confirm("Would you like numeric characters?");
  var specialCharacters = confirm("Would you like special characters characters?");
  if (!uppercase && !lowercase && !numeric && !specialCharacters) {
    alert("One prompt must be selected")
    return
  }
  var upperChar = "ABC";
  var lowerChar = "abc";
  var numberChar = "123";
  var specialChar = "!@#$%";
  var possibleChar = "";
  if (uppercase) {
    possibleChar = possibleChar + upperChar
  };
  if (lowercase) {
    possibleChar = possibleChar + lowerChar
  };
  if (numeric) {
    possibleChar = possibleChar + numberChar
  };
  if (specialCharacters) {
    possibleChar = possibleChar + specialChar
  };
  var password = ""
  for (var i = 0; i < length; i++) {
    var chosenIndex = Math.floor(Math.random() * possibleChar.length)
    var chosenChar = possibleChar[chosenIndex]
    password = password + chosenChar
  }
  return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
