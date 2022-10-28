// Created arrays for each character category, a variable for the text displayed, and an empty array for generated password.
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Special = ["{", "}", "(", ")", "[", "]", "#", ":", ";", "^", ",", ".", "?", "!", "|", "&", "_", "-", "`", "~", "@", "$", "%", "/", "=", "+", "*", "'"];
var PWText = document.getElementById('password');
var newPassword = []
// Code to execute function when you click on the button
document.querySelector("button").addEventListener('click', askValues);
// This function clears the password field, determines the desired password settings, joins the different character categories into a single array, randomly selects characters for the desired length, and generates a password.
function askValues() {
  newPassword = [];
  writePassword(); // clears existing password field
  var userLength = prompt("Please enter desired password length between 8 and 128 characters");
  console.log(userLength); // asks for length of password
  if (isNaN(userLength)) {
    alert("Please enter a number. Try again.");
    return; // aborts if length is not a number
  } else if (userLength < 8 || userLength > 128) {
    alert("Your password length does not meet the required criteria. Try again.");
    return; // aborts if length falls outside of required length
  } else // asks which character categories user would like to include
    var userUpper = confirm("Would you like to include Uppercase Letters?");
  console.log(userUpper)
  var userLower = confirm("Would you like to include Lowercase Letters?");
  console.log(userLower)
  var userNumber = confirm("Would you like to include Numbers?");
  console.log(userNumber)
  var userSpecial = confirm("Would you like to include Special Characters?");
  console.log(userSpecial)
  // the following part of the if-else goes through the 12 distinct combinations of categories
  if (!userUpper && !userLower && !userNumber && !userSpecial) {
    alert("You did not choose any characters and you cannot generate a password. Try Again.");
    return; // a password cannot be created without any categories

  } else if (userUpper && userLower && userNumber && userSpecial) {
    alert("You chose to include Uppercase, Lowercase, Numbers, and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Lower, Num, Special); // combines categories into a single array
    console.log(Characters)
    for (var i = 0; i < userLength; i++) { // goes through the characters array the number of times the user selected for the length
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]); // randomly selects the characters and puts them in a new array
      console.log(newPassword.join('')); // join function displays all of the values in the array as a single string without any additional spaces or characters in between
    }
    // the rest of the function works just like the previous if section
  } else if (!userUpper && userLower && userNumber && userSpecial) {
    alert("You chose to include Lowercase, Numbers, and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Lower.concat(Num, Special);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (userUpper && !userLower && userNumber && userSpecial) {
    alert("You chose to include Uppercase, Numbers, and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Num, Special);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (userUpper && userLower && !userNumber && userSpecial) {
    alert("You chose to include Uppercase, Lowercase, and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Lower, Special);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (userUpper && userLower && userNumber && !userSpecial) {
    alert("You chose to include Uppercase, Lowercase, and Numbers and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Lower, Num);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (!userUpper && !userLower && userNumber && userSpecial) {
    alert("You chose to include Numbers and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Num.concat(Special);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (!userUpper && userLower && !userNumber && userSpecial) {
    alert("You chose to include Lowercase and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Lower.concat(Special);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (!userUpper && userLower && userNumber && !userSpecial) {
    alert("You chose to include Lowercase and Numbers and your password will be " + userLength + " characters.");
    var Characters = Lower.concat(Num);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (userUpper && !userLower && !userNumber && userSpecial) {
    alert("You chose to include Uppercase and Special Characters and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Special);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (userUpper && !userLower && userNumber && !userSpecial) {
    alert("You chose to include Uppercase and Numbers and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Num);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (userUpper && userLower && !userNumber && !userSpecial) {
    alert("You chose to include Uppercase and Lowercase and your password will be " + userLength + " characters.");
    var Characters = Upper.concat(Lower);
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (!userUpper && !userLower && !userNumber && userSpecial) {
    alert("You chose to include only Special Characters and your password will be " + userLength + " characters.");
    var Characters = Special;
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (!userUpper && !userLower && userNumber && !userSpecial) {
    alert("You chose to include only Numbers and your password will be " + userLength + " characters.");
    var Characters = Num;
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else if (!userUpper && userLower && !userNumber && !userSpecial) {
    alert("You chose to include only Lowercase and your password will be " + userLength + " characters.");
    var Characters = Lower;
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }

  } else {
    alert("You chose to include only Uppercase and your password will be " + userLength + " characters.");
    var Characters = Upper;
    console.log(Characters)
    for (var i = 0; i < userLength; i++) {
      newPassword.push(Characters[Math.floor(Math.random() * Characters.length)]);
      console.log(newPassword.join(''));
    }
  } return;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  PWText.textContent = newPassword.join(''); // writes the password from the newly created array
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);