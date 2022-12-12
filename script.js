let button = document.querySelector("button");
button.addEventListener("click", addMsg);

function addMsg(){

    let area = document.getElementById("notearea");
    let checkbox = document.getElementById("check").checked;
    let currentDate = new Date();
    let dateTime = currentDate.toString().substring(0,24);
    let nameDate = document.createElement("h2");
    let newNote = document.createElement("p");

        nameDate.textContent = dateTime + " " + "(" + document.getElementById("username").value + ")";
        newNote.textContent = document.getElementById("note").value;

        area.appendChild(nameDate);
        area.appendChild(newNote);

        if (checkbox == true){
        document.querySelector("p:last-child").classList.add("important");
        }

        document.getElementById("note").value = "";
}