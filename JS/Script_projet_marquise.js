//  // Liste des noms de fichiers d'images dans votre dossier "images"
//  const imageFiles = [
//     "ExtensionChrome_icon.jpg",
//     "ExtensionChrome_liste.jpg",
//     "ExtensionChrome_popup.jpg",
//   ];

//   // Fonction pour choisir une image aléatoire parmi celles du dossier "images"
//   function getRandomImage() {
//     const randomIndex = Math.floor(Math.random() * imageFiles.length);
//     return imageFiles[randomIndex];
//   }

//   // Obtient le nom de fichier d'image aléatoire
//   const randomImage = getRandomImage();

//   // Remplace l'URL de l'image par l'URL de l'image aléatoire
//   const cardImage = document.getElementById("randomImage");
// //   cardImage.src = "../images/Projets/TheWishlist/" + randomImage;

//   // Met à jour l'attribut "alt" de l'image (facultatif, mais recommandé pour l'accessibilité)
// //   cardImage.alt = "image du projet The WishList"; // Remplacez par une description appropriée


//Afficher les images en taille réelle

// Sélectionnez toutes les images de classe "modal__image"
const images = document.querySelectorAll(".modal__image");

// Créez une fonction pour afficher l'image en taille réelle
export function showImageOnModal(e) {
  e.stopPropagation(); // Empêche la propagation de l'événement
  const clickedImage = e.target;
  const modal = document.getElementById("modal-5");

  // Créez un nouvel overlay pour afficher l'image en taille réelle
  const overlay = document.createElement("div");
  overlay.classList.add("image-zoom-overlay"); // Utilisez la nouvelle classe "image-zoom-overlay"
  overlay.addEventListener("click", hideImage);
  modal.appendChild(overlay);

  // Créez un nouvel élément <img> pour afficher l'image agrandie
  const enlargedImg = document.createElement("img");
  enlargedImg.src = clickedImage.src;
  enlargedImg.classList.add("modal__enlarged-image");
  overlay.appendChild(enlargedImg);

  // Créez un bouton de fermeture pour l'overlay en utilisant la même classe .modal__close
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;"; // Utilisez le symbole "×" (multiplication) comme icône de fermeture
  closeButton.classList.add("image-zoom-overlay__close"); // Utilisez la même classe .modal__close
  closeButton.addEventListener("click", hideImage);
  overlay.appendChild(closeButton);

  modal.classList.add("modal--hidden");
}

// Créez une fonction pour masquer l'image en taille réelle
 function hideImage() {
  const modal = document.getElementById("modal-5");
  const overlay = modal.querySelector(".image-zoom-overlay"); // Utilisez la classe .image-zoom-overlay ici

  // Reste du code pour masquer l'image en taille réelle
  // overlay.remove();
  // modal.classList.remove("modal--hidden");
  if (overlay) {
    overlay.remove();
  }

  modal.classList.remove("modal--hidden");
}


// Ajoutez un gestionnaire d'événement click à chaque image pour afficher l'image en taille réelle
images.forEach((image) => {
  image.addEventListener("click", showImageOnModal);
});

// 
// Sélectionnez tous les boutons de classe "modal__video-button"
const videoButtons = document.querySelectorAll(".modal__video-button");

// Créez une fonction pour afficher la vidéo en taille réelle dans une fenêtre modale
function showVideoModal(videoUrl) {
  const modal = document.getElementById("modal-5");

  // Créez un nouvel overlay pour afficher la vidéo en taille réelle
  const overlay = document.createElement("div");
  overlay.classList.add("image-zoom-overlay");
  overlay.addEventListener("click", hideVideoModal);
  modal.appendChild(overlay);

  // Créez un nouvel élément <iframe> pour afficher la vidéo agrandie
  const enlargedIframe = document.createElement("iframe");
  enlargedIframe.src = videoUrl;
  enlargedIframe.classList.add("modal__enlarged-video");
  overlay.appendChild(enlargedIframe);

  // Créez un bouton de fermeture pour l'overlay
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.classList.add("image-zoom-overlay__close");
  closeButton.addEventListener("click", hideVideoModal);
  overlay.appendChild(closeButton);

  modal.classList.add("modal--hidden");
}

// Créez une fonction pour masquer la vidéo en taille réelle et supprimer l'overlay
function hideVideoModal() {
  const modal = document.getElementById("modal-5");
  const overlay = modal.querySelector(".image-zoom-overlay");

  overlay.remove();
  modal.classList.remove("modal--hidden");
}

// Ajoutez un gestionnaire d'événement click à chaque bouton pour afficher la vidéo en taille réelle
videoButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement
    const videoUrl = "https://www.loom.com/embed/c1f406cc5eaf43e8999ad09101c41bd6"; // Remplacez cette URL par celle de votre vidéo
    showVideoModal(videoUrl);
  });
});

