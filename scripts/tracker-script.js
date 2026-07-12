const form = document.getElementById('tracker-form');
const tableBody = document.getElementById('table-body');

const charInput = document.getElementById('character');
const initiativeInput = document.getElementById('initiative');
const acInput = document.getElementById('ac');
const hpInput = document.getElementById('hp');

let charList = [];

let nextId = 1;
let editingId = null;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = charInput.value.trim().toUpperCase();
    const initiative = parseInt(initiativeInput.value);
    const ac = parseInt(acInput.value);
    const hp = parseInt(hpInput.value);
   
    if(editingId === null){
        const character = {
        id: nextId++,
        name,
        initiative,
        ac,
        hp
        };
        charList.push(character);
    } else {
        const character = charList.find(char => char.id === editingId);
        character.name = name;
        character.initiative = initiative;
        character.ac = ac;
        character.hp = hp;

        editingId = null;
    }

charList.sort((a,b)=> b.initiative - a.initiative);
renderTable();
form.reset();

});

function renderTable() {
    tableBody.innerHTML = ''; 
    charList.forEach((char, index) => {
        const row = document.createElement('tr');
        row.dataset.id = char.id;
        row.innerHTML = `
            <td>${index + 1 }</td>
            <td>${char.initiative}</td>
            <td>${char.name}</td>
            <td>${char.ac}</td>
            <td>${char.hp}</td>
            <td>
                <button class="edit-btn material-symbols-outlined">
                       edit 
                </button>

                <button class="delete-btn material-symbols-outlined">
                    close 
                </button>
            </td>
        `;
        tableBody.appendChild(row);
        
    })
}

tableBody.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    if(!row) return;
    const id = Number(row.dataset.id);

    if(event.target.classList.contains("delete-btn")){
        charList = charList.filter(char => char.id !== id);
        renderTable();
        
    }
   if(event.target.classList.contains("edit-btn")){
        const character = charList.find(char => char.id === id);
        editingId = character.id;

        initiativeInput.value = character.initiative;
        charInput.value = character.name;
        acInput.value = character.ac;
        hpInput.value = character.hp;

   }
  
})

console.log(charList);