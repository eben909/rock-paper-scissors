// script.js
document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    const images = document.querySelectorAll(".choice");
    const resultImagesDiv = document.getElementById("result-images");
    const playerChoiceImage = document.getElementById("player-choice-image");
    const computerChoiceImage = document.getElementById("computer-choice-image");
    const message = document.getElementById("message");
    const playAgainButton = document.getElementById("play-again");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const playerChoice = image.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];

            // Set the source of the result images
            playerChoiceImage.src = `${playerChoice}.png`; // Ensure these image files exist
            computerChoiceImage.src = `${computerChoice}.png`; 

            // Show the result images and outcome message
            resultImagesDiv.classList.remove('hidden');
            images.forEach(img => img.classList.add('hidden')); // Hide the choices
            playAgainButton.classList.remove('hidden');

            // Determine and display the result
            const result = determineWinner(playerChoice, computerChoice);
            message.textContent = result; // Use the correct element to display result
        });
    });

    // Restart the game
    playAgainButton.addEventListener("click", () => {
        images.forEach(img => img.classList.remove('hidden'));
        resultImagesDiv.classList.add('hidden');
        playAgainButton.classList.add('hidden');
        message.textContent = "Make your move!";
    });

    // Function to determine the winner
    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock")
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
});
