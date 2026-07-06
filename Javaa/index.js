/* ===========================================================

                    VARIABLES PRACTICE

=========================================================== */
 
/* ========================= EASY ========================= */
 
// E1. Create a variable called firstName

// and store your first name.

// Print it.

let firstName = ("Nymaa")
console.log(firstName) 
 
// E2. Create variables age and country.

// Print:

// I am 15 years old and I live in Mongolia.

let age = 15
let country = ("Mongolia")
console.log("I am " + age + " years old and I live in " + country + ".")
 
 
// E3. Create width = 8 and height = 5.

// Print the rectangle area.

let width = 8
let height = 5
let area = width * height
console.log("The rectangle area is " + area + ".")
 
 
// E4. Create score = 70.

// Increase it by 20.

// Print the new score.

let score = 70
 score += 20
console.log("The new score is " + score + ".")
 
// E5. Create const PI = 3.14.

// Print it.

const PI = 3.14
console.log(PI)
 
 
/* ======================== MEDIUM ======================== */
 
// M1. Ask the user for their name.

// Store it in a variable.

// Print:

// Welcome, Bat!

let name = prompt("What is your name?")
console.log("Welcome, " + name + "!")
 
 
// M2. Ask for age.

// Print:

// Next year you will be 16.

let age2 = Number(prompt("What is your age?"))
let nextyearage = (age2 + 1)
console.log("Next year you will be " + nextyearage + ".")
 
// M3. Ask for product price and quantity.

// Store them in variables.

// Print the total price.

let price = prompt("What is the product price?")
let quantity = prompt("What is the quantity?")
let totalPrice = (price * quantity)
console.log("The total price is " + totalPrice + ".")
 
 
// M4. Create variables:

// firstName

// lastName

// Print the full name.

let firstname2 = prompt ("What is your first name?")
let lastname2 = prompt ("What is your last name?")
console.log("Your full name is " + firstname2 + " " + lastname2 + ".")

 
// M5. Create x = 5 and y = 10.

// Swap their values.

// Print x and y.

let x = 5
let y = 10
console.log("x = " + y + ", y = " + x)
 
 
/* ========================= HARD ========================= */
 
// H1. Ask for three subject scores.

// Store each score in a variable.

// Print the average.

let score1 = Number(prompt("What is your first subject score?"))
let score2 = Number(prompt("What is your second subject score?"))
let score3 = Number(prompt("What is your third subject score?"))
let average = (score1 + score2 + score3) / 3
console.log("The average score is " + average + ".")
 
 
// H2. Ask for monthly salary and bonus.

// Print yearly income.

// Formula:

// (salary + bonus) * 12

let salary = Number(prompt("What is your monthly salary?"))
let bonus = Number(prompt("What is your monthly bonus?"))
let yearlyIncome = (salary + bonus) * 12
console.log("Your yearly income is " + yearlyIncome + ".")
 
 
// H3. Ask for total money and number of friends.

// Print how much each friend receives.

let totalMoney = Number(prompt("What is the total money?"))
let numberOfFriends = Number(prompt("How many friends?"))
let moneyPerFriend = totalMoney / numberOfFriends
console.log("Each friend receives " + moneyPerFriend + ".")
 
 
// H4. Ask for Celsius.

// Convert to Fahrenheit.

let Celsius = Number(prompt("What is the temperature in Celsius?"))
let Fahrenheit = (Celsius * 9/5) + 32
console.log("The temperature in Fahrenheit is " + Fahrenheit + ".")
 
 
// H5. Ask for distance and time.

// Print average speed.

let distance = Number(prompt("What is the distance in kilometers?"))
let time = Number(prompt("What is the time in hours?"))
let averageSpeed = distance / time 
console.log("The average speed is " + averageSpeed + " km/h.")
 