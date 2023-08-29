const images = document.querySelectorAll(".modal__image");

function showImageOnModal(e) {
  e.stopPropagation(); // Empêche la propagation de l'événement
  const clickedImage = e.target;
  // const modal = document.getElementById("projet-7_modal-7");
  const modal = document.getElementById("modal-7");

  // Vérifie si l'élément modal a été trouvé
  if (!modal) {
    console.error("L'élément modal n'a pas été trouvé.");
    return;
  }

  const overlay = document.createElement("div");
  // overlay.setAttribute("id", "projet-7_image-zoom-overlay"); // Utilisez un ID unique pour le projet 7
  overlay.classList.add("image-zoom-overlay"); // Utilisez la nouvelle classe "image-zoom-overlay"
  overlay.addEventListener("click", hideImage);
  modal.appendChild(overlay);

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
  const modal = document.getElementById("modal-7");
  // const modal = document.getElementById("projet-7_modal-7");
  const overlay = modal.querySelector(".image-zoom-overlay"); // Utilisez la classe .image-zoom-overlay ici

  // Reste du code pour masquer l'image en taille réelle
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
  const modal = document.getElementById("modal-7");

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
  const modal = document.getElementById("modal-7");
  const overlay = modal.querySelector(".image-zoom-overlay");

  overlay.remove();
  modal.classList.remove("modal--hidden");
}

// Ajoutez un gestionnaire d'événement click à chaque bouton pour afficher la vidéo en taille réelle
videoButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement
    const videoUrl = ""; // Remplacez cette URL par celle de votre vidéo
    showVideoModal(videoUrl);
  });
});
