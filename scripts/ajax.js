// Sélection du formulaire de recherche et du conteneur de résultats
const searchForm = document.getElementById("search-form");
const resultsContainer = document.getElementById("results-container");

// Écouteur d'événements pour le formulaire de recherche
searchForm.addEventListener("submit", (event) => {
  // Empêche la soumission du formulaire
  event.preventDefault();

  // Récupération de la valeur de recherche saisie par l'utilisateur
  const searchQuery = document.getElementById("search-input").value;

  // Création de l'URL de l'API à appeler en y incluant la valeur de recherche
  const apiURL = `https://world.openfoodfacts.org/api/v0/product/${searchQuery}.json`;

  // Requête AJAX vers l'API
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiURL);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Traitement de la réponse de l'API
      const data = JSON.parse(xhr.responseText);

      // Récupération du nom du produit
      const productName = data.product.product_name_fr || data.product.product_name || 'Nom du produit inconnu';
      // Récupération de l'URL de la photo
      var photoUrl = data.product.image_url;

      // Création de l'élément image
      var productImage = document.createElement('img');
      productImage.src = photoUrl;

      // Création de l'élément de titre du produit
      var productTitle = document.createElement('h2');
      productTitle.innerText = productName;

      // Ajout des éléments à la page
      resultsContainer.innerHTML = '';
      resultsContainer.appendChild(productTitle);
      resultsContainer.appendChild(productImage);
    }
  };
  xhr.send();
});
