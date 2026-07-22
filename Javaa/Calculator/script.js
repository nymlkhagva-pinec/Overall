const container = document.getElementById("container");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.map((num) => {
    const newBtn = document.createElement("button");
    newBtn.textContent = num;

    newBtn.addEventListener("click" , function(){
        console.log(num);
    });
    container.appendChild(newBtn);
})