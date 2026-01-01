var URLID;
var randClass = document.getElementById("imageBox");

var validURLs = [
    "images/home/imgframe/mariolikes.webp",
    "images/home/imgframe/good_morning.gif",
    "images/home/imgframe/bring_it_in_brother.gif",
    "images/home/imgframe/parappa_2_beard_burger_buns.gif",
    "images/home/imgframe/beartank_my_beloved.gif",
    "images/home/imgframe/robotnik_da_rules.webp",
    "images/home/imgframe/you_have_entered_the_comedy_area.webp",
]

URLID = Math.floor(Math.random() * validURLs.length)
randClass.src = validURLs[URLID];
console.log(URLID)
function advanceImgBox()
{
    if(URLID != validURLs.length-1)
    {
        URLID++
        randClass.src = validURLs[URLID]
    }
    else
    {
        URLID = 0
        randClass.src = validURLs[URLID]
    }

    console.log(randClass.src)
    console.log(URLID)
}