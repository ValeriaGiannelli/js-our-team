/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe*/


// array di oggetti con i memebri del team:
const ourTeam = [
    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroli",
        "ruolo": "Chief Editor",
        "foto": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg"
    },
    {
        "nome": "barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "img/barbara-ramos-graphic-designer.jpg"
    },
];

console.log(ourTeam);

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// ciclo nell'array per andare a prendere i singoli oggetti 
for(let i = 0; i < ourTeam.length; i++){
    // in una variabile salvo i singoli oggetti (le persone)
    let teamPerson = ourTeam[i];
    // per ogni oggetto preso poi stampo le informazioni al suo interno (for...in anche se sono poche le info)
    for(let key in teamPerson){
        console.log(key, ":", teamPerson[key]);
    }

}