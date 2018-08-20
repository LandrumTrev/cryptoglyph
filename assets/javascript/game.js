// JavaScript for jQuery game Crystal Collector 


// // START VANILLA JS:

// // START INITIALIZE GAME PLAY VARIABLES WITH STARTING VALUES

// // function to create a random integer between specific min and max numbers
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // call getRandomInt function and pass in the min and max limit numbers
// let matchNumber = getRandomInt(19, 120);
// // write the generated random matchNumber to the page
// document.getElementById("match_number").textContent = matchNumber;

// // generate (hidden) random numbers 1 to 12 for each icon
// let redNumber = Math.floor((Math.random() * 12) + 1);
// let blueNumber = Math.floor((Math.random() * 12) + 1);
// let yellowNumber = Math.floor((Math.random() * 12) + 1);
// let greenNumber = Math.floor((Math.random() * 12) + 1);

// // initialize and declare starting values for other game play variables
// // and write those initial values to the page
// let userNumber = 0;
// document.getElementById("user_number").textContent = userNumber;

// let wins = 0;
// document.getElementById("win_number").textContent = wins;

// let losses = 0;
// document.getElementById("loss_number").textContent = losses;

// let message = "click an icon"
// document.getElementById("message").textContent = message;

// // initialize userClick function to hold value of current icon clicked
// let userClick;


// // END INITIALIZE GAME PLAY VARIABLES WITH STARTING VALUES


// // START DECLARE GAME PLAY FUNCTIONS

// // reset() function generates new random numbers and resets user number to 0
// // and writes the user number 0 and new random match number to page
// // reset() is called by either the winning() or losing() functions
// let reset = function () {

//     // reset userNumber to 0 and write to page
//     userNumber = 0;
//     document.getElementById("user_number").textContent = userNumber;

//     // choose new random numbers for matchNumber and icon numbers
//     // and write the new matchNumber to the page
//     matchNumber = getRandomInt(19, 120);
//     document.getElementById("match_number").textContent = matchNumber;

//     redNumber = Math.floor((Math.random() * 12) + 1);
//     blueNumber = Math.floor((Math.random() * 12) + 1);
//     yellowNumber = Math.floor((Math.random() * 12) + 1);
//     greenNumber = Math.floor((Math.random() * 12) + 1);

// };

// // winning() is called by the play() function when userNumber equals randomNumber
// // it increments the value of wins by 1, and calls the reset() function
// let winning = function () {

//     // increment the wins variable by 1
//     wins = wins + 1;
//     // and write it to the page
//     document.getElementById("win_number").textContent = wins;

//     // run reset() to generate new random numbers and write them to page
//     reset();

//     // write the winning message to the screen
//     document.getElementById("message").textContent = "You won!";

// }

// // losing() is called by the play() function when userNumber > randomNumber
// // it increments the value of losses by 1, and calls the reset() function
// let losing = function () {

//     // increment the wins variable by 1
//     losses = losses + 1;
//     // and write it to the page
//     document.getElementById("loss_number").textContent = losses;

//     // run reset() to generate new random numbers and write them to page
//     reset();

//     // write the losing message to the screen
//     document.getElementById("message").textContent = "You lost.";

// }

// // play() function contains the conditionals for game play operation
// let play = function () {

//     if (userNumber === matchNumber) {
//         winning();
//     } else if (userNumber > matchNumber) {
//         losing();
//     } else {
//         return;
//     };
// }

// // // END DECLARE GAME PLAY FUNCTIONS

// // // SET EVENT LISTENERS TO LISTEN FOR ICON CLICKS WHICH CALL PLAY() FUNCTION

// document.getElementById("icon_red").onclick = function (event) {

//     // set the userClick placeholder to the value of the icon clicked number
//     userClick = redNumber;
//     // update the userNumber by adding the value of the current click to total
//     userNumber = userNumber + userClick;
//     // write to page userNumber, which is the total sum of clicks so far
//     document.getElementById("user_number").textContent = userNumber;
//     // run the play() function to see if the number equals or exceeds matchNumber
//     play();
// }

// document.getElementById("icon_blue").onclick = function (event) {

//     // set the userClick placeholder to the value of the icon clicked number
//     userClick = blueNumber;
//     // update the userNumber by adding the value of the current click to total
//     userNumber = userNumber + userClick;
//     // write to page userNumber, which is the total sum of clicks so far
//     document.getElementById("user_number").textContent = userNumber;
//     // run the play() function to see if the number equals or exceeds matchNumber
//     play();

// }

// document.getElementById("icon_yellow").onclick = function (event) {

//     // set the userClick placeholder to the value of the icon clicked number
//     userClick = yellowNumber;
//     // update the userNumber by adding the value of the current click to total
//     userNumber = userNumber + userClick;
//     // write to page userNumber, which is the total sum of clicks so far
//     document.getElementById("user_number").textContent = userNumber;
//     // run the play() function to see if the number equals or exceeds matchNumber
//     play();

// }

// document.getElementById("icon_green").onclick = function (event) {

//     // set the userClick placeholder to the value of the icon clicked number
//     userClick = greenNumber;
//     // update the userNumber by adding the value of the current click to total
//     userNumber = userNumber + userClick;
//     // write to page userNumber, which is the total sum of clicks so far
//     document.getElementById("user_number").textContent = userNumber;
//     // run the play() function to see if the number equals or exceeds matchNumber
//     play();

// }

