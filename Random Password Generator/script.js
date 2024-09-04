const password_box = document.querySelector("#pass");
var password = "";
var uppercase, lowercase, numbers;
var symbols="@#$%&*!^?";
var length = 8;
for (let i = 65; i <= 90; i++) { 
     uppercase+= String.fromCharCode(i);
}
for (let i = 97; i <= 122; i++) { 
    lowercase+= String.fromCharCode(i);
}
for (let i = 48; i <= 57; i++) { 
    numbers+= String.fromCharCode(i);
}
symbols += uppercase + lowercase + numbers;
function generatePassword() {
    for (let i = 0; i < length; i++) {
        password+= symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    password_box.value = password;
    password = "";
}
function copyPassword() {
    password_box.select();
    document.execCommand("copy");
}