let img = document.querySelector("#img");
let pass = document.querySelector("#input_field");
let response=document.querySelector(".response");
function change() {
    if (img.src.match("images/eye-close.png")) {
        pass.type = "text";
        img.src="images/eye-open.png";
        return;
    } else {
        img.src = "images/eye-close.png";
        pass.type = "password";
        return;
    }
}
function submit() {
    response.style.transform = "scale(1)";
}
function off() {
    response.style.transform = "scale(0)";
}