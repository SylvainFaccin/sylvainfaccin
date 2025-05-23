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
            <a href="https://www.linkedin.com/in/sylvain-faccin-269b06230/" target="_blank">Voir le profil LinkedIn</a>
        `
    },
    'glpi1': {
        title: 'GLPI - Gestion du patrimoine informatique',
        content: `
        <h3>GLPI</h3>
          <p>GLPI permet d’inventorier et de suivre l’évolution du parc informatique, facilitant ainsi la maintenance et la planification des renouvellements.<p>
                   <img class="project-image" src="../Portfolio/resources/Proof/Glpientitie.png" alt="Glpientitie" class="project-image">
          `
      },
    'glpi2': {
        title: 'GLPI - Travailler en mode projet',
        content: `
        <h3>GLPI</h3> <br>
            <p>L’utilisation de GLPI dans la mise en place ou l’amélioration de services IT implique la coordination d’équipes et la planification de tâches, caractéristiques du travail en mode projet.</p>
        `
    },
    'glpi3': {
        title: 'GLPI - Mettre à disposition des utilisateurs un service informatique',
        content: `
        <h3>GLPI</h3>
            <p>GLPI offre un portail d’assistance et de gestion des demandes, assurant un support structuré et accessible aux utilisateurs.<p>
            <img class="project-image" src="../Portfolio/resources/Proof/GlpiTicket.png" alt="GlpiTicket" class="project-image">
        `
    },
    'portfolio': {
        title: 'E-Portfolio - Développement personnel',
        content: `
            <h3>Création et maintenance d'un portfolio personnel.</h3>
            <ul>
                <li>Présentation des compétences</li>
                <li>Mise en valeur des projets</li>
                <li>Reflet de l'évolution professionnelle</li>
            </ul>
        `
    },
    'AppFAQ1': {
        title: 'Développement du site web pour l’application APPFAQ',
        content: `
            <h3>Développement du site web pour la Maison des Ligues.</h3>
            <ul>
                <li>Implémentation d’un système dynamique de gestion des questions/réponses pour faciliter la consultation et l’interaction des utilisateurs.</li>
                <li>Mise en place d’un espace d’administration sécurisé pour la gestion autonome des contenus par les responsables du site.</li>
            </ul>
        `
    },
    'AppFAQ2': {
        title: 'Site AppFAQ - Projet de développement',
        content: `
            <h3>Développement du site web pour la Maison des Ligues.</h3>
            <img class="project-image" src="../Portfolio/resources/Proof/AppFAQTrello.png" alt="AppFAQTrello" class="project-image">
        `
    },
    'heteractis1': {
        title: 'Heteractis - Stage de développement',
        content: `
            <h3>Réponse aux incidents et aux demandes d’assistance/évolution chez Heteractis</h3>
<ul>
  <li>Prise en charge collaborative des demandes via des appels vidéo où les points d’amélioration étaient identifiés en direct.</li>
  
</ul>

        `
    },
    'heteractis2': {
        title: 'Heteractis - Stage de développement',
        content: `
            <h3>Travailler en mode projet chez Heteractis</h3>
<ul>
  
  <li>Travail en équipe sur des documents partagés dans le cloud, facilitant la co-conception et le suivi des évolutions.</li>
  <li>Utilisation de Google Agenda pour planifier et organiser efficacement les rendez-vous professionnels.</li>
</ul>
        `
    },
    'detl1': {
        title: 'DETL - Gestion du patrimoine informatique',
        content: `
            <h3>Gérer le patrimoine informatique</h3>
            <ul>
                <li>Suite à une panne internet, j’ai pris l’initiative de contacter le fournisseur Orange et de mettre en place une solution de secours via un routeur 5G, assurant la continuité des activités.</li>
            </ul>
        `
    },
    'detl2': {
        title: 'DETL - Stage de développement',
        content: `
            <h3>Répondre aux incidents et aux demandes d’assistance/évolution</h3>
            <ul>
            <li>Entretiens réguliers avec mon tuteur pour faire le point sur mes avancées et ajuster les priorités techniques en conséquence.</li>
            </ul>
        `
    },
    'detl3': {
        title: 'DETL - Stage de développement',
        content: `
            <h3>Développer la présence en ligne de l’organisation</h3>
            <ul>
                <li>Conception et mise en ligne du site web de l’entreprise afin d'améliorer sa visibilité et sa communication numérique.</li>
            </ul>
        `
    },
    'apres1': {
        title: 'Atelier professionnel – AP Restauration',
        content: `
            <h3>Répondre aux incidents et aux demandes d’assistance/évolution</h3>
            <ul>
                <li>Résolution de problèmes techniques et prise en compte des retours 'utilisateurs' pour proposer des améliorations adaptées.</li>
            </ul>
        `
    },
    'apres2': {
        title: 'Atelier professionnel – AP Restauration',
        content: `
            <h3>Développer la présence en ligne de l’organisation</h3>
            <ul>
                <li>Participation à la création de contenus numériques permettant à l’entreprise de développer sa présence et ses activités sur le web.</li>
            </ul>
        `
    },
    'apres3': {
        title: 'Atelier professionnel – AP Restauration',
        content: `
            <h3>Travailler en mode projet</h3>
            <ul>
            <li>
            Collaboration structurée avec des objectifs définis, un suivi des étapes et des échanges réguliers au sein de l’équipe.
            </li>
            </ul>
            <img class="project-image" src="../Portfolio/resources/Proof/ApRESTrello.png" alt="ApRESTrello" class="project-image">
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