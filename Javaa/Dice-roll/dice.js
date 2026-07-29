const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const dicee = document.querySelector ("#dicee");
const btn = document.querySelector("#roller");
const history = document.getElementById("history");
let result = 0
let count = 0 

btn.addEventListener("click", function (){
    count++;
    let roll = Math.floor(Math.random()*6);
    result = diceFaces[roll];
    dicee.textContent = result;

    const newDiv = document.createElement("div");

    const newDiv2 = document.createElement("div");
    newDiv2.style.width = "150px";
    newDiv2.style.height = "60px";
    newDiv2.style.display = "flex";
    newDiv2.style.alignItems = "center";
    newDiv2.textContent = ("Roll " + count);

    const newDiv23 = document.createElement("div");
    newDiv23.textContent = (result);
    newDiv23.style.width = "50px";
    newDiv23.style.fontSize = "70px";
    newDiv23.style.height = "60px";
    newDiv23.style.display = "flex";
    newDiv23.style.alignItems = "center";

    newDiv.appendChild(newDiv2)
    newDiv.appendChild(newDiv23)
    newDiv.style.width = "900px";
    newDiv.style.height = "80px";
    newDiv.style.fontSize = "40px";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.display = "flex";
    newDiv.style.borderRadius = "20px";
    newDiv.style.background = "white"


    history.appendChild(newDiv);
})



