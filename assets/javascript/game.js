//Computer has to randomly select a letter
// Computer has to keep that letter until all guesses are used
//User has to input a letter
// Check to see if User Guess = Computer Selected Letter
// If User = Computer then ADD 1 to the Wins Text 
// Also Restart the Game and Reset Guesses left back to #, clear guess picks
// If user !== Computer then SUBTRACT 1 from Guesses Left
// Add Guessed Letter to "Your Guesses" lione (use .push?)
// Continue until Guesses left = 0
// When Guesses Left = 0 then ADD 1 to Losses text
// Then restart Game with Guesses going back to # and clear guess picks


// -- List of letters computer can choose from //


function psychicGame() {
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // -- Randomly chooses the Computer letter //
    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter)


    // -- Variables to hold the number of wins, losses, & guesses info //
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var inputGuess = [];

    // -- Display Statistics Variables
    var noGuessesLeft = document.getElementById("guessLeft");
    var listGuesses = document.getElementById("youHaveGuessed");
    var numLosses = document.getElementById("noLosses");
    var numWins = document.getElementById("noWins");
    var resultsMesssage = document.getElementById("gameMessage");


    // -- This function runs when a user guesses (aka presses a key)
    document.onkeyup = function (event) {


        // -- This Records which Key is pressed by the user
        var userGuess = event.key;
        resultsMesssage.textContent = "";
        //-- This should add the wrong guesses to inputGuess Array
        //for (var i = 9; i = 0; i--) {

        if ((userGuess !== computerLetter) && (guesses > 0)) {
            inputGuess.push(userGuess);
            guesses--;
            noGuessesLeft.textContent = "Guesses Left: " + guesses;
            listGuesses.textContent = "Your Guesses, so far: " + inputGuess.join(", ");

        } else if (guesses < 1) {
            losses++;
            numLosses.textContent = "Losses: " + losses;
            inputGuess.splice(0,8);
            guesses = 10;
            resultsMesssage.textContent = "You Lose! Press Any Button to Try Again";
            psychicGame();


        } else {
            wins++;
            numWins.textContent = "Wins: " + wins;
            inputGuess.splice(0,8);
            guesses = 10;
            psychicGame();
        }
    }

}
psychicGame();