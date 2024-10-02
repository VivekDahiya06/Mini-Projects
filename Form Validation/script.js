let form = document.getElementById('form');
let f_name = document.getElementById('Name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submit = document.getElementById('button');
let errors = [];
// form.addEventListener('load', function () {
//     let requiredField = document.querySelectorAll("input[required]");
//     requiredField.forEach((field) => {
//         const label = field.previousElementSibling;
//         if (label && label.tagName.toLowerCase === "label") {
//             label.innerHTML += ' <span style="color: red;">*</span>';
//         }
//         return true;
//     });
//     return true;
// });
f_name.addEventListener('keyup', (e) => {
    let nameError = document.getElementById('name-error');
    const regex = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
    if (e.target.value.length == 0) {
        errors.push(nameError.textContent = "Name is required");
        return false;
    }
    if (!regex.test(f_name.value)) {
        errors.push(nameError.textContent = "Write full name");
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" id="f_name"></i>';
    errors.splice(0, errors.length);
    return true;
});
phone.addEventListener('keyup', (e) => {
    let phoneError = document.getElementById('phone-error');
    if (e.target.value.length == 0) {
        errors.push(phoneError.textContent = "Phone no. is required");
        return false;
    }
    if (e.target.value.length > 10||e.target.value.length < 10) {
        errors.push(phoneError.textContent = "Phone no. must be 10 digits");
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" id="phone"></i>';
    errors.splice(0, errors.length);
    return true;
});
email.addEventListener('keyup', (e) => {
    let emailError = document.getElementById('email-error');
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (e.target.value.length === 0) {
        errors.push(emailError.textContent = "Email is required");
        return false;
    };
    if (regex.test(e.target.value)===false) {
        errors.push(emailError.textContent = "Incorrect format");
        return false;
    };
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" id="email"></i>';
    errors.splice(0, errors.length);
    return true;
});
message.addEventListener('keyup', (e) => {
    let messageError = document.getElementById('message-error');
    let num = e.target.value.length;
    if (num === 0) {
        errors.push(messageError.textContent = "Message is required");
        return false;
    };
    if (num > 100) {
        errors.push(messageError.textContent = "Can not have more than 100 characters");
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" id="message"></i>';
    errors.splice(0, errors.length);
    return true;
});
submit.addEventListener('click', (e) => {
    let submitError = document.getElementById('submit-error');
    if (errors.length !== 0) {
        e.preventDefault();
        submitError.textContent = "Please fix all the errors";
        return false;
    }
    submitError.textContent = "";
    return true;
});