// Navigation mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animation de défilement fluide pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Ajustement pour la barre de navigation fixe
                behavior: 'smooth'
            });
        }
    });
});

// Animation à l'apparition des sections
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Observer une seule fois
        }
    });
}, observerOptions);

// Observer toutes les sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Ajout de classes d'animation pour les compétences
document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Gestion du scroll pour la navigation
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll vers le bas
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll vers le haut
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Données des preuves
const proofData = {
    'linkedin': {
        title: 'LinkedIn - Développement professionnel',
        content: `
            <p>Profil LinkedIn professionnel maintenu et mis à jour régulièrement.</p>
            <ul>
                <li>Réseau professionnel actif</li>
                <li>Partage de contenus pertinents</li>
                <li>Veille technologique continue</li>
            </ul>
            <a href="https://www.linkedin.com/votre-profil" target="_blank">Voir le profil LinkedIn</a>
        `
    },
    'glpi': {
        title: 'GLPI - Gestion du patrimoine informatique',
        content: `
            <p>Utilisation de GLPI pour la gestion du parc informatique.</p>
            <ul>
                <li>Suivi des incidents</li>
                <li>Gestion des assets</li>
                <li>Documentation des interventions</li>
            </ul>
        `
    },
    'portfolio': {
        title: 'E-Portfolio - Développement personnel',
        content: `
            <p>Création et maintenance d'un portfolio personnel.</p>
            <ul>
                <li>Présentation des compétences</li>
                <li>Mise en valeur des projets</li>
                <li>Reflet de l'évolution professionnelle</li>
            </ul>
        `
    },
    'm2l': {
        title: 'Site M2L - Projet de développement',
        content: `
            <p>Développement du site web pour la Maison des Ligues.</p>
            <ul>
                <li>Interface responsive</li>
                <li>Gestion des réservations</li>
                <li>Administration des contenus</li>
            </ul>
        `
    },
    'heteractis': {
        title: 'Heteractis - Stage de développement',
        content: `
            <p>Stage de développement web chez Heteractis.</p>
            <ul>
                <li>Développement de plateformes web</li>
                <li>Intégration d'APIs</li>
                <li>Tests et déploiement</li>
            </ul>
        `
    },
    'detl': {
        title: 'DETL - Stage de développement',
        content: `
            <p>Stage de développement web chez DETL.</p>
            <ul>
                <li>Développement du site corporate</li>
                <li>Optimisation des performances</li>
                <li>Intégration de fonctionnalités spécifiques</li>
            </ul>
        `
    }
};

// Fonction pour afficher la modale
function showProof(proofId) {
    console.log('showProof called with ID:', proofId);
    
    const modal = document.getElementById('proofModal');
    const titleElement = document.getElementById('proofTitle');
    const contentElement = document.getElementById('proofContent');
    
    if (!modal || !titleElement || !contentElement) {
        console.error('Modal elements not found');
        return;
    }
    
    if (proofData[proofId]) {
        titleElement.textContent = proofData[proofId].title;
        contentElement.innerHTML = proofData[proofId].content;
        modal.style.display = 'block';
        // Ajouter un petit délai pour permettre l'animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        console.log('Modal displayed successfully');
    } else {
        console.error('No proof data found for ID:', proofId);
    }
}

// Fonction pour fermer la modale
function closeProof() {
    console.log('closeProof called');
    const modal = document.getElementById('proofModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Attendre la fin de l'animation
        console.log('Modal closed successfully');
    } else {
        console.error('Modal element not found');
    }
}

// Fermer la modale en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('proofModal');
    if (event.target === modal) {
        closeProof();
    }
} 