window.addEventListener('DOMContentLoaded', (event) => {
    // Generate a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    // Get DOM elements
    const guessInput = document.getElementById('guessInput');
    const result = document.getElementById('result');
    const retryBtn = document.getElementById('retryBtn');

    // Event listener for input event in the input field
    guessInput.addEventListener('input', function() {
    processGuess();
    });

    // Function to process the guess and provide feedback
    function processGuess() {
      // Get the player's guess
    const playerGuess = parseInt(guessInput.value);

      // Compare the guess with the random number
        if (playerGuess === randomNumber) {
        result.textContent = 'Congratulations! You guessed the correct number!';
        result.style.color = 'green';
        } else if (playerGuess < randomNumber) {
        result.textContent = 'Try again! The number is higher.';
        result.style.color = 'red';
        } else {
        result.textContent = 'Try again! The number is lower.';
        result.style.color = 'red';
        }

    result.style.opacity = '1';
    retryBtn.style.display = 'inline-block';
    }

    // Event listener for retry button click
    retryBtn.addEventListener('click', function() {
      // Reset game
        guessInput.value = '';
        result.textContent = '';
        result.style.opacity = '0';
        retryBtn.style.display = 'none';

      // Generate a new random number
      randomNumber = Math.floor(Math.random() * 100) + 1;

      guessInput.focus(); // Set focus back to the input field
    });
    });
