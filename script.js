// Rolagem suave para links do menu
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Revelação das seções ao rolar a página
const sections = document.querySelectorAll(".sobre, .servicos, .contato");

const revealSections = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSections);

// Inicializa a revelação das seções ao carregar a página
revealSections();
