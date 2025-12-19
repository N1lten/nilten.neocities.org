var URLID;
var randClass = document.getElementById("imageBox");

var validURLs = [
    "images/home/imgframe/mariolikes.webp",
    "images/home/imgframe/good_morning.gif",
    "images/home/imgframe/bring_it_in_brother.gif",
    "images/home/imgframe/parappa_2_beard_burger_buns.gif",
]
URLID = Math.floor(Math.random() * validURLs.length)
randClass.src = validURLs[URLID];
