// JavaScript for jQuery game Crystal Collector 


// vanilla JS code:

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let matchNumber = getRandomInt(19, 120);
document.getElementById("match_number").textContent = matchNumber;

let redNumber = Math.floor((Math.random() * 12) + 1);

let blueNumber = Math.floor((Math.random() * 12) + 1);

let yellowNumber = Math.floor((Math.random() * 12) + 1);

let greenNumber = Math.floor((Math.random() * 12) + 1);

let userNumber = 0;
document.getElementById("user_number").textContent = userNumber;

let wins = 0;
document.getElementById("win_number").textContent = wins;

let losses = 0;
document.getElementById("loss_number").textContent = losses;

let message = "click an icon"
document.getElementById("message").textContent = message;











$(document).ready(function () {

});

// basic jQuery syntax:
// $(selector).action()

// jQuery sample code:
// $("p").click(function(){
//     $(this).hide();
// });