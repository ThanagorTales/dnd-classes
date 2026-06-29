/*------------- start index main-------------*/
const display = document.getElementById("class-display");
const btns = document.querySelectorAll(".class-card");

const title = document.getElementById("class-title");
const description = document.getElementById("class-text");

let currentClass = "barbarian";
const saibaMaisBtn = document.querySelector(".class-btn");

btns.forEach(btn => {
    btn.addEventListener("click", () =>{

        btns.forEach(button =>{
            button.classList.remove("choosen");
            });
        
        btn.classList.add("choosen");

        currentClass = btn.dataset.class;
        
        display.style.backgroundImage =  `url("images/class-portrait/${currentClass}-portrait.jpg")`;

        title.textContent = classes[currentClass].title;
        description.textContent = classes[currentClass].description
    });

    
});

saibaMaisBtn.addEventListener("click", () =>{
    window.location.href = `classes/${currentClass}.html`
});

const classes = {
    barbarian: {
        title: "Bárbaro:",
        description: "Guerreiro feroz que luta com força bruta e em fúria para resistir a golpes e causar enorme dano. Usa armas pesadas, pouca armadura e inspira a imagem de um combatente selvagem, destemido e quase impossível de parar em batalha."
    },

    bard: {
        title: "Bardo:",
        description: "Artista que usa música, poesia ou atuação para lançar magia, inspirar aliados e confundir inimigos. Resolve desafios com criatividade, conversa e versatilidade, sempre exibindo charme, talento e um toque de espetáculo em tudo que faz."
    },
    cleric: {
        title: "Clérigo:",
        description: "Servo de uma divindade que usa magia sagrada para curar, proteger aliados e enfrentar o mal. Mistura fé, combate e milagres, vestindo símbolos religiosos e irradiando autoridade, esperança ou justiça conforme sua crença divina."
    },
    druid: {
        title: "Druida:",
        description: "Guardião da natureza que controla plantas, animais e os elementos, podendo assumir formas de criaturas. Representa equilíbrio e vida selvagem, lutando com magia natural e uma forte conexão com o mundo ao seu redor."
    },
    fighter: {
        title: "Guerreiro:",
        description: "Especialista em combate físico que domina armas, armaduras e técnicas de batalha. É resistente, confiável e adaptável, podendo proteger aliados ou atacar sem descanso, representando o arquétipo clássico do herói combatente."
    },
    monk: {
        title: "Monge:",
        description: "Lutador disciplinado que usa corpo, mente e energia interior para combater sem depender de armas pesadas. Move-se rapidamente, desfere muitos golpes e demonstra equilíbrio, precisão e domínio absoluto de si mesmo."
    },
    paladin: {
        title: "Paladino:",
        description: "Cavaleiro sagrado que une combate e magia por meio de um juramento. Protege aliados, derrota inimigos com poder divino e simboliza coragem, honra e determinação, brilhando como defensor incansável contra grandes ameaças."
    },
    ranger: {
        title: "Patrulheiro:",
        description: "Explorador que domina sobrevivência, rastreamento e combate à distância ou corpo a corpo. Usa habilidades ligadas à natureza para proteger aliados e caçar inimigos, evocando a imagem de um aventureiro experiente e preciso."
    },
    rogue: {
        title: "Ladino:",
        description: "Especialista em furtividade, precisão e astúcia. Ataca pontos fracos para causar muito dano, abre fechaduras, desarma armadilhas e resolve problemas com habilidade, agilidade e inteligência."
    },
    sorcerer: {
        title: "Feiticeiro:",
        description: "Conjurador cujo poder nasce dentro de si, herdado por sangue, magia ou eventos extraordinários. Lança feitiços com grande flexibilidade e intensidade, exibindo uma presença marcante e um talento mágico tão natural quanto respirar."
    },
    warlock: {
        title: "Bruxo:",
        description: "Conjurador que recebe poderes por um pacto com uma entidade poderosa. Combina magia sombria, ataques místicos e habilidades únicas, transmitindo uma aparência misteriosa, sobrenatural e marcada pela influência de seu patrono."
    },
    wizard: {
        title: "Mago:",
        description: "Estudioso que aprende magia por meio de pesquisa e estudo. Possui a maior variedade de feitiços, adaptando-se a quase qualquer situação, mas depende de planejamento e proteção por ser fisicamente frágil em combate direto."
    },

}

/*------------- end index main-------------*/