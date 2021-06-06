//date and time
const dateContainer = document.querySelector("#hours");

function museumHours(){
    const today = new Date();
    let weekDay = today.getDay();
    console.log(weekDay);
  
    if (weekDay === 1){
        dateContainer.innerHTML = `Today's Hours: Closed`;
    }
    if (weekDay === 0){
        dateContainer.innerHTML = `Today's Hours: 10:00 - 15:00`;
    }
    if (weekDay === 5){
        dateContainer.innerHTML = `Today's Hours: 9:00 - 18:00`;
    }
    else{ dateContainer.innerHTML = `Today's Hours: 9:00 - 16:00`};
}
museumHours()

//Navigation

const hamburgerMenu = document.querySelector("#hamMenu");
const closeButton = document.querySelector("#closeMenu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", showMenu);
closeButton.addEventListener("click", closeMenu);

function showMenu(){
    nav.style.display = "block";
    hamburgerMenu.style.display = "none";
    closeButton.style.display = "block";
};

function closeMenu(){
    nav.style.display= "none";
    closeButton.style.display = "none";
    hamburgerMenu.style.display = "block";

};

//Drop Down Menu

let submenuOne = document.querySelector("#subMenuOne");
let submenuTwo = document.querySelector("#subMenuTwo");
let submenuOneContent = document.querySelector("#menuOneContent");
let submenuTwoContent = document.querySelector("#menuTwoContent");

submenuOne.addEventListener("mouseover", function(){
    submenuOneContent.style.display = "flex";
});
submenuOne.addEventListener("mouseleave", function(){
    submenuOneContent.style.display = "none";
});
submenuTwo.addEventListener("mouseover", function(){
    submenuTwoContent.style.display = "flex";
});
submenuTwo.addEventListener("mouseleave", function(){
    submenuTwoContent.style.display = "none";
});

