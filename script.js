var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["{", "}", "(", ")", "[", "]", "#", ":", ";", "^", ",", ".", "?", "!", "|", "&", "_", "-", "`", "~", "@", "$", "%", "/", "=", "+", "*", "'"];

var genBtn = document.getElementById('generate');
var txtArea = document.getElementById('password');

function initiate() {
  txtArea.textContent = ''
  var charChoices = [];
  var password = '';
  var userLength = prompt('Please enter the desired length of your password between 8 and 128 characters');
  if (isNaN(userLength)) {
    alert('Please eneter a number. Try again.');
    return;
  } else if (userLength < 8 || userLength > 128) {
    alert('Please enter a number between 8 and 128. Try again.');
    return;
  } else {
    var userUpper = confirm("Would you like to include Uppercase Letters?");
    var msg = 'You chose to include:'
    if (userUpper) {
      charChoices = charChoices.concat(upper);
      msg = msg + '\nUppercase Letters';
    }
    var userLower = confirm("Would you like to include Lowercase Letters?");
    if (userLower) {
      charChoices = charChoices.concat(lower);
      msg = msg + '\nLowercase Letters';
    }
    var userNumber = confirm("Would you like to include Numbers?");
    if (userNumber) {
      charChoices = charChoices.concat(num);
      msg = msg + '\nNumbers';
    }
    var userSpecial = confirm("Would you like to include Special Characters?");
    if (userSpecial) {
      charChoices = charChoices.concat(special);
      msg = msg + '\nSpecial Characters';
    }

    if (charChoices.length === 0) {
      alert('You did not choose any characters. Try again.');
      return;
    } else {
      alert(msg);
    }
    for (var i = 0; i < userLength; i++) {
      password = password + charChoices[Math.floor(Math.random() * charChoices.length)];
    }

    txtArea.textContent = password;
  }
}

genBtn.addEventListener("click", function (event) {
  genPwd();
});