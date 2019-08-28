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
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// -- Randomly chooses the Computer letter //
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// -- Variables to hold the number of wins, losses, & guesses info //
var wins = 0;
var losses = 0;
var guesses = 9;
var inputGuess = [];

// -- These should fill in the numbers, and letters used in the guess/stats section
document.getElementById("noWins").innerHTML = "Wins: " + wins;
document.getElementById("noLosses").innerHTML = "Losses: " + losses;
document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guesses;
document.getElementById("youHaveGuessed").innerHTML = "Your guesses, so far: " + inputGuess;


// -- This function runs when a user guesses (aka presses a key)
document.onkeyup = function (event) {


    // -- This Records which Key is pressed by the user
    var userGuess = event.key;

    //-- This should add the wrong guesses to inputGuess Array
    for (guesses = 9; guesses = 0; guesses--) {

        if (userGuess !== computerLetter) {
            inputGuess.push(userGuess);
            guesses--;
        } else {
            wins++;
        }
    
    }
}
