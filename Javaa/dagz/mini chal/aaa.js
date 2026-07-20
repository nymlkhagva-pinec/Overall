const number = document.getElementById("number");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
let count = 0;

minus.addEventListener("click", function () {
    count = count - 1;
    number.textContent = count;
});

plus.addEventListener("click", function() {
    count = count + 1;
    number.textContent = count;
});

reset.addEventListener("click", function(){
    count = 0;
    number.textContent = count;
});