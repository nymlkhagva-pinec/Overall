const container = document.getElementById("container");
const initialStudents = [
  {
    id: 1,
    name: "Anu",
    score: 90,
  },
  {
    id: 2,
    name: "Bat",
    score: 65,
  },
  {
    id: 3,
    name: "Saraa",
    score: 85,
  },
  {
    id: 4,
    name: "Bold",
    score: 55,
  },
  {
    id: 5,
    name: "Erdene",
    score: 75,
  },
];

initialStudents.map((student) => {
  const newDiv = document.createElement("div");
  const textbox = `${student.name}   ${student.score}`;
  newDiv.textContent = textbox;
  newDiv.style.background = "lightcoral";
  newDiv.style.border = "5px solid gray";
  newDiv.style.width = "400px";
  newDiv.style.height = "200px";
  container.appendChild(newDiv);
});
