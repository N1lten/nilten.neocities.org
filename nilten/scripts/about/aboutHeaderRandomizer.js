//console.log("Roll the dice !");
var headerURL;
var URLID;
var randClass = document.getElementsByClassName("aboutHeaderRandomizer");

var validURLs = [
    "url('images/about/headers/about_header_01.webp')",
    "url('images/about/headers/about_header_02.webp')",
    "url('images/about/headers/about_header_03.webp')",
    "url('images/about/headers/about_header_04.webp')",
    "url('images/about/headers/about_header_05.webp')",
    "url('images/about/headers/about_header_06.webp')",
    "url('images/about/headers/about_header_07.webp')",
]
URLID = Math.floor(Math.random() * validURLs.length)

headerURL = validURLs[URLID];

for(var i = 0; i < randClass.length; i++) {
    randClass.item(i).style.backgroundImage = headerURL;
}