// // END EVENT LISTENER TO LISTEN FOR KEY PRESSES AND CALL PLAY() FUNCTION

// // END VANILLA JS





$(document).ready(function () {

// START JQUERY JS:

// START INITIALIZE GAME PLAY VARIABLES WITH STARTING VALUES

// function to create a random integer between specific min and max numbers
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// call getRandomInt function and pass in the min and max limit numbers
let matchNumber = getRandomInt(19, 120);
// write the generated random matchNumber to the page
document.getElementById("match_number").textContent = matchNumber;

// generate (hidden) random numbers 1 to 12 for each icon
let redNumber = Math.floor((Math.random() * 12) + 1);
let blueNumber = Math.floor((Math.random() * 12) + 1);
let yellowNumber = Math.floor((Math.random() * 12) + 1);
let greenNumber = Math.floor((Math.random() * 12) + 1);

// initialize and declare starting values for other game play variables
// and write those initial values to the page
let userNumber = 0;
document.getElementById("user_number").textContent = userNumber;

let wins = 0;
document.getElementById("win_number").textContent = wins;

let losses = 0;
document.getElementById("loss_number").textContent = losses;

let message = "click an icon"
document.getElementById("message").textContent = message;

// initialize userClick function to hold value of current icon clicked
let userClick;


// END INITIALIZE GAME PLAY VARIABLES WITH STARTING VALUES


// START DECLARE GAME PLAY FUNCTIONS

// reset() function generates new random numbers and resets user number to 0
// and writes the user number 0 and new random match number to page
// reset() is called by either the winning() or losing() functions
let reset = function () {

    // reset userNumber to 0 and write to page
    userNumber = 0;
    document.getElementById("user_number").textContent = userNumber;

    // choose new random numbers for matchNumber and icon numbers
    // and write the new matchNumber to the page
    matchNumber = getRandomInt(19, 120);
    document.getElementById("match_number").textContent = matchNumber;

    redNumber = Math.floor((Math.random() * 12) + 1);
    blueNumber = Math.floor((Math.random() * 12) + 1);
    yellowNumber = Math.floor((Math.random() * 12) + 1);
    greenNumber = Math.floor((Math.random() * 12) + 1);

};

// winning() is called by the play() function when userNumber equals randomNumber
// it increments the value of wins by 1, and calls the reset() function
let winning = function () {

    // increment the wins variable by 1
    wins = wins + 1;
    // and write it to the page
    document.getElementById("win_number").textContent = wins;

    // run reset() to generate new random numbers and write them to page
    reset();

    // write the winning message to the screen
    document.getElementById("message").textContent = "You won!";

}

// losing() is called by the play() function when userNumber > randomNumber
// it increments the value of losses by 1, and calls the reset() function
let losing = function () {

    // increment the wins variable by 1
    losses = losses + 1;
    // and write it to the page
    document.getElementById("loss_number").textContent = losses;

    // run reset() to generate new random numbers and write them to page
    reset();

    // write the losing message to the screen
    document.getElementById("message").textContent = "You lost.";

}

// play() function contains the conditionals for game play operation
let play = function () {

    if (userNumber === matchNumber) {
        winning();
    } else if (userNumber > matchNumber) {
        losing();
    } else {
        return;
    };
}

// // END DECLARE GAME PLAY FUNCTIONS

// // SET EVENT LISTENERS TO LISTEN FOR ICON CLICKS WHICH CALL PLAY() FUNCTION

document.getElementById("icon_red").onclick = function (event) {

    // set the userClick placeholder to the value of the icon clicked number
    userClick = redNumber;
    // update the userNumber by adding the value of the current click to total
    userNumber = userNumber + userClick;
    // write to page userNumber, which is the total sum of clicks so far
    document.getElementById("user_number").textContent = userNumber;
    // run the play() function to see if the number equals or exceeds matchNumber
    play();
}

document.getElementById("icon_blue").onclick = function (event) {

    // set the userClick placeholder to the value of the icon clicked number
    userClick = blueNumber;
    // update the userNumber by adding the value of the current click to total
    userNumber = userNumber + userClick;
    // write to page userNumber, which is the total sum of clicks so far
    document.getElementById("user_number").textContent = userNumber;
    // run the play() function to see if the number equals or exceeds matchNumber
    play();

}

document.getElementById("icon_yellow").onclick = function (event) {

    // set the userClick placeholder to the value of the icon clicked number
    userClick = yellowNumber;
    // update the userNumber by adding the value of the current click to total
    userNumber = userNumber + userClick;
    // write to page userNumber, which is the total sum of clicks so far
    document.getElementById("user_number").textContent = userNumber;
    // run the play() function to see if the number equals or exceeds matchNumber
    play();

}

document.getElementById("icon_green").onclick = function (event) {

    // set the userClick placeholder to the value of the icon clicked number
    userClick = greenNumber;
    // update the userNumber by adding the value of the current click to total
    userNumber = userNumber + userClick;
    // write to page userNumber, which is the total sum of clicks so far
    document.getElementById("user_number").textContent = userNumber;
    // run the play() function to see if the number equals or exceeds matchNumber
    play();

}

// END EVENT LISTENER TO LISTEN FOR KEY PRESSES AND CALL PLAY() FUNCTION

// END JQUERY JS




});

// basic jQuery syntax:
// $(selector).action()

// jQuery sample code:
// $("p").click(function(){
//     $(this).hide();
// });