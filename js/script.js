//date and time
const dateContainer = document.querySelector("#hours");
const subscribeEmail = document.querySelector("#subscribeEmail");
const subscribeError = document.querySelector(".subscribeError");
const subscribe = document.querySelector(".footerForm");

function museumHours() {
    const today = new Date();
    let weekDay = today.getDay();
    console.log(weekDay);

    if (weekDay === 0) {

        dateContainer.innerHTML = `Today's Hours: Closed`;
    }
    else if (weekDay === 6) {
        dateContainer.innerHTML = `Today's Hours: 10:00 - 15:00`;
    }
    else if (weekDay === 5) {
        dateContainer.innerHTML = `Today's Hours: 9:00 - 18:00`;
    }
    else { dateContainer.innerHTML = `Today's Hours: 9:00 - 16:00` }
}
museumHours()

//Navigation

const hamburgerMenu = document.querySelector("#hamMenu");
const closeButton = document.querySelector("#closeMenu");
const nav = document.querySelector("#navMenu");

hamburgerMenu.addEventListener("click", showMenu);
closeButton.addEventListener("click", closeMenu);

function showMenu() {
    nav.style.display = "block";
    hamburgerMenu.style.display = "none";
    closeButton.style.display = "block";
};

function closeMenu() {
    nav.style.display = "none";
    closeButton.style.display = "none";
    hamburgerMenu.style.display = "block";

};

//Drop Down Menu

let submenuOne = document.querySelector("#subMenuOne");
let submenuTwo = document.querySelector("#subMenuTwo");
let submenuOneContent = document.querySelector("#menuOneContent");
let submenuTwoContent = document.querySelector("#menuTwoContent");

submenuOne.addEventListener("mouseover", function () {
    submenuOneContent.style.display = "flex";
});
submenuOne.addEventListener("mouseleave", function () {
    submenuOneContent.style.display = "none";
});
submenuTwo.addEventListener("mouseover", function () {
    submenuTwoContent.style.display = "flex";
});
submenuTwo.addEventListener("mouseleave", function () {
    submenuTwoContent.style.display = "none";
});


//Validate Subscribe

function subscribeValidation() {
    if (validateEmail(subscribeEmail.value, 0) === true) {
        subscribeError.style.display = "none";
    } else {
        subscribeError.style.display = "block";
    };
}
subscribe.addEventListener("submit", subscribeValidation);
//Validate email 

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
};

