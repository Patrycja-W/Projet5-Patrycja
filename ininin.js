//Partie 1

let user = {
  nom: "Wierzbicka",
  prenom: "Patrycja",
  age: 24,
};
let user1 = {
  nom: "Dufort",
  prenom: "Bastien",
  age: 36,
};
let user2 = {
  nom: "Dupont",
  prenom: "Marie",
  age: 58,
};

const list = [user, user1, user2];

// console.log(list[2]);

//Partie 2
const main = document.body.querySelector("#oursons");

// main.innerHTML = `
//   <p>${user1.nom}</p>
//   <p>${user1.prenom}</p>
//   <p>${user1.age}</p>
// `;

// main.innerHTML += `
//   <p>${list[0].nom}</p>
//   <p>${user2.prenom}</p>
//   <p>${user2.age}</p>
// `;

for (let index = 0; index < list.length; index++) {
  console.log(index);
  console.log(list[index]);
  console.log(list[index].nom);
}

//Partie 3

// facon 1
for (let index = 0; index < list.length; index++) {
  main.innerHTML += `
    <h1>${list[index].nom}</h1>
    <p>${list[index].prenom}</p>
    <p>${list[index].age}</p>
  `;
}

// facon 2
list.forEach((element) => {
  console.log(element);
  main.innerHTML += `
    <h1>${element.nom}</h1>
    <p>${element.prenom}</p>
    <p>${element.age}</p>
  `;
});

// facon 3
list.map((element) => {
  main.innerHTML += `
    <h1>${element.nom}</h1>
    <p>${element.prenom}</p>
    <p>${element.age}</p>
  `;
});
