const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const OFFSET = 80;

/* Remove a classe active de todos os links */
function clearActiveLinks() {
  navLinks.forEach(link => link.classList.remove("active"));
}

/* Ativa o link correspondente à seção atual */
function activateLinkBySection(sectionId) {
  navLinks.forEach(link => {
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });
}

/* Detecta qual seção está visível */
function getCurrentSection() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - OFFSET;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  return currentSection;
}

/* Controla o scroll spy */
function handleScroll() {
  const current = getCurrentSection();
  clearActiveLinks();
  activateLinkBySection(current);
}

/* Eventos */
window.addEventListener("scroll", handleScroll);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    clearActiveLinks();
    link.classList.add("active");
  });
});
