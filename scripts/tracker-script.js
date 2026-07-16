const form = document.getElementById('tracker-form');
const tableBody = document.getElementById('table-body');

const charInput = document.getElementById('character');
const initiativeInput = document.getElementById('initiative');
const acInput = document.getElementById('ac');
const hpInput = document.getElementById('hp');

const startBtn = document.getElementById("start-btn");
const nextTurnBtn = document.getElementById("nextTurn-btn");
const previousTurnBtn = document.getElementById("previousTurn-btn");
const roundTxt = document.getElementById('round');
const addBtn = document.getElementById('add-save');

let charList = [];

let nextId = 1;
let editingId = null;

let currentTurn = 0;
let currentRound = 1;

let combatStarted = false;

const startIcon = startBtn.querySelector(".material-symbols-outlined");
const startText = startBtn.querySelector(".btn-text");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = charInput.value.trim().toUpperCase();
    const initiative = parseInt(initiativeInput.value);
    const ac = parseInt(acInput.value);
    const hp = parseInt(hpInput.value);
   
    if(
        name === "" || isNaN(initiative)|| isNaN(ac)|| isNaN(hp)
    ){
        alert("Preencha todos os campos.");
        return;
    }  
    
    if(initiative < 0 || ac < 0 || hp < 0){
            alert("Valores inválidos.");
            return;
    }
    
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

        addBtn.textContent = "ADICIONAR PERSONAGEM";
    }

    charList.sort((a,b)=> b.initiative - a.initiative);
    renderTable();
    form.reset();

});

startBtn.addEventListener('click', (event) =>{

    if (charList.length === 0) return;

    combatStarted = true;
    currentTurn = 0;
    currentRound = 1;

    startIcon.textContent = "autorenew";
    startText.textContent = "RECOMEÇAR";
    renderTable();
})


nextTurnBtn.addEventListener('click', () =>{
    nextTurn();
})

previousTurnBtn.addEventListener('click', () =>{
    previousTurn();
})

tableBody.addEventListener('click', (event) => {
    const row = event.target.closest('tr');
    if (!row) return;

    const id = Number(row.dataset.id);

    if (event.target.closest(".delete-btn")) {

        const character = charList.find(char => char.id === id);

        if (!confirm(`Deseja realmente excluir "${character.name}"?`)) {
            return;
        }

        charList = charList.filter(char => char.id !== id);
        if (charList.length === 0) {
            combatStarted = false;
            currentTurn = 0;
            currentRound = 1;
            startIcon.textContent = "play_arrow";
            startText.textContent = "COMEÇAR";
        } else if (currentTurn >= charList.length) {
            currentTurn = charList.length - 1;
        }

        renderTable();
        return;
    }

    if (event.target.closest(".edit-btn")) {

        const character = charList.find(char => char.id === id);

        editingId = character.id;

        initiativeInput.value = character.initiative;
        charInput.value = character.name;
        acInput.value = character.ac;
        hpInput.value = character.hp;

        addBtn.textContent = "SALVAR ALTERAÇÕES";
    }

});

function nextTurn(){
    if (charList.length === 0) return;

    if(currentTurn < charList.length - 1){
        currentTurn++;
    } else {
        currentTurn = 0;
        currentRound++;
    }
    renderTable();
}
function previousTurn(){
    if (charList.length === 0) return;

    if(currentTurn > 0){
        currentTurn--;
    } else {
        currentTurn = charList.length - 1;
        if (currentRound > 1) {
            currentRound--;
        }
    }
    
    renderTable();
    console.log(currentTurn, currentRound);
}
function renderTable() {
    tableBody.innerHTML = ''; 
    charList.forEach((char, index) => {
        const row = document.createElement('tr');
        if(index === currentTurn && combatStarted === true){
            row.classList.add("active-turn");
        }

        let skullIcon = "";
        let deadClass = "";
        
        if(char.hp <= 0){
            deadClass = ("dead-character");
            skullIcon = `<span class="material-symbols-outlined">skull</span>`;
        }

        row.dataset.id = char.id;
        row.innerHTML = `
            <td>${char.hp <= 0 ? skullIcon : char.initiative}</td>
            <td class="${deadClass}">${char.name}</td>
            <td>${char.ac}</td>
            <td>${char.hp}</td>
            <td>
                <button class="edit-btn">
                    <span class="material-symbols-outlined">edit</span>
                </button>

                <button class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    })
    roundTxt.innerHTML = currentRound;
}

