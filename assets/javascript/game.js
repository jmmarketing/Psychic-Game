// Page Loads
// Computer Randomly Selects a Letter
// User Presses Key
// --- If UserKey === Computer Letter && Guesses > 0
// -------Wins Go Up by 1
// -------Remaining Guesses Resets to 9
// ------- Guesses gets Cleared Out
// ------- Computer Picks New Letter
// --- Else if Userkey !== Computer Letter && Guesses > 0
// ------- Remaining Guesses go down by 1
// ------- Guessesed letters are recorded 
// --- Else if Guesses === 0
// ------- Losses goes up 1
// ------- Guesses are cleared out
// ------- Guess count resets to 9
// ------- Try again message 
// ------- Computer repicks letter

// Notes: Put computer pick in its own function. Try using If statements one after the other. 

// Function to call new Random Computer Letter when needed. 
function randomCompLetter (){
    // -- List of letters computer can choose from --//
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // -- Randomly chooses the Computer letter --//
    computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetter)

}
    // -- Variables to hold the number of wins, losses, & guesses info --//
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var inputGuess = [];
    var computerLetter ="";

    // -- Display Statistics Variables --//
    var noGuessesLeft = document.getElementById("guessLeft");
    var listGuesses = document.getElementById("youHaveGuessed");
    var numLosses = document.getElementById("noLosses");
    var numWins = document.getElementById("noWins");
    var resultsMesssage = document.getElementById("gameMessage");

    // Initiates the first Computer Letter Choice. 
    randomCompLetter();
    
    // -- This function runs when a user guesses (aka presses a key) --//
    document.onkeyup = function (event) {
        

        // -- This Records which Key is pressed by the user --//
        var userGuess = event.key;

        // Clears Try Again Message When Restart the Game --//
        resultsMesssage.textContent = "";
        
        // Logic for Winner
        if ((userGuess === computerLetter) && (guesses >= 1)){ 
            wins++;
            numWins.textContent = "Wins: " + wins;
            inputGuess.splice(0, 10);
            guesses = 10;
            resultsMesssage.textContent = "Winner! New Letter Selected. Keep Going!";
            randomCompLetter();
        
        }
        //-- This should add the wrong guesses to inputGuess Array --//
        if ((userGuess !== computerLetter) && (guesses >= 1)) {
            inputGuess.push(userGuess);
            guesses--;
            noGuessesLeft.textContent = guesses;
            listGuesses.textContent = inputGuess.join(", ");


        } 
        //Logic for Loser
        if (guesses === 0) {   
            losses++;
            numLosses.textContent = "Losses: " + losses;
            inputGuess.splice(0, 10);
            guesses = 9;
            resultsMesssage.textContent = "Loser!! New Letter Selected. Keep Guessing.";
            randomCompLetter();

        } 
        


    }