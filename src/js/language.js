const langBtn = document.getElementById('language-btn');
const langMenu = document.querySelector('.language-menu');
const langItems = document.querySelectorAll('.language-menu li');

//###########################################################################################
//######################################## Traduções ########################################
//###########################################################################################

const translations = {
  'pt-BR': {
    // HEADER
    home: 'Início',
    skills: 'Habilidades',
    projects: 'Projetos',
    contacts: 'Contatos',
    // HOMEPAGE SECTION
    profession: 'Estudante de Engenharia de Software',
    subtitle: 'Estudando desenvolvimento back-end',
    description: 'Em constante aprendizado, praticando JavaScript e evoluindo no desenvolvimento back-end.',
    // SKILLS SECTION
    skillsDescription: 'Um conjunto de tecnologias que impulsionam o desenvolvimento backend com eficiência e escala.',
    // PROJECTS SECTION
    projectTitle: 'Projetos Destacados',
    projectSubtitle: 'Projetos que refletem meu aprendizado e prática em desenvolvimento.',
    project1Title: 'Em construção...',
    project1Subtitle: 'Em construção...',
    project2Title: 'Em construção...',
    project2Subtitle: 'Em construção...',
    project3Title: 'Em construção...',
    project3Subtitle: 'Em construção...',
    project4Title: 'Em construção...',
    project4Subtitle: 'Em construção...',
    project5Title: 'Em construção...',
    project5Subtitle: 'Em construção...',
    project6Title: 'Em construção...',
    project6Subtitle: 'Em construção...',
    // CONTACTS SECTION
    contactTitle: 'Entre em Contato',
    contactDescription: 'Interessado em trabalhar juntos? Vamos discutir seu projeto.',
  },
  'en-US': {
    // HEADER
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    contacts: 'Contacts',
    // HOMEPAGE SECTION
    profession: 'Software Engineering Student',
    subtitle: 'Studying back-end development',
    description: 'In constant learning, practicing JavaScript and evolving in back-end development.',
    // SKILLS SECTION
    skillsDescription: 'A set of technologies that drive backend development with efficiency and scale.',
    // PROJECTS SECTION
    projectTitle: "Featured Projects",
    projectSubtitle: "Projects that reflect my learning and practice in development.",
    project1Title: "Under construction...",
    project1Subtitle: "Under construction...",
    project2Title: "Under construction...",
    project2Subtitle: "Under construction...",
    project3Title: "Under construction...",
    project3Subtitle: "Under construction...",
    project4Title: "Under construction...",
    project4Subtitle: "Under construction...",
    project5Title: "Under construction...",
    project5Subtitle: "Under construction...",
    project6Title: "Under construction...",
    project6Subtitle: "Under construction...",
    // CONTACTS SECTION
    contactTitle: 'Get in touch',
    contactDescription: "Interested in working together? Let's discuss your project.",
  }
};

// ################################# Puxar ID #################################

function updateLanguage(lang) {
  // HEADER
  document.getElementById('nav-home').textContent = translations[lang].home;
  document.getElementById('nav-skills').textContent = translations[lang].skills;
  document.getElementById('nav-projects').textContent = translations[lang].projects;
  document.getElementById('nav-contacts').textContent = translations[lang].contacts;
  // HOMEPAGE SECTION
  document.getElementById('home-profession-title').textContent = translations[lang].profession;
  document.getElementById('home-subtitle').textContent = translations[lang].subtitle;
  document.getElementById('home-description').textContent = translations[lang].description;
  document.getElementById('nav-home-mobile').textContent = translations[lang].home;
  document.getElementById('nav-skills-mobile').textContent = translations[lang].skills;
  document.getElementById('nav-projects-mobile').textContent = translations[lang].projects;
  document.getElementById('nav-contacts-mobile').textContent = translations[lang].contacts;
  // SKILLS SECTION
  document.getElementById('skills-title').textContent = translations[lang].skills;
  document.getElementById('skills-description').textContent = translations[lang].skillsDescription;
  // PROJECTS SECTION
  document.getElementById('project-title').textContent = translations[lang].projectTitle;
  document.getElementById('project-subtitle').textContent = translations[lang].projectSubtitle;
  document.getElementById('project1-title').textContent = translations[lang].project1Title;
  document.getElementById('project1-desc').textContent = translations[lang].project1Subtitle;
  document.getElementById('project2-title').textContent = translations[lang].project2Title;
  document.getElementById('project2-desc').textContent = translations[lang].project2Subtitle;
  document.getElementById('project3-title').textContent = translations[lang].project3Title;
  document.getElementById('project3-desc').textContent = translations[lang].project3Subtitle;
  document.getElementById('project4-title').textContent = translations[lang].project4Title;
  document.getElementById('project4-desc').textContent = translations[lang].project4Subtitle;
  document.getElementById('project5-title').textContent = translations[lang].project5Title;
  document.getElementById('project5-desc').textContent = translations[lang].project5Subtitle;
  document.getElementById('project6-title').textContent = translations[lang].project6Title;
  document.getElementById('project6-desc').textContent = translations[lang].project6Subtitle;
  // CONTACTS SECTION
  document.getElementById('contact-title').textContent = translations[lang].contactTitle;
  document.getElementById('contact-description').textContent = translations[lang].contactDescription;
  document.getElementById('contact-box').textContent = translations[lang].contactTitle;
  // BUTTON HOMEPAGE
  document.getElementById('home-projects-btn').innerHTML = `
    ${translations[lang].projects}
    <svg class="link-home" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
    </svg>
  `;
  document.getElementById('home-contacts-btn').innerHTML = `
    ${translations[lang].contacts}
    <svg class="mail-home" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
    </svg>
  `;
}

//###########################################################################################
// IDIOMA
//###########################################################################################

langItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedLang = item.getAttribute('data-lang');
    localStorage.setItem('selectedLanguage', selectedLang);
    langMenu.style.display = 'none';
    updateLanguage(selectedLang);
  });
});

window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
  updateLanguage(savedLang);
});

document.addEventListener('click', (e) => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.style.display = 'none';
  }
});

// Mudar download cv
function updateCVLink(lang) {
  const cvLink = document.querySelector('.contacts-cv a');

  if (lang === 'pt-BR') {
    cvLink.setAttribute('href', 'src/cv/PedroHenriqueMantuani_Curriculo.pdf');

  } else if (lang === 'en-US') {
    cvLink.setAttribute('href', 'src/cv/Resume_PedroHenriqueMantuani.pdf');

  }
}

langItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedLang = item.getAttribute('data-lang');
    localStorage.setItem('selectedLanguage', selectedLang);
    updateLanguage(selectedLang);
    updateCVLink(selectedLang);
  });
});

window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'pt-BR';
  updateLanguage(savedLang);
  updateCVLink(savedLang);
});


//###########################################################################################
// MENU
//###########################################################################################

langBtn.addEventListener('click', () => {
  langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
});

//###########################################################################################
// EASTER EGG :)
//###########################################################################################

const savedLang = localStorage.getItem('selectedLanguage') || 'pt-BR';

if (savedLang === 'pt-BR') {
  console.log("%cAchou o easter egg! 😏", "color:#5280d6; font-size:16px; font-weight:bold;");
  console.log("Já que tá aqui... bora codar juntos?");
} else if (savedLang === 'en-US') {
  console.log("%cYou found the easter egg! 😏", "color:#5280d6; font-size:16px; font-weight:bold;");
  console.log("Since you're here... let's code together!");

}
