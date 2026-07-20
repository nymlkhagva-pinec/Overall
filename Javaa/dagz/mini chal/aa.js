const button = document.getElementById("button");
const whole = document.getElementById("whole");

button.addEventListener ("click", function() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    whole.style.backgroundColor = `rgb(${r} ,${g}, ${b})`
});
