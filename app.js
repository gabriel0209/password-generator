const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBER = "0123456789";
const SYMBOL = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

let get_password_btn = document.getElementById("get_password");
let passwordBox = document.getElementById("passwordBox");

get_password_btn.addEventListener("click", createPassword);

function get_random_value(type) {
  return type[Math.floor(Math.random() * type.length)];
}

function createPassword() {
   let upper = document.getElementById("upperCase").checked;
      (lower = document.getElementById("lowerCase").checked),
      (number = document.getElementById("number").checked),
      (symbol = document.getElementById("symbol").checked),
      (length = document.getElementById("length").value),
      (sum = upper + lower + number + symbol),
      (password = ""),
      (i = 0);
  if (sum === 0) alert("Please check at least one box!");
  else {
    for (; i < length; i += sum) {
      if (upper && password.length != length)
        password += get_random_value(UPPERCASE);
      if (lower && password.length != length)
        password += get_random_value(LOWERCASE);
      if (number && password.length != length)
        password += get_random_value(NUMBER);
      if (symbol && password.length != length)
        password += get_random_value(SYMBOL);
    }
    passwordBox.innerHTML = password;
  }
}
