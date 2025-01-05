// original code and layout by w3schools
// https://www.w3schools.com/howto/howto_js_slideshow.asp

// this little fuck right here doesn't want to initialize the first page of the gallery when the page loads and i have no idea what's the fucking problem
// the thing is, this son of a gun works perfectly fine in the w3schools editor. BUT AS SOON AS I COPY THE EXACT SAME CODE FROM THE W3 EDITOR INTO MY CODEBASE SHIT'S FUCKED
// welcome to webdev everybody.

// update as of 18.12.2024: this dickhead decided to work all of the sudden. WHAT. HOW. WHY. I DIDN'T CHANGE A DARN THING.

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}