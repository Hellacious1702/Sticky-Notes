const NotesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('Input-Box');

let Discard = document.getElementById('discardaudio');

function updateStorage(){
    localStorage.setItem("notes", NotesContainer.innerHTML);
}

function showNotes(){
    NotesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "Input-Box";
    inputBox.setAttribute("contenteditable" , "true");
    inputBox.setAttribute("spellcheck" , "true");
    img.src = "Resources/Icons/trash-solid.svg";
    NotesContainer.appendChild(inputBox).appendChild(img);
})

NotesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
        Discard.play();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".Input-Box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})