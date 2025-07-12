let slideIndices = [1, 1];  // Tableau pour suivre les indices des carrousels
let totalSlides = [0, 0];  // Tableau pour suivre le nombre total de slides pour chaque carrousel

showSlides(0, 1);  // Initialiser le premier carrousel
showSlides(1, 1);  // Initialiser le deuxième carrousel

// Next/previous controls
function plusSlides(carouselIndex, n) {
  showSlides(carouselIndex, slideIndices[carouselIndex] += n);
}

// Thumbnail image controls
function currentSlide(carouselIndex, n) {
  showSlides(carouselIndex, slideIndices[carouselIndex] = n);
}

function showSlides(carouselIndex, n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_" + (carouselIndex + 1));  // Utiliser une classe différente pour chaque carrousel
  let dots = document.getElementsByClassName("dot_" + (carouselIndex + 1));  // Idem pour les dots

  totalSlides[carouselIndex] = slides.length;

  if (n > totalSlides[carouselIndex]) { slideIndices[carouselIndex] = 1; }
  if (n < 1) { slideIndices[carouselIndex] = totalSlides[carouselIndex]; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // Masquer toutes les images du carrousel
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");  // Supprimer la classe active des dots
  }

  slides[slideIndices[carouselIndex] - 1].style.display = "block";  // Afficher l'image active
  dots[slideIndices[carouselIndex] - 1].className += " active";  // Mettre à jour la classe active du dot
}
