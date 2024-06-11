document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const navUl = document.querySelector('nav ul');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll Down
            header.style.top = '-70px'; // Hide the header (adjust according to your header height)
        } else {
            // Scroll Up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });

    navUl.addEventListener('mouseenter', function () {
        header.style.top = '0';
    });

    navUl.addEventListener('mouseleave', function () {
        if (window.pageYOffset > lastScrollTop) {
            header.style.top = '-70px';
        }
    });
});

// Particules //

particlesJS("particles", {
    particles: {
        number: {
            value: 100, 
            density: {
                enable: true, 
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });

    // Cacher/afficher la barre de navigation au défilement
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll Down
            header.style.top = '-70px'; // Cacher le header (ajustez selon la hauteur de votre header)
        } else {
            // Scroll Up
            header.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    alert('Merci pour votre message!');
    // Ajoutez ici du code pour envoyer les données du formulaire si nécessaire
});