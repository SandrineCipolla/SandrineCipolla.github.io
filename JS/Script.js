//selectors

// let header = document.querySelector(".header .container");
// console.log(header);

// let grids = document.querySelectorAll(".grid");
// console.log(grids);

/*Menu Mobile*/
function menuMobile() {
  let btn = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let links = document.querySelectorAll(".navbar a");

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
function tabsFilters() {
  let tabs = document.querySelectorAll(".portfolio-filters a");
  let projects = document.querySelectorAll(".portfolio .card");

  let resetActiveLinks = () => {
    tabs.forEach((element) => {
      element.classList.remove("active");
    });
  };

  let showProjects = (element) => {
    console.log(element);
    projects.forEach((project) => {
      let filter = project.getAttribute("data-category");

      if (element === "all") {
        project.parentNode.classList.remove("hide");
        return;
      }
      console.log("tutu");

      //   if (filter !== element) {
      //     project.parentNode.classList.add("hide");
      //   } else {
      //     project.parentNode.classList.remove("hide");
      //   }

      //conditions en opérateur ternaire:
      filter !== element
        ? project.parentNode.classList.add("hide")
        : project.parentNode.classList.remove("hide");
    });
  };

  tabs.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = element.getAttribute("data-filter");
      showProjects(filter);
      resetActiveLinks();
      element.classList.add("active");
    });
  });
}
tabsFilters();

function showProjectDetails() {
  let links = document.querySelectorAll(".card__link");
  let modals = document.querySelectorAll(".modal");
  let boutons = document.querySelectorAll(".modal__close");

  let hideModals = () => {
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
