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




// -- This Makes the Game One Giant Function --//
function psychicGame() {

    // -- List of letters computer can choose from --//
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // -- Randomly chooses the Computer letter --//
    var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter)


    // -- Variables to hold the number of wins, losses, & guesses info --//
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var inputGuess = [];

    // -- Display Statistics Variables --//
    var noGuessesLeft = document.getElementById("guessLeft");
    var listGuesses = document.getElementById("youHaveGuessed");
    var numLosses = document.getElementById("noLosses");
    var numWins = document.getElementById("noWins");
    var resultsMesssage = document.getElementById("gameMessage");


    // -- This function runs when a user guesses (aka presses a key) --//
    document.onkeyup = function (event) {


        // -- This Records which Key is pressed by the user --//
        var userGuess = event.key;

        // Clears Try Again Message When Restart the Game --//
        resultsMesssage.textContent = "";

        //-- This should add the wrong guesses to inputGuess Array --//
        if ((userGuess !== computerLetter) && (guesses !== 0)) {
            inputGuess.push(userGuess);
            guesses--;
            noGuessesLeft.textContent = guesses;
            listGuesses.textContent = inputGuess.join(", ");

        } else if (guesses === 0) {   //(var i = 0; i=0; losses++) -> Tried this which works the same as removing the lower losses++
            losses++;
            numLosses.textContent = "Losses: " + losses;
            inputGuess.splice(0, 8);
            resultsMesssage.textContent = "Haha, You Lose! Press Any Button to Try Again";
            psychicGame();


        } else { //If the Above conditions are both False, then the user must have won. 
            wins++;
            numWins.textContent = "Wins: " + wins;
            inputGuess.splice(0, 8);
            resultsMesssage.textContent = "You Psychic S.O.B.! Press Any To Prove You Can Do It Again";
            psychicGame();
        }

    }

}
// -- This Initiates the Game the FIRST time --//
psychicGame();