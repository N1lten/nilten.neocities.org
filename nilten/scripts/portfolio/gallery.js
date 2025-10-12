// original code and layout by w3schools
// https://www.w3schools.com/howto/howto_js_slideshow.asp

// this little fuck right here doesn't want to initialize the first page of the gallery when the page loads and i have no idea what's the fucking problem
// the thing is, this son of a gun works perfectly fine in the w3schools editor. BUT AS SOON AS I COPY THE EXACT SAME CODE FROM THE W3 EDITOR INTO MY CODEBASE SHIT'S FUCKED
// welcome to webdev everybody.

// update as of 18.12.2024: this dickhead decided to work all of the sudden. WHAT. HOW. WHY. I DIDN'T CHANGE A DARN THING.
// update as of 02.08.2025: (HTML Day 2025, btw !): hi past me ! just found out, that live server loves to fuck up javascript code sometimes ! no idea why, really. just remember to restart your live server every now and then if you encounter any weird errors and you should be fine, okay?
// update as of 11.10.2025: moving all files to root dir after overhaul. don't you dare to fucking break now istg
// update as of 12.10.2025: FUCK (oh wait nvm it was a css error hehe whopsies)

var galleries = document.getElementsByClassName("slideshow-container");

var slideIndex = [];
var slides = [] // Sorted in array corresponding to each gallery instance on one site
var slideCounters = document.getElementsByClassName("gallery-numbertext");

var fullscreenView = document.getElementById("slideshow-fullscreen");
var currentID = 0;
var skipAmount = 0;

getGalleryAmount(); // init. get all slides and their corresponding groups sorted into arrays 

// inintialize slide counters
for(var i = 0; i < slideCounters.length; i++)
{
   slideCounters[i].innerHTML = '<p>' + slideIndex[i] + ' / ' + slides[i].length + '</p>';  // update slide counter text
}

function plusSlides(n, id) {
  //console.log("ButtonID: " + id)
  showSlides(slideIndex[id] += n, id);
}

function plusSlidesFull(n)
{
  showSlides(slideIndex[currentID] +=n, currentID);
}

function getGalleryAmount()
{
  for(var i = 0; i < galleries.length; i++)
  {
//  console.log("Amount of Gallerys on site: " + galleries.length);
//  console.log(galleries[i]);
    slideIndex[i] = 1;
    slides[i] = galleries[i].getElementsByClassName("mySlides");
//  console.log(slides[i]);
  }
}

function showSlides(n, id) {
  if (n > slides[id].length) {slideIndex[id] = 1;} // loop back to slide one  
  if (n < 1) {slideIndex[id] = slides[id].length;} // jump to last slide
  for (var j = 0; j < slides[id].length; j++) {
    slides[id].item(j).style.display = "none"; // make all slides invisible
  }
//  console.log(slideIndex + " / " + slides.length);
  slides[id].item(slideIndex[id]-1).style.display = "block"; // make current slide visible
  slideCounters[id].innerHTML = '<p>' + slideIndex[id] + ' / ' + slides[id].length + '</p>';  // update slide counter text
}

function fullscreen_init_setID(id)
{
  skipAmount = 0;
  currentID = id
}

function init_fullscreen_img() {
  var slide_img = document.getElementsByClassName("slideshow-image")
  var full_img = document.getElementById("slideshow-fs-image")
  // check current value of skipAmount
  // console.log(slide_img[slideIndex].src);
  console.log(slide_img.length);
  for(var i = 0; i < currentID; i++)
  {
    skipAmount = slides[i].length;
  }
//console.log(skipAmount);
  full_img.src = slide_img[skipAmount+slideIndex[currentID]-1].src;
//console.log(full_img.src);
}

function showFullscreen() {
  var fullscreenView = document.getElementById("slideshow-fullscreen");
  fullscreenView.style.display = "none";
  if(fullscreenView.style.display === "none")
  {
    fullscreenView.style.display = "block";
  } else
  {
    fullscreenView.style.display = "none";
  }
}

function hideFullscreen() {
  var fullscreenView = document.getElementById("slideshow-fullscreen");
  fullscreenView.style.display = "block";
  if(fullscreenView.style.display === "block")
  {
    fullscreenView.style.display = "none";
  } else
  {
    fullscreenView.style.display = "block";
  }
}

function debug_PrintSlideIndexArray() {
    console.log(slideIndex.length);  
for(var i = 0; i < slideIndex.length; i++){
  console.log(slideIndex[i]);
  }
}
