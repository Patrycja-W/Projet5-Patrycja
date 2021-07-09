// PAGE D'ACCUEIL
fetch("http://localhost:3000/api/teddies")
  .then(function (response) {
    return response.json();
  })
  .then(function (teddies) {
    oursons.innerHTML = teddies
      .map(
        (ourson) =>
          `
          <a class="bears"  href="./produits.html?id=${ourson._id}">
            <img class="bears-img" src="${ourson.imageUrl}" alt="Appareil photo id:${ourson._id}"/>
            <h2 class="bears-name">${ourson.name}</h2>
            <h3 class="bears-price">${ourson.price} €</h3>
            <h3 class="bears-desc">${ourson.description}</h3>
          </a>
          `
      )
      .join("  ");
  });
