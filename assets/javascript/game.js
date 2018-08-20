// jQuery for game Crystal Collector 


$(document).ready(function () {

    // START JQUERY JS:

    // START INITIALIZE GAME PLAY VARIABLES WITH STARTING VALUES


    // jQ function for the $matchNumber to get random number 19 to 120
    $.fn.getRandomMatchInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // call getRandomInt function and pass in the min and max limit numbers
    let $matchNumber = $.fn.getRandomMatchInt(19, 120);
    // write the generated random $matchNumber to the page
    $("#match_number").text($matchNumber);


    // jQ function for the icons to get a random number 1 to 12
    $.fn.getRandomIconInt = function () {
        return Math.floor((Math.random() * 12) + 1);
    }

    // each icon calls getRandomIconInt function to get a random number 1 to 12
    let $redNumber = $.fn.getRandomIconInt();
    let $blueNumber = $.fn.getRandomIconInt();
    let $yellowNumber = $.fn.getRandomIconInt();
    let $greenNumber = $.fn.getRandomIconInt();

    // initialize and declare starting values for other game play variables
    // and write those initial values to the page
    let $userNumber = 0;
    $("#user_number").text($userNumber);

    let $wins = 0;
    $("#win_number").text($wins);

    let $losses = 0;
    $("#loss_number").text($losses);

    let $message = "Click an icon.";
    $("#the_message").text($message);

    // initialize $userClick function to hold value of current icon clicked
    let $userClick;


    // END INITIALIZE GAME PLAY VARIABLES WITH STARTING VALUES


    // START DECLARE GAME PLAY FUNCTIONS

    // reset() function generates new random numbers and resets user number to 0
    // and writes the user number 0 and new random match number to page
    // reset() is called by either the winning() or losing() functions
    $.fn.reset = function () {

        // reset $userNumber to 0 and write to page
        $userNumber = 0;
        $("#user_number").text($userNumber);

        // choose new random numbers for $matchNumber and icon numbers
        // and write the new $matchNumber to the page
        $matchNumber = $.fn.getRandomMatchInt(19, 120);
        $("#match_number").text($matchNumber);

        // each icon calls getRandomIconInt function to get a random number 1 to 12
        $redNumber = $.fn.getRandomIconInt();
        $blueNumber = $.fn.getRandomIconInt();
        $yellowNumber = $.fn.getRandomIconInt();
        $greenNumber = $.fn.getRandomIconInt();

    }

    // winning() is called by the play() function when $userNumber equals randomNumber
    // it increments the value of $wins by 1, and calls the reset() function
    $.fn.winning = function () {

        // increment the $wins variable by 1
        $wins = $wins + 1;
        // and write it to the page
        $("#win_number").text($wins);

        // run reset() to generate new random numbers and write them to page
        $.fn.reset();

        // write the winning $message to the screen
        $message = "You won!";
        $("#the_message").text($message);

    }

    // losing() is called by the play() function when $userNumber > randomNumber
    // it increments the value of $losses by 1, and calls the reset() function
    $.fn.losing = function () {

        // increment the $wins variable by 1
        $losses = $losses + 1;
        // and write it to the page
        // document.getElementById("loss_number").textContent = $losses;
        $("#loss_number").text($losses);

        // run reset() to generate new random numbers and write them to page
        $.fn.reset();

        // write the losing $message to the screen
        // document.getElementById("message").textContent = "You lost.";
        $message = "You lost.";
        $("#the_message").text($message);

    }

    // play() function contains the conditionals for game play operation
    $.fn.play = function () {

        if ($userNumber === $matchNumber) {
            $.fn.winning();
        } else if ($userNumber > $matchNumber) {
            $.fn.losing();
        } else {
            return;
        };
    }

    // END DECLARE GAME PLAY FUNCTIONS

    // SET EVENT LISTENERS TO LISTEN FOR ICON CLICKS WHICH CALL PLAY() FUNCTION

    // document.getElementById("icon_red").onclick = function (event) {
    $("#icon_red").click(function (event) {

        // set the $userClick placeholder to the value of the icon clicked number
        $userClick = $redNumber;
        // update the $userNumber by adding the value of the current click to total
        $userNumber = $userNumber + $userClick;
        // write to page $userNumber, which is the total sum of clicks so far
        // document.getElementById("user_number").textContent = $userNumber;
        $("#user_number").text($userNumber);
        // run the play() function to see if the number equals or exceeds $matchNumber
        $.fn.play();

    });

    // document.getElementById("icon_blue").onclick = function (event) {
    $("#icon_blue").click(function (event) {

        // set the $userClick placeholder to the value of the icon clicked number
        $userClick = $blueNumber;
        // update the $userNumber by adding the value of the current click to total
        $userNumber = $userNumber + $userClick;
        // write to page $userNumber, which is the total sum of clicks so far
        // document.getElementById("user_number").textContent = $userNumber;
        $("#user_number").text($userNumber);
        // run the play() function to see if the number equals or exceeds $matchNumber
        $.fn.play();

    });

    // document.getElementById("icon_yellow").onclick = function (event) {
    $("#icon_yellow").click(function (event) {

        // set the $userClick placeholder to the value of the icon clicked number
        $userClick = $yellowNumber;
        // update the $userNumber by adding the value of the current click to total
        $userNumber = $userNumber + $userClick;
        // write to page $userNumber, which is the total sum of clicks so far
        // document.getElementById("user_number").textContent = $userNumber;
        $("#user_number").text($userNumber);
        // run the play() function to see if the number equals or exceeds $matchNumber
        $.fn.play();

    });

    // document.getElementById("icon_green").onclick = function (event) {
    $("#icon_green").click(function (event) {

        // set the $userClick placeholder to the value of the icon clicked number
        $userClick = $greenNumber;
        // update the $userNumber by adding the value of the current click to total
        $userNumber = $userNumber + $userClick;
        // write to page $userNumber, which is the total sum of clicks so far
        // document.getElementById("user_number").textContent = $userNumber;
        $("#user_number").text($userNumber);
        // run the play() function to see if the number equals or exceeds $matchNumber
        $.fn.play();

    });


    // END EVENT LISTENER TO LISTEN FOR KEY PRESSES AND CALL PLAY() FUNCTION


    // END JQUERY JS
});