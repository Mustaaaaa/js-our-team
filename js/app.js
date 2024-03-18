// creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni:
// nome
// ruolo
// foto

const Membro1 = {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg'    
}
const Membro2 = {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg'    
}
const Membro3 = {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg'    
}
const Membro4 = {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg'    
}
const Membro5 = {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg'    
}
const Membro6 = {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg'    
}

const MembriTeam = [Membro1, Membro2, Membro3, Membro4, Membro5, Membro6];


// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// console.log(MembriTeam);
for (let i = 0; i < MembriTeam.length; i++) {
    const Membro = MembriTeam[i] // object
    // const card = `${Membro.foto}, ${Membro.nome}, ${Membro.ruolo}`
    // console.log(card)
    
// Stampare le stesse informazioni su DOM semplicemente come stringhe
    const containerDOMElement = document.querySelector('.container');
    const cardDOMElement = document.createElement('div');
    cardDOMElement.classList.add('col-4');
    cardDOMElement.innerHTML += `<div class="my-4">${Membro.foto}
    <h4>${Membro.nome}</h4>
    <h6>${Membro.ruolo}</h6>
    </div>`;

    containerDOMElement.appendChild(cardDOMElement)
}

    