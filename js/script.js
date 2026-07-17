document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.display = "none";
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll(".navmenu a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navmenu a");
  const setActiveLink = () => {
    let current = "";
    sections.forEach((section) => {
      const top = window.scrollY;
      const offset = section.offsetTop - 120;
      const height = section.offsetHeight;
      if (top >= offset && top < offset + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Typed.js
  const typed = new Typed("#typed", {
    strings: ["Developer", "Designer", "Freelancer", "Photographer"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1600,
    loop: true,
  });

  // Progress bars animation
  const progressBars = document.querySelectorAll(".progress-bar");
  const animateSkills = () => {
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  };
  window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection && window.scrollY >= skillsSection.offsetTop - 250) {
      animateSkills();
      window.removeEventListener("scroll", animateSkills);
    }
  });

  // Portfolio filter simple logic
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.getAttribute("data-filter");
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        if (filter === "*" || category === filter) {
          item.classList.remove("is-hidden");
        } else {
          item.classList.add("is-hidden");
        }
      });
    });
  });

  // GLightbox
  const lightbox = GLightbox({ selector: ".glightbox" });

  // Swiper
  new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", clickable: true },
  });

  // Counter animation
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    new PureCounter({
      selector: counter,
      duration: 3,
      once: true,
    });
  });

  // Back to top button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 400);
  });

  // Form validation
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }
      alert("Message sent successfully!");
      form.reset();
    });
  }

  // Dark mode toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Scroll progress bar
  const progressBar = document.getElementById("progressBar");
  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (window.scrollY / max) * 100;
    progressBar.style.width = `${percent}%`;
  });
});
