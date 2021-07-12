const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

fetch("http://localhost:3000/api/teddies/" + id)
  .then(function (response) {
    return response.json();
  })
  .then(function (ourson) {
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
      </div>
    </div>
    `;
    ourson.colors.map((couleur) => {
      document.body.querySelector(
        "#oursonColor"
      ).innerHTML += ` <option value="${couleur}">${couleur}</option>`;
    });
  });
