"use strict";

// Selecting elements
const calcAppFrame = document.querySelector(".app--frame");
const darkTheme = document.querySelector(".dark--container");
const lightTheme = document.querySelector(".light--container")
const btnContainer = document.querySelector("table");
const screenDisplay = document.querySelector(".screen--display");
const screenDisplayWorkings = document.querySelector(".screen--display--workings");




// Light theme - Dark theme transition

darkTheme.addEventListener("click", function(e){
    const darkAppFrame= e.target.closest(".app--frame");
    const darkTheme = e.target.closest(".theme");
    const lightIcon = darkAppFrame.querySelector(".light--icon");
    const darkIcon = darkAppFrame.querySelector(".dark--icon");
    const darkInputFrame = darkAppFrame.querySelector(".inputs--frame");
    const normalInputs = darkAppFrame.querySelectorAll(".normal--color")
    const allInputs = darkAppFrame.querySelectorAll(".btn");
    const screenDisplayColor = darkAppFrame.querySelector(".screen--display");
    darkAppFrame.style.backgroundColor = "rgb(34,37,45)";
    darkTheme.style.backgroundColor = "rgb(41,45,54)";
    lightIcon.src = "icons/light-mode-inactive.png";
    darkIcon.src = "icons/dark-mode-active.png";
    darkInputFrame.style.backgroundColor = "rgb(41,45,54)";
    normalInputs.forEach(inputs => inputs.style.color = "rgb(255,255,255)");
    allInputs.forEach(btn => btn.style.backgroundColor = "rgb(39,43,51)");
    screenDisplayColor.style.color = "rgb(255,255,255)";

    

})

lightTheme.addEventListener("click", function(e){
    const lightAppFrame = e.target.closest(".app--frame");
    const lightTheme = e.target.closest(".theme");
    const lightIcon = lightAppFrame.querySelector(".light--icon");
    const darkIcon = lightAppFrame.querySelector(".dark--icon");
    const lightInputFrame = lightAppFrame.querySelector(".inputs--frame");
    const normalInputs = lightAppFrame.querySelectorAll(".normal--color")
    const allInputs = lightAppFrame.querySelectorAll(".btn");
    const screenDisplayColor = lightAppFrame.querySelector(".screen--display");
    lightAppFrame.style.backgroundColor = "rgb(255,255,255)";
    lightTheme.style.backgroundColor = "rgb(249,249,249)";
    lightIcon.src = "icons/light-mode-active.png";
    darkIcon.src = "icons/dark-mode-inactive.png";
    lightInputFrame.style.backgroundColor = "rgb(249,249,249)";
    normalInputs.forEach(inputs => inputs.style.color = "rgb(43,47,56)");
    allInputs.forEach(btn => btn.style.backgroundColor = "rgb(247,247,247)");
    screenDisplayColor.style.color = "rgb(43,47,56)";
})



btnContainer.addEventListener("click", function(e){
    const clickedButtonValue = e.target.value;
    // functions :

// clear
const clear = function() {
    screenDisplay.value = "";
    screenDisplayWorkings.value = "";
}

// delete
const del = function() {
    screenDisplay.value = screenDisplay.value.slice(0, -1);
}

// appendNumber
const appendNumber = function() {
    screenDisplay.value += clickedButtonValue;
}

// compute
const compute = function() {
    screenDisplay.value = eval(screenDisplay.value);
}

// ±
const negativeSign = function() {
    screenDisplay.value = "-" + screenDisplay.value
}

// Adding an event listsener to the buttons - event bubbling

    console.log(clickedButtonValue);
    
    // if
    if(clickedButtonValue === "=") {
        if (screenDisplay.value !== "") {
            compute();
        }   
    }
    else if (clickedButtonValue === "AC") {
        clear();
    }
    else if (clickedButtonValue === "±") {
        negativeSign();
    }
    else if (clickedButtonValue === "←") {
        del();
    }
    
    else if (clickedButtonValue === "%") {
        screenDisplay.value = eval(screenDisplay.value * 0.01);
    }
    else { 
        appendNumber();
    };
});