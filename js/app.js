// creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni:
// nome
// ruolo
// foto

const membriTeam = [{
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: 'wayne-barnett-founder-ceo.jpg'
},
{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: 'angela-caroll-chief-editor.jpg'
},
{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: 'walter-gordon-office-manager.jpg'
},
{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: 'angela-lopez-social-media-manager.jpg'
},
{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: 'scott-estrada-developer.jpg'
},
{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: 'barbara-ramos-graphic-designer.jpg'
}
];
// const MembriTeam = [Membro1, Membro2, Membro3, Membro4, Membro5, Membro6];
console.log(`nome: ${membriTeam[4].nome}, ruolo: ${membriTeam[4].ruolo}, foto: ${membriTeam[4].foto}`);

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// console.log(MembriTeam);
const containerDOMElement = document.querySelector('.container');
for (let i = 0; i < membriTeam.length; i++) {
    const membro = membriTeam[i]; // object
    // const Card = `${Membro.foto} 
    // ${Membro.nome}
    // ${Membro.ruolo}`;
    // console.log(Card);

// Stampare le stesse informazioni su DOM semplicemente come stringhe
    const cardDOMElement = document.createElement('div');
    cardDOMElement.classList.add('col-4','px-3');
    cardDOMElement.innerHTML += `<div class="py-2 my-4 bg-white">
    <img src="./img/${membro.foto}" alt="">
    <h4>${membro.nome}</h4>
    <h6>${membro.ruolo}</h6>
    </div>`;

    containerDOMElement.appendChild(cardDOMElement);
}

    