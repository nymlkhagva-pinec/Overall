const temp = document.querySelector("#number")
const greet = document.querySelector("#greet")
temp.addEventListener("input", function (){
    console.log("Ta unuudur huurhun haragdjiin <3");
})
const button = document.querySelector("#button")
button.addEventListener("click", function () {
    if (selector.value == "celsius" && selector1.value == "celsius1") {
        greet.textContent = temp.value + "°C";
    } 
    if (selector.value == "fahrenheit" && selector1.value == "fahrenheit1") {
        greet.textContent = temp.value = "°F";
    } 
    if (selector.value == "kelvin" && selector1.value == "kelvin1") {
        greet.textContent = temp.value + "K";
    } 
    if (selector.value == "celsius" && selector1.value == "fahrenheit1") {
        greet.textContent = temp.value * 1.8 + 32 + "°F";
    } 
    if (selector.value == "celsius" && selector1.value == "kelvin1") {
        greet.textContent = temp.value * 1 + 273.15 + "K";
    } 
    if (selector.value == "fahrenheit" && selector1.value == "celsius1") {
        greet.textContent = (temp.value - 32) / 1.8 + "°C";
    }
    if (selector.value == "fahrenheit" && selector1.value == "kelvin1") {
        greet.textContent = (temp.value - 32) / 1.8 + 273.15 + "K";
    }
    if (selector.value == "kelvin" && selector1.value == "celsius1") {
        greet.textContent = temp.value - 273.15 + "°C";
    }
    if (selector.value == "kelvin" && selector1.value == "fahrenheit1") {
        greet.textContent = temp.value - 273.15 + "°F"
    }
    
})
const selector = document.querySelector("#selector");
const selector1 = document.querySelector("#selector1");