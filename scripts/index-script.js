const display = document.getElementById("class-display");
const btns = document.querySelectorAll(".class-card");

const title = document.getElementById("class-title");
const description = document.getElementById("class-text");



btns.forEach(btn => {
    btn.addEventListener("click", () =>{

        btns.forEach(button =>{
            button.classList.remove("choosen");
            });
        
        btn.classList.add("choosen");

        const className = btn.dataset.class;
        
        display.style.backgroundImage =  `url("../images/class-portrait/${className}-portrait.jpg")`;

        title.textContent = classes[className].title;
        description.textContent = classes[className].description
    });

    
});


const classes = {
    barbarian: {
        title: "Barbarian:",
        description: "A fierce warrior of primitive background..."
    },

    bard: {
        title: "Bard:",
        description: "An inspiring musician and spellcaster..."
    },
}