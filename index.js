let teddies;

const fetchTeddies = async () => {
  teddies = await fetch("http://localhost:3000/api/teddies").then((res) =>
    res.json()
  );
};

///////////////////////////////////

const showTeddies = async () => {
  await fetchTeddies();

  oursons.innerHTML = teddies
    .filter((ourson) => ourson.name)
    .map(
      (ourson) =>
        `
        <li class="Bers-item">
          <img class="Bears-img" src="${ourson.imgUrl}"/>
          <h2 class="Bears-name">${ourson.name}</h2>
          <h3 class"Bears-price">${numWithSpace(ourson.price)} €</h3>
          <h3 class="Bears-desc">${ourson.description}</h3>
        </li>
    `
    )
    .join("");
};

showTeddies();

function numWithSpace(prix) {
  return prix.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "   ");
}
