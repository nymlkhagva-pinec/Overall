const input = document.getElementById("input");
const btnAdd = document.getElementById("btn-add");
const listBox = document.getElementById("list-box");

btnAdd.addEventListener("click" , function() {
    if (input.value === "") return;
    const ptag = document.createElement("p");
    const task = document.createElement("div");
    task.classList.add("task");
    ptag.textContent = input.value;

    const buttons = document.createElement("div");
    buttons.style.display = "flex";
    buttons.style.gap = "10px";

    const undo = document.createElement("button");
    undo.textContent = "Undo";
    undo.style.display = "none";
    undo.classList.add("btns")

    const save = document.createElement("button");
    save.textContent = "Save";
    save.style.display = "none";
    save.classList.add("btns")

    const delet = document.createElement("button");
    delet.textContent = "Delete";
    delet.classList.add("btns")

    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.classList.add("btns")

    const done = document.createElement("button");
    done.textContent = "Done";
    done.classList.add("btns")

    buttons.appendChild(save);
    buttons.appendChild(edit);
    buttons.appendChild(delet);
    buttons.appendChild(done);
    buttons.appendChild(undo);
    
    task.appendChild(ptag);
    task.appendChild(buttons);
    
    listBox.appendChild(task);

    input.value = "";
    
    
    delet.addEventListener("click" , function(){
        task.remove();
    })
    
    edit.addEventListener("click" , function(){
        const inputt = document.createElement("input");
        task.prepend(inputt);
        inputt.value = ptag.textContent;
        save.style.display = "block"
        edit.style.display = "none";
        ptag.style.display = "none";

        save.addEventListener("click" , function(){
        ptag.textContent = inputt.value;
        ptag.style.display = "block";
        inputt.style.display = "none";
        save.style.display = "none";
        edit.style.display = "block";
        })
    })
    done.addEventListener("click" , function(){
        ptag.style.textDecoration= "line-through";
        ptag.style.opacity = 0.5;
        done.style.display = "none";
        edit.style.display = "none";
        delet.style.display = "block";
        save.style.display = "none";
        undo.style.display = "block";

    })
    undo.addEventListener("click" , function(){
        ptag.style.textDecoration= "none";
        ptag.style.opacity = 1;
        done.style.display = "block";
        edit.style.display = "block";
        delet.style.display = "block";
        save.style.display = "none";
        undo.style.display = "none";
    })

    

})