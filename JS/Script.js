/*PopUp*/
// document.addEventListener("DOMContentLoaded", function() {
//   const popup = document.querySelector(".popup");

//   // Vérifier si le pop-up a déjà été affiché auparavant
//   const popupShown = localStorage.getItem("popupShown");

//   if (!popupShown) {
//       // Afficher le pop-up
//       popup.style.display = "flex";

//       // Fermer le pop-up lorsque l'utilisateur clique dessus
//       popup.addEventListener("click", function() {
//           popup.style.display = "none";

//           // Enregistrer que le pop-up a été affiché
//           localStorage.setItem("popupShown", "true");
//       });
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.querySelector(".popup");
  
  // Afficher la popup directement
  popup.style.display = "flex";
  
  // Fermer la popup lorsque l'utilisateur clique dessus
  popup.addEventListener("click", function() {
      popup.style.display = "none";
  });
});



/*Modif icone CV téléchargé/dans le menu*/
function changeIconCV() {
  document.getElementById('cv-icon').addEventListener('click', function () {
    this.src = '../images/approuve.png';
    this.alt = 'Cv téléchargé';
  });
}
changeIconCV();

/*Modif icone CV dans compétences*/
function downloadCV() {
  const cvButton = document.querySelector('.cv-button');
  const cvIcon = cvButton.querySelector('.cv-icon img');
  const cvText = cvButton.querySelector('.cv-text');

  cvButton.addEventListener('click', () => {
    cvIcon.src = '../images/approuve.png';
    cvIcon.alt = 'Cv téléchargé';
    cvText.textContent = "C'est dans la poche!";
    cvButton.classList.add('clicked');      // Ajoute la classe 'clicked' au bouton
  });
}
downloadCV();

/*Menu Mobile*/
function menuMobile() {
  const btn = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const links = document.querySelectorAll(".navbar a");

  btn.addEventListener("click", () => {
    header.classList.toggle("show-nav");
  });
  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("show-nav");
    });
  });
}
menuMobile();

/*Portfolio*/
// function tabsFilters() {
//   const tabs = document.querySelectorAll(".portfolio-filters a");
//   const projects = document.querySelectorAll(".portfolio .card");

//   const resetActiveLinks = () => {
//     tabs.forEach((element) => {
//       element.classList.remove("active");
//     });
//   };

//   const showProjects = (element) => {
//     console.log(element);
//     projects.forEach((project) => {
//       let filter = project.getAttribute("data-category");

//       if (element === "all") {
//         project.parentNode.classList.remove("hide");
//         return;
//       }
//       console.log("tutu");

//       //   if (filter !== element) {
//       //     project.parentNode.classList.add("hide");
//       //   } else {
//       //     project.parentNode.classList.remove("hide");
//       //   }

//       //conditions en opérateur ternaire:
//       filter !== element
//         ? project.parentNode.classList.add("hide")
//         : project.parentNode.classList.remove("hide");
//     });
//   };

//   tabs.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       event.preventDefault();
//       let filter = element.getAttribute("data-filter");
//       showProjects(filter);
//       resetActiveLinks();
//       element.classList.add("active");
//     });
//   });
// }
// tabsFilters();

function tabsFilters() {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projects = document.querySelectorAll(".portfolio .card");
  const projectsContainer = document.querySelector(".projets");

  const resetActiveLinks = () => {
    tabs.forEach((element) => {
      element.classList.remove("active");
    });
  };

  const showProjects = (selectedCategories) => {
    projectsContainer.classList.remove("centered"); // Supprime la classe centrée par défaut

    projects.forEach((project) => {
      let categories = project.getAttribute("data-category").split(" ");
      let shouldShow = false;

      if (selectedCategories.includes("all")) {
        shouldShow = true;
      } else {
        selectedCategories.forEach((category) => {
          if (categories.includes(category)) {
            shouldShow = true;
          }
        });
      }

      if (shouldShow) {
        project.parentNode.classList.remove("hide");
      } else {
        project.parentNode.classList.add("hide");
      }
    });

    // Ajoute la classe centrée si la catégorie sélectionnée est "all"
    if (selectedCategories.includes("all")) {
      projectsContainer.classList.add("centered");
    }
  };

  tabs.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = element.getAttribute("data-filter");
      let selectedCategories = filter.split(" ");
      showProjects(selectedCategories);
      resetActiveLinks();
      element.classList.add("active");
    });
  });
}

