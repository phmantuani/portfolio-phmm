function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const iconOpen = document.querySelector('.icon-open');
    const iconClose = document.querySelector('.icon-close');

    menuMobile.classList.toggle('open');

    if(menuMobile.classList.contains('open')){
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
    } else {
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
    }
}

// Fecha o menu ao clicar em qualquer link
const menuLinks = document.querySelectorAll('.mobile-menu .nav-link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        const menuMobile = document.querySelector('.mobile-menu');
        const iconOpen = document.querySelector('.icon-open');
        const iconClose = document.querySelector('.icon-close');

        menuMobile.classList.remove('open');
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
    });
});


// ###########################################################################################################
// SCROLLSPY (Desktop + Mobile)
// ###########################################################################################################

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");
    const mobileNavLinks = document.querySelectorAll(".mobile-menu .nav-link");

    function scrollSpy() {
        let current = "";

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 80; 
            const sectionHeight = sec.offsetHeight;

            if (window.scrollY >= sectionTop) {
                current = sec.getAttribute("id");
            }
        });

        // Desktop
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        // Mobile
        mobileNavLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", scrollSpy);

    // Adiciona efeito ao clicar nos links
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNavLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});