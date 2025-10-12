var webPath = location.pathname;
var dirSize = "";
var dirCount = 0;
var buttonCount = 0;
var buttonDirs = "";

const buttonLinks =
[
"images/icons/88x31/nilten.gif",
"images/icons/88x31/randnetdd.gif",
"images/icons/88x31/61.gif",
"images/icons/88x31/148.gif",
"images/icons/88x31/149.png",
"images/icons/88x31/66.gif",
"images/icons/88x31/sprunk.gif",
"images/icons/88x31/transnow2.gif",
"images/icons/88x31/sun.gif",
"images/icons/88x31/fuckAI.gif",
"images/icons/88x31/viva_zwei.gif",
"images/icons/88x31/button139.png",
"images/icons/88x31/gc.gif",
"images/icons/88x31/daytonaNOW.gif",
"images/icons/88x31/pink_floyd_01.gif",
"images/icons/88x31/delete_twitter.gif",
"images/icons/88x31/hl.gif",
"images/icons/88x31/bestvieweddesktop.gif",
"images/icons/88x31/braknow.gif",
"images/icons/88x31/cerealcat.png",
"images/icons/88x31/missingContent.gif",
"images/icons/88x31/bu12.gif"
];

const buttonAlts = [
    "Nilten",
    "Viewable on RandnetDD.",
    "Hi-Res Colors!",
    "Made with Microsoft Windows 98.",
    "Viewable on Dreamcast Web Browser 2.0",
    "AOL Instant Messanger",
    "Drink Sprunk!",
    "TRANS RIGHTS NOW!",
    "nilten.neocities.org runs on Sun Microsystems.",
    "FUCK AI!",
    "Viva Zwei",
    "Gameboy Advance",
    "Nintendo Gamecube",
    "Daytona USA NOW!",
    "Miles Nilten is a big Pink Floyd fan !",
    "Delete Twitter! Make a Neocities!",
    "Half-Life",
    "Best viewed on desktop!",
    "Brak NOW!",
    "Cereal!",
    "Just buy Counter-Strike Source already!",
    "THIS WEBSITE IS QUITE GAY ACTUALLY",
];

for(let i = 0; i < webPath.length; i++)
{
    if (webPath[i] === "/")
    {
        dirCount++;
    }
};

for(var i = 1; i < dirCount; i++)
{
        dirSize = dirSize + "../"
};

for(let i = 0; i < buttonLinks.length; i++)
{
    if(dirCount <= 1)
    {
        if(buttonAlts.length != buttonLinks.length) //when alts and links don't match up 
        {
            buttonDirs = buttonDirs + '<img src="' + buttonLinks[i] + '" draggable="false">'
        }
        else
        {
            buttonDirs = buttonDirs + '<img src="' + buttonLinks[i] + '" alt="' + buttonAlts[i] + '" draggable="false">'
        } 
    }
    else
    {
        if(buttonAlts.length != buttonLinks.length) //when alts and links don't match up 
        {
            buttonDirs = buttonDirs + '<img src="'+ dirSize + buttonLinks[i] + '" draggable="false">'
        }
        else
        {
            buttonDirs = buttonDirs + '<img src="'+ dirSize + buttonLinks[i] + '" alt="' + buttonAlts[i] + '" draggable="false">'
        } 
    }
};
// throw error message in console
if(buttonAlts.length != buttonLinks.length)
{
    console.log("Error: Scroll button URL's and ALT's don't match up! Proceeding without ALT's.");        
}

//console.log(buttonDirs);
const buttonPaths = '<marquee>' + buttonDirs + '</marquee>';

// keep footerButtonsBlog for legacy support because i'm too lazy to change the id's and because it just works !
if (document.getElementById("footerButtonsBlog")) {
    document.getElementById("footerButtonsBlog").innerHTML = buttonPaths;
}
else if (document.getElementById("footerButtons")) {
    document.getElementById("footerButtons").innerHTML = buttonPaths;
}
else {
    console.log("No button scrolling div found on this page.");
}
