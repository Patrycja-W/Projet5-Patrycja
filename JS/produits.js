let PRODUCT_IN_LOCALSTORAGE = JSON.parse(localStorage.getItem("panier"));

const fetchTeddies = async () => {
  //on récupère l'id depuis la barre d'URL

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  //on defini le résultat de l'appel api dans "ourson"

  ourson = await fetch("http://localhost:3000/api/teddies/" + id)
    .then((res) => res.json())
    .catch((err) => console.log("Erreur lié à l'API : " + err));
};

const ajoutPanier = () => {
  //on déclare un object contenant la description de l'article ajouté au panier

  let monOurson = {
    _id: ourson._id,
    quantity: 1,
  };

  //on creer une boucle afin d'incrémenter la quantité enregistrer en localStorage
  let newProduct = 1;
  for (let i = 0; i < PRODUCT_IN_LOCALSTORAGE.length; i++) {
    if (PRODUCT_IN_LOCALSTORAGE[i]._id === monOurson._id) {
      PRODUCT_IN_LOCALSTORAGE[i].quantity++;
      newProduct = 0;
    }
  }

  //ajoute dans le tableau "monOurson" les valeurs choisi par l'utilisateur
  if (newProduct === 1) PRODUCT_IN_LOCALSTORAGE.push(monOurson);

  //convertir les données au format "JSON" qui sont dans le "localStorage" en Javascript
  localStorage.setItem("panier", JSON.stringify(PRODUCT_IN_LOCALSTORAGE));
};
const ajoutLs = () => {
  if (PRODUCT_IN_LOCALSTORAGE) return ajoutPanier();
  PRODUCT_IN_LOCALSTORAGE = [];
  ajoutPanier();
};
const showProduct = async () => {
  await fetchTeddies();

  oursonsProduits.innerHTML = `
  <div class="bears-description">
    <img class="bears-description__img" src="${
      ourson.imageUrl
    }" alt="Appareil photo id:${ourson._id}"/>
    <div class="bears-description__total">
      <h2 class="bears-description__name">${ourson.name}</h2>
      <h3 class="bears-description__price">${ourson.price / 100} €</h3>
      <select class="bears-description__color" id="oursonColor">
      </select>
      <h3 class="bears-description__desc">${ourson.description}</h3>
      <button class="bears-description__ajoutPanier" type="button" onclick="ajoutLs()"> "J'ajoute à mon panier !" </button>
    </div>
  </div>
  `;

  ourson.colors.map((couleur) => {
    document.body.querySelector(
      "#oursonColor"
    ).innerHTML += ` <option value="${couleur}">${couleur}</option>`;
  });
};

showProduct();
