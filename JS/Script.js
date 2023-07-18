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

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`[id=${link.dataset.id}]`).classList.add("show");
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
