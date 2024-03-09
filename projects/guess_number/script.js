// Initialize variables
let random = generateRandomNumber();
let prevGuesses = [];
let numGuess = 0;
const maxGuess = 10;
let playGame = true;

// DOM elements
const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const previousGuessesDisplay = document.querySelector(".guesses");
const remainingGuessesDisplay = document.querySelector(".lastResult");
const lowOrHiDisplay = document.querySelector(".lowOrHi");
let startOvre = document.querySelector("#reset");

// Focus on the input field when the page loads
userInput.focus();

// Event listener for submit button click
submitButton.addEventListener("click", handleGuess);

// Function to handle guess submission
function handleGuess(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
}

// Function to validate the guess
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        // displayMessage("Please enter a valid number between 1 and 100.");
        alert("Please enter a valid number between 1 and 100.");
    } else {
        numGuess++;
        prevGuesses.push(guess);
        displayGuess(guess);
        if (guess === random) {
            displayMessage(`Correct! You guessed the number ${random} in ${numGuess} attempts.`);
            endGame();
        } else if (numGuess === maxGuess) {
            displayMessage(`Game over! The number was ${random}.`);
            endGame();
        } else {
            startOvre.style.display = "inline";
            displayMessage(guess < random ? "Too low!" : "Too high!");
        }
    }
}

// Function to display the guess result
function displayGuess(guess) {
    userInput.value = "";
    previousGuessesDisplay.textContent = prevGuesses.join(", ");
    remainingGuessesDisplay.textContent = maxGuess - numGuess;
}

// Function to display messages
function displayMessage(message) {
    lowOrHiDisplay.textContent = message;
}

// Function to end the game
function endGame() {
    playGame = false;
    userInput.disabled = true;
    submitButton.textContent = "Play Again";
    submitButton.removeEventListener("click", handleGuess);
    submitButton.addEventListener("click", resetGame);
    resetButton.style.display = "none";
}

// Function to reset the game
function resetGame() {
    random = generateRandomNumber();
    prevGuesses = [];
    numGuess = 0;
    previousGuessesDisplay.textContent = "";
    remainingGuessesDisplay.textContent = maxGuess;
    lowOrHiDisplay.textContent = "";
    playGame = true;
    userInput.disabled = false;
    userInput.value = "";
    submitButton.textContent = "Submit Guess";
    submitButton.removeEventListener("click", resetGame);
    submitButton.addEventListener("click", handleGuess);
    resetButton.style.display = "inline-block";
    userInput.focus();
}

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Event listener for reset button click
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => location.reload());
