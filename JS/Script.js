//selectors

// let header = document.querySelector(".header .container");
// console.log(header);

// let grids = document.querySelectorAll(".grid");
// console.log(grids);

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
function tabsFilters() {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projects = document.querySelectorAll(".portfolio .card");

  const resetActiveLinks = () => {
    tabs.forEach((element) => {
      element.classList.remove("active");
    });
  };

  const showProjects = (element) => {
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
