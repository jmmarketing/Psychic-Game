//Computer has to randomly select a letter
    // Computer has to keep that letter until all guesses are used
//User has to input a letter
// Check to see if User Guess = Computer Selected Letter
// If User = Computer then ADD 1 to the Wins Text 
    // Also Restart the Game and Reset Guesses left back to #, clear guess picks
// If user !== Computer then SUBTRACT 1 from Guesses Left
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
var inputGuess= "";

// -- This function runs when a user guesses (aka presses a key)
document.onkeyup = function(event){

  
  // -- This Records which Key is pressed by the user
    var userGuess = event.key;

if 
}