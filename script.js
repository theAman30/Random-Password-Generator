const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialSymbols = "@#$%^&*()_+~{}|[]/-=";

const allChars = upperCase + lowerCase + numbers + specialSymbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}


// function for copy generated random password with setTimeout
function copyPassword() {
    const passwordValue = passwordBox.value.trim();
    if (passwordValue !== "") {
        passwordBox.select();
        document.execCommand("copy");
        const copyMessage = document.querySelector(".copied");
        copyMessage.style.display = "block";
        setTimeout(function() {
            copyMessage.style.display = "none";
        }, 2000);
    }
}