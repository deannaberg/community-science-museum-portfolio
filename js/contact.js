const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#emailInput");
const emailError = document.querySelector("#emailError");

const reason = document.querySelector("#reasonInput");
const reasonError = document.querySelector("#reasonError");

const message = document.querySelector("#messageInput");
const messageError = document.querySelector("#messageError");

const form = document.querySelector(".contactForm");

function validateForm(event) {

    if (nameInput.value <= 0) {
        nameError.style.display = "inline-block";
    };

    if (validateEmail(email.value, 0) === true) {
    } else {
        emailError.style.display = "inline-block";
    };
    if (reason.value === "Please Choose Reason") {
        reasonError.style.display = "inline-block";
    };
    if (message.value <= 0) {
        messageError.style.display = "inline-block";
    };
    event.preventDefault();
}

form.addEventListener("submit", validateForm);



//function validateCharacters (el, value)
