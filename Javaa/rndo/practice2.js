/* ===========================================================
                    IF ELSE PRACTICE
=========================================================== */
 
/* ========================= EASY ========================= */
 
// E1. Print "Adult" if age >=18,
// otherwise print "Child".
const age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Child");
}
 
 
// E2. Print "Pass" if score >=60,
// otherwise "Fail".
const score = 55;
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
 
 
// E3. Print "Positive"
// or "Negative".
const number = -7;
if (number > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
 
 
// E4. Print "Even"
// or "Odd".
const value = 15;
if (value % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
 
 
// E5. Print "Hot"
// if temperature >30,
// otherwise "Cold".
const temperature = 28;
if (temperature > 30) {
  console.log("Hot");
} else {
  console.log("Cold");
}
 
 
/* ======================== MEDIUM ======================== */
 
// M1. Grade
// 90+ A
// 80+ B
// 70+ C
// else F
const score2 = 84;
if (score2 >= 90) {
  console.log("A");
} else if (score2 >= 80) {
  console.log("B");
} else if (score2 >= 70) {
  console.log("C");
} else {
  console.log("F");
}
 
 
// M2. Movie ticket
// age <5 -> Free
// otherwise Paid
const age2 = 3;
if (age2 < 5) {
  console.log("Free");
} else {
  console.log("Paid");
}
 
 
// M3. Print
// "Can Drive"
// only if age>=18
// and hasLicense.
const age3 = 20;
const hasLicense = false;
if (age3 >= 18 && hasLicense) {
  console.log("Can Drive");
}
else {
  console.log("Can't Drive");
}
 
 
// M4. Login
// username == admin
// password ==1234
const username = "admin";
const password = "1234";
if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}
 
 
// M5. Print
// "Battery Low"
// if battery<20.
const battery = 18;
if (battery < 20) {
  console.log("Battery Low");
} else {
  console.log("Battery fine");
}
 
/* ========================= HARD ========================= */
 
// H1. ATM
// Withdraw only if
// balance>=amount.
const balance = 50000;
const amount = 30000;
if (balance >= amount) {
  console.log("Withdraw Successful");
} else {
  console.log("Insufficient Balance");
}
 
 
// H2. Theme
// if hour>=6 && hour<18
// Day
// else Night
const hour = 21;
if (hour >= 6 && hour < 18) {
  console.log("Day");
} else {
  console.log("Night");
}
 
// H3. Triangle
// Check whether
// a,b,c
// can form a triangle.
const a = 3;
const b = 4;
const c = 5;
if (a + b > c && a + c > b && b + b > a) {
    console.log("Can form a triangle");
} else {
    console.log("Can't form a triangle");
} 
 
 
// H4. BMI
// bmi>=25 Overweight
// bmi>=18.5 Normal
// else Underweight
const bmi = 22.4;
if (bmi >= 25) {
    console.log("Overweight");
} else if (bmi >= 18.5) {
    console.log("Normal");
} else {
    console.log("Underweight");
}

// H5. Rock Paper Scissors
// Compare player and computer.
// Print Winner / Draw.
const player = "rock";
const computer = "scissors";
if (player === computer) {
    console.log("Draw");
} else if (player === "rock" && computer === "scissors" ||
    player === "scissors" && computer === "paper" ||
    player === "paper" && computer === "rock") {
    console.log("Player Wins");
} else {
    console.log("Computer Wins");
}