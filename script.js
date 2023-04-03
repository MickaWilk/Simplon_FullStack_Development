function notationEnEtoiles(note) {
  let etoiles = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(note)) {
      etoiles += "★";
    } else {
      etoiles += "☆";
    }
  }
  return etoiles;
}

function randomDate() {
  // Générer une date aléatoire en 2023
  const dateDebut = moment('2023-01-01');
  const dateFin = moment('2023-12-31');
  const randomTimestamp = dateDebut + Math.random() * (dateFin - dateDebut);
  const randomDate = moment(randomTimestamp).format('DD/MM/YYYY');
  return randomDate;
}


const cartesDiv = document.getElementById("cartes");

// Générer 10 lieux aléatoires
for (let i = 0; i < 20; i++) {
  const nom = `Lieu ${i+1}`;
  const note = Math.floor(Math.random() * 5) + 1; // Générer une note entre 1 et 5
  const type = Math.random() > 0.5 ? "Particulier" : "Professionnel"; // Choisir aléatoirement entre Particulier et Professionnel
  const dates = `03 - 30`
  const prix = Math.floor(Math.random() * 300) + 50; // Générer un prix entre 50 et 350

  const imgSrc = `https://picsum.photos/300/200?random=${i+1}`;
  const carte = `
    <div class="carte">
      <img src="${imgSrc}" alt="${nom}">
      <div class="informations">
        <h2>${nom}</h2>
        <div class="notes">
          <span class="etoiles">${notationEnEtoiles(note)}</span>
        </div>
        <p>${type}</p>
        <p>${dates}</p>
        <p class="prix">${prix} € par nuit</p>
      </div>
    </div>
  `;

  cartesDiv.innerHTML += carte;
}
