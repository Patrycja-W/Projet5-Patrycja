// if (localStorage.getItem("panier") === null)
//   return alert("votre panier est vide");

const callOurson = async (id) => {
  const response = await fetch(`http://localhost:3000/api/teddies/${id}`);

  return response.json();
};

const displayPanier = () => {
  const listOursons = JSON.parse(localStorage.getItem("panier"));
  console.log(listOursons);

  listOursons.forEach(async (element) => {
    console.log(element);
    const ourson = await callOurson(element._id);

    getPanier.innerHTML += `
    <tr>
    <td>
    <img
    src="${ourson.imageUrl}"
    alt="Photo de l'appareil ${ourson.name}"
    style="height:200px;width:200px;object-fit:cover;"
    />
    </td>
    <td>
      <h3>Designation : </h3>
      ${ourson.name}
    </td>
    <td>
      <h3>Prix : </h3>
      ${ourson.price / 100} €
    </td>
    <td>
      <h3>Quantité : </h3>
      <i class="fas fa-minus-square fa-lg" title="Diminuer la quantité"></i><span> ${
        element.quantity
      } </span><i class="fas fa-plus-square fa-lg"  title="Augmenter la quantité"></i>
    </td>
    <td>
      <h3 >Sous-Total : </h3>
      <span >${(element.quantity * ourson.price) / 100}</span> €
    </td>
    <td><i class="far fa-times-circle fa-2x" title="Supprimer l'article"></i></td>
    </tr>
    `;
  });
};

displayPanier();

/*

  1: Affiché message si le panier est vide : condition si / sinon
  2: Design css et/ou modification html
  3: rendre dynamique prix / quantité / total
  4: Formulaire de validation de commande
  5: Confirmation de commande (envoie des données pour recevoir un numéro de commande)

*/
