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
  const dateDebut = new Date('2023-01-01');
  const dateFin = new Date('2023-12-31');

  // Générer deux dates aléatoires entre dateDebut et dateFin
  const timestampDebut = dateDebut.getTime() + Math.random() * (dateFin.getTime() - dateDebut.getTime());
  const timestampFin = timestampDebut + Math.random() * (dateFin.getTime() - timestampDebut);

  // Convertir les timestamps en dates et les formater en string au format DD/MM/YYYY
  const dateDebutStr = new Date(timestampDebut).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const dateFinStr = new Date(timestampFin).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return `${dateDebutStr} - ${dateFinStr}`;
}



const cartesDiv = document.getElementById("cartes");

// Générer 10 lieux aléatoires
for (let i = 0; i < 20; i++) {
  const nom = `Lieu ${i+1}`;
  const note = Math.floor(Math.random() * 5) + 1; // Générer une note entre 1 et 5
  const type = Math.random() > 0.5 ? "Particulier" : "Professionnel"; // Choisir aléatoirement entre Particulier et Professionnel
  const dates = `${randomDate()}`
  const prix = Math.floor(Math.random() * 300) + 50; // Générer un prix entre 50 et 350

  const imgSrc = `https://picsum.photos/300/200?random=${i+1}`;
  const carte = `
    <div class="carte">
      <img src="${imgSrc}" alt="${nom}">
      <div class="informations">
        <h2>${nom}</h2>
        <div class="notes">
          <span class="etoiles">${notationEnEtoiles(note)} ${note} étoiles </span>
        </div>
        <p>${type}</p>
        <p>${dates}</p>
        <p class="prix">${prix} € par nuit</p>
      </div>
    </div>
  `;

  cartesDiv.innerHTML += carte;
}