tabsFilters();



function showProjectDetails() {
  const links = document.querySelectorAll(".card__link");
  const modals = document.querySelectorAll(".modal");
  const boutons = document.querySelectorAll(".modal__close");

  const hideModals = () => {
    modals.forEach((modal) => {
      modal.classList.remove("show");
    });
  };

  // links.forEach((link) => {
  //   link.addEventListener("click", (event) => {
  //     event.preventDefault();
  //     document.querySelector(`[id=${link.dataset.id}]`).classList.add("show");
  //   });
  // });
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const modalId = `[id=${link.dataset.id}]`;
      const modal = document.querySelector(modalId);
      hideModals(); // Cache toutes les modals avant d'en afficher une nouvelle
      modal.classList.add("show");
    });
  });
  

  boutons.forEach((bouton) => {
    bouton.addEventListener("click", (event) => {
      hideModals();
    });
  });
}
showProjectDetails();

//effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll("section");
  const skills = document.querySelectorAll(".skills .bar");

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6";
  });

  skills.forEach((elem, index) => {
    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let element = entry.target;
        element.style.opacity = "1";
      }
    });
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + "%";
      }
    });
  });

  skills.forEach((skill) => {
    skillsObserver.observe(skill);
  });
};

observerIntersectionAnimation();

// //Afficher les images en taille réelle
// // Créez une fonction générique pour afficher les éléments en taille réelle

// function showElementOnModal(selector, showFunction) {
//   return function (e) {
//     e.stopPropagation();
//     const clickedElement = e.target;
//     const modal = document.querySelector(".modal");

//     const overlay = document.createElement("div");
//     overlay.classList.add("image-zoom-overlay");
//     overlay.addEventListener("click", hideElement);
//     modal.appendChild(overlay);

//     const enlargedElement = document.createElement(selector);
//     if (selector === "img") {
//       enlargedElement.src = clickedElement.src;
//     } else {
//       enlargedElement.innerHTML = clickedElement.innerHTML;
//     }
//     enlargedElement.classList.add("modal__enlarged-element");
//     overlay.appendChild(enlargedElement);

//     const closeButton = document.createElement("button");
//     closeButton.innerHTML = "&times;";
//     closeButton.classList.add("image-zoom-overlay__close");
//     closeButton.addEventListener("click", hideElement);
//     overlay.appendChild(closeButton);

//     modal.classList.add("modal--hidden");

//     showFunction(modal, overlay);
//   };
// }


// // Sélectionnez toutes les images de classe "modal__image"
// const images = document.querySelectorAll(".modal__image");

// // Ajoutez un gestionnaire d'événement click à chaque image pour afficher l'image en taille réelle
// images.forEach((image) => {
//   image.addEventListener("click", showElementOnModal("img", (modal, overlay) => {
//     // Récupérez l'image agrandie à partir de l'overlay
//     const enlargedImg = overlay.querySelector(".modal__enlarged-element");

//     // Ajoutez la classe pour l'affichage de l'image agrandie
//     enlargedImg.classList.add("show");

//     // Vous pouvez également ajouter d'autres logiques spécifiques ici, si nécessaire

//     // Fermez la modal agrandie lorsque le bouton de fermeture est cliqué
//     overlay.querySelector(".image-zoom-overlay__close").addEventListener("click", () => {
//       hideElement();
//       // Réinitialisez les modifications apportées à l'élément agrandi
//       enlargedImg.classList.remove("show");
//     });
//   }));
// });

// // Créez une fonction générique pour masquer les éléments
// function hideElement(element) {
//   element.remove();
// }

