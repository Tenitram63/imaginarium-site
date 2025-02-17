// Assure que le script est exécuté seulement après le chargement du DOM
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;

    // Fonction pour afficher les slides
    function showSlides() {
        let slides = document.getElementsByClassName("diapo-slide");

        // Vérifie si des images ont été trouvées
        console.log(slides);  // Cette ligne sert à vérifier si les éléments sont bien récupérés

        // Masquer toutes les images au début
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Passer à la prochaine image
        slideIndex++;

        // Si le slideIndex est supérieur au nombre d'images, recommencer depuis le début
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Afficher la bonne image en fonction de l'index
        slides[slideIndex - 1].style.display = "block";
    }

    // Initialiser le diaporama
    showSlides();
    setInterval(showSlides, 3000); // Changer d'image toutes les 3 secondes
});

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;

    // Fonction pour afficher les slides
    function showSlides() {
        let slides = document.getElementsByClassName("diapo-slide");

        // Masquer toutes les images au début
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Afficher la bonne image en fonction de l'index
        slides[slideIndex].style.display = "block";
    }

    // Fonction pour changer les images manuellement
    function plusSlides(n) {
        let slides = document.getElementsByClassName("diapo-slide");
        slideIndex += n;
        
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        showSlides();
    }

    // Initialiser le diaporama
    showSlides();

    // Changer d'image toutes les 3 secondes
    setInterval(function() {
        plusSlides(1);
    }, 3000);

    // Ajouter les événements pour les boutons
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
});
