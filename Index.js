document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le formulaire
    const form = document.querySelector('form');
  
    // Ajouter un gestionnaire d'événements pour la soumission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Empêcher l'envoi par défaut du formulaire
  
      // Récupérer les valeurs des champs
      const nom = document.getElementById('nom').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Vérifier si tous les champs sont remplis
      if (nom && email && message) {
        alert('Formulaire soumis avec succès !');
        // Ici, vous pouvez ajouter des actions supplémentaires si nécessaire
      } else {
        alert('Veuillez remplir tous les champs avant de soumettre le formulaire.');
      }
    });
  });  

  // Sélection de l'élément de navigation
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar a');
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  // Effet Smooth Scroll
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  // Animation de survol sur les liens de navigation
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'color 0.3s ease';
      link.style.color = '#007bff';
    });

    link.addEventListener('mouseleave', () => {
      link.style.transition = 'color 0.3s ease';
      link.style.color = '#333';
    });
  });

  // Effet bouton (Clique)
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Vous avez cliqué sur le bouton !');
    });
  });
});


  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    let interval;
  
    // Fonction pour aller à une image spécifique
    function goToSlide(index) {
      // Empêcher l'index d'aller en dehors des limites
      if (index >= slides.length) {
        index = 0;
      } else if (index < 0) {
        index = slides.length - 1;
      }
  
      // Déplacer le carrousel
      carousel.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    // Fonction pour passer automatiquement au prochain slide
    function nextSlide() {
      goToSlide(currentIndex + 1);
    }
  
    // Démarrer le défilement automatique
    function startAutoSlide() {
      interval = setInterval(nextSlide, 3000);
    }
  
    // Arrêter le défilement automatique
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    // Gérer les événements des boutons
    prevButton.addEventListener('click', function() {
      stopAutoSlide();
      goToSlide(currentIndex - 1);
      startAutoSlide();
    });
  
    nextButton.addEventListener('click', function() {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  
    // Démarrer le carrousel automatique
    startAutoSlide();
  
    // Pause automatique au survol
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
  });  

// Sélectionner tous les titres des compétences
const titresCompetence = document.querySelectorAll('.compétence-title');

// Ajouter un événement de clic pour chaque titre de compétence
titresCompetence.forEach(titre => {
  titre.addEventListener('click', function() {
    const sousMenu = this.nextElementSibling; // Le sous-menu juste après le titre
    // Si le sous-menu est visible, on le cache, sinon on l'affiche
    if (sousMenu.style.display === 'block') {
      sousMenu.style.display = 'none';
    } else {
      sousMenu.style.display = 'block';
    }
  });
});

// Sélectionner le lien "Compétences" et son sous-menu
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Ajouter un événement de clic pour ouvrir/fermer le sous-menu
dropdown.addEventListener('click', function(event) {
  event.preventDefault(); // Empêcher le lien de rediriger
  // Alterner l'affichage du sous-menu
  dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
});