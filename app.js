const userGuess = +prompt("Enter a number between 1 to 10: ");
const mySecretNumber = 7;
if (userGuess > 0 && userGuess <= 10) {
  if (userGuess === mySecretNumber) {
    console.log("Congratulation! You got it right.");
  } else {
    console.log("Sorry! You got it wrong.");
  }
} else {
  console.log("Please enter a number between 1 to 10.");
}