// // Créez une fonction générique pour afficher les éléments en taille réelle
// function showElementOnModal(selector, showFunction) {
//   return function (e) {
//     e.stopPropagation();
//     const clickedElement = e.target;
//     const modal = document.querySelector(".modal");

//     const overlay = document.createElement("div");
//     overlay.classList.add("image-zoom-overlay");
//     overlay.addEventListener("click", () => hideElement(overlay)); // Utilise hideElement avec l'élément overlay
//     modal.appendChild(overlay);

//     const enlargedElement = document.createElement(selector);
//     if (selector === "img") {
//       enlargedElement.src = clickedElement.src;
//     } else {
//       enlargedElement.innerHTML = clickedElement.innerHTML;
//     }
//     enlargedElement.classList.add("modal__enlarged-element");
//     overlay.appendChild(enlargedElement);

//     const closeButton = document.createElement("button");
//     closeButton.innerHTML = "&times;";
//     closeButton.classList.add("image-zoom-overlay__close");
//     closeButton.addEventListener("click", () => {
//       hideElement(overlay); // Utilise hideElement avec l'élément overlay
//     });
//     overlay.appendChild(closeButton);

//     modal.classList.add("modal--hidden");

//     showFunction(modal, overlay);
//   };
// }

// // Sélectionnez toutes les images de classe "modal__image"
// const images = document.querySelectorAll(".modal__image");

// // Ajoutez un gestionnaire d'événement click à chaque image pour afficher l'image en taille réelle
// images.forEach((image) => {
//   image.addEventListener("click", showElementOnModal("img", (modal, overlay) => {
//     // Récupérez l'image agrandie à partir de l'overlay
//     const enlargedImg = overlay.querySelector(".modal__enlarged-element");

//     // Ajoutez la classe pour l'affichage de l'image agrandie
//     enlargedImg.classList.add("show");

//     // Vous pouvez également ajouter d'autres logiques spécifiques ici, si nécessaire
//   }));
// });

// Créez une fonction générique pour masquer les éléments
function hideElement(element) {
  element.remove();
}

// Créez une fonction générique pour afficher les éléments en taille réelle
function showElementOnModal(selector, showFunction) {
  return function (e) {
    e.stopPropagation();
    const clickedElement = e.target;
    const modal = document.querySelector(".modal");

    const overlay = document.createElement("div");
    overlay.classList.add("image-zoom-overlay");
    overlay.addEventListener("click", () => hideElement(overlay)); // Utilise hideElement avec l'élément overlay
    modal.appendChild(overlay);

    const enlargedElement = document.createElement(selector);
    if (selector === "img") {
      enlargedElement.src = clickedElement.src;
    } else {
      enlargedElement.innerHTML = clickedElement.innerHTML;
    }
    enlargedElement.classList.add("modal__enlarged-element");
    overlay.appendChild(enlargedElement);

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("image-zoom-overlay__close");
    closeButton.addEventListener("click", () => {
      hideElement(overlay); // Utilise hideElement avec l'élément overlay
    });
    overlay.appendChild(closeButton);

    modal.classList.add("modal--hidden");

    showFunction(modal, overlay);
  };
}

// Sélectionnez toutes les images de classe "modal__image"
const images = document.querySelectorAll(".modal__image");

// Ajoutez un gestionnaire d'événement click à chaque image pour afficher l'image en taille réelle
images.forEach((image) => {
  image.addEventListener("click", showElementOnModal("img", (modal, overlay) => {
    // Récupérez l'image agrandie à partir de l'overlay
    const enlargedImg = overlay.querySelector(".modal__enlarged-element");
    
    // Récupérez l'ID de la carte à partir de l'attribut de données
    const cardId = image.getAttribute("data-card-id");
    
    // Sélectionnez la carte appropriée en fonction de l'ID
    const card = document.querySelector(`.card[data-card-id="${cardId}"]`);

    // Ajoutez la classe pour l'affichage de l'image agrandie dans la carte appropriée
    card.appendChild(enlargedImg);
    enlargedImg.classList.add("show");
  }));
});
