const i = Math.floor(Math.random() * (999 - 555+1) + 555);
console.log(i);
let guess = Number(prompt("Guess the number between 555-999"));
while (guess !== i) {
    if (guess < i) {
    alert("Too low, try again");
    }
    if (guess > i) {
    alert("Too high, try again"); 
    }
    guess = Number(prompt("Guess the number between 555-999"));
}
alert("You guessed it. The number was " + i);