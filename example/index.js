window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".main-header");
  const navbar = document.querySelector(".navbar");
  const navContainer = document.querySelector(".js-nav-container");
  const mainNav = document.querySelector(".js-main-ul");
  const mainNavItem = mainNav.querySelectorAll(".navbar-link-js");
  const dropdown = document.querySelector(".dropdown-list");
  const heroSection = document.querySelector(".hero-section");
  const burgerMenu = document.querySelector(".js-burger-menu");
  const gallery = document.querySelector(".gallery");
  const galleryItem = gallery.querySelectorAll(".gallery__single-image img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox__image");
  const lightboxCloseTrigger = document.querySelector(".lightbox__close-icon");

  /**
   * Navigation
   */

  //Dropdown

  mainNavItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      itemDropdown = item.querySelector(".dropdown-list");
      dropdown.classList.remove("active");
      if (itemDropdown) {
        itemDropdown.classList.add("active");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdown.classList.remove("active");
    });
  });

  navContainer.addEventListener("mouseleave", () => {
    dropdown.classList.remove("active");
  });

  /**
   * Mobile Menu
   */

  //Open mmenu when clicking on burger icon
  const mmenuOpen = () => {
    mainNav.classList.toggle("active");
    burgerMenu.classList.toggle("active");

    //Add overflow hidden to body when mmenu is open
    if (burgerMenu.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }
  };

  // Close mmenu when clicking outside mmenu space
  const mmenuClose = () => {
    mainNav.classList.remove("active");
    burgerMenu.classList.remove("active");
  };

  // Add background on backgrond when scrolled down.
  const stickyHeader = () => {
    header.classList.toggle("main-header--is-scrolled", window.scrollY > 10);
    navbar.classList.toggle("navbar--is-scrolled", window.scrollY > 10);
    dropdown.classList.toggle(
      "dropdown-list--is-scrolled",
      window.scrollY > 10,
    );
  };

  window.addEventListener("scroll", stickyHeader);
  heroSection.addEventListener("click", mmenuClose);
  burgerMenu.addEventListener("click", mmenuOpen);
  mainNav.addEventListener("click", mmenuOpen);

  /**
   * LightBox Gallery
   */
  const lightBoxOpen = (e) => {
    lightbox.classList.remove("hide");
    lightboxImg.src = e.target.src;
    body.style.overflow = "hidden";
  };

  const lightBoxClose = () => {
    lightbox.classList.add("fade-out");
    body.style.overflow = "visible";

    setTimeout(() => {
      lightbox.classList.add("hide");
      lightbox.classList.remove("fade-out");
    }, 350);
  };

  //Show lightbox
  galleryItem.forEach((item) => {
    item.addEventListener("click", lightBoxOpen);
    item.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        lightBoxOpen(e);
      }
    });
  });

  //Close Lightbox
  lightboxCloseTrigger.addEventListener("click", lightBoxClose);

  //Make sure you click on the lightbox background and close it
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightBoxClose();
    }
  });
});
