document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");

  const navLinks = document.getElementById("nav-links");

  const navItems = document.querySelectorAll(".nav-link");

  const backToTopButton = document.getElementById("backToTop");

  const contactForm = document.getElementById("contact-form");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navLinks.classList.remove("active");

        navItems.forEach((navItem) => navItem.classList.remove("active"));

        item.classList.add("active");
      });
    });
  }

  if (backToTopButton) {
    const toggleBackToTopButton = () => {
      backToTopButton.classList.toggle("show", window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleBackToTopButton);

    toggleBackToTopButton();

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (!contactForm) return;

  if (window.emailjs) {
    emailjs.init({ publicKey: "3m0qi39dtPVI2kydi" });
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!window.emailjs) {
      alert("EmailJS is not available right now.");

      return;
    }

    emailjs

      .sendForm("service_dynw9un", "template_0vjaplg", contactForm)

      .then(() => {
        alert("Message successfully sent to your email!");

        contactForm.reset();
      })

      .catch((error) => {
        console.error("Email send failed:", error);

        alert(
          "Failed to send message. Please check your EmailJS configuration.",
        );
      });
  });
});
