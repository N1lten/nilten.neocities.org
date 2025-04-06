initButtonScroll();

function initButtonScroll() {
    const buttonPaths =
        `<marquee>
            <img src="images/icons/88x31/nilten.gif" alt="Nilten" draggable="false">
            <img src="images/icons/88x31/randnetdd.gif" alt="Viewable on RandnetDD." draggable="false">
            <img src="images/icons/88x31/61.gif" alt="Hi-Res Colors!" draggable="false">
            <img src="images/icons/88x31/148.gif" alt="Made with Microsoft Windows 98." draggable="false">
            <img src="images/icons/88x31/149.png" alt="Viewable on Dreamcast Web Browser 2.0" draggable="false">
            <img src="images/icons/88x31/66.gif" alt="AOL Instant Messanger" draggable="false">
            <img src="images/icons/88x31/sprunk.gif" alt="Drink Sprunk!" draggable="false">
            <img src="images/icons/88x31/transnow2.gif" alt="TRANS RIGHTS NOW!" draggable="false">
            <img src="images/icons/88x31/sun.gif" alt="Nilten.com runs on Sun Microsystems." draggable="false">
            <img src="images/icons/88x31/fuckAI.gif" alt="FUCK AI!" draggable="false">
            <img src="images/icons/88x31/viva_zwei.gif" alt="Viva Zwei" draggable="false">
            <img src="images/icons/88x31/button139.png" alt="Gameboy Advance" draggable="false">
            <img src="images/icons/88x31/gc.gif" alt="Nintendo Gamecube" draggable="false">
            <img src="images/icons/88x31/daytonaNOW.gif" alt="Daytona USA NOW!" draggable="false">
            <img src="images/icons/88x31/delete_twitter.gif" alt="Delete Twitter! Make a Neocities!" draggable="false">
            <img src="images/icons/88x31/hl.gif" alt="Half-Life" draggable="false">
            <img src="images/icons/88x31/bestvieweddesktop.gif" alt="Best viewed on desktop!" draggable="false">
            <img src="images/icons/88x31/braknow.gif" alt="Brak NOW!" draggable="false">
            <img src="images/icons/88x31/cerealcat.png" alt="Cereal!" draggable="false">
            <img src="images/icons/88x31/missingContent.gif" alt="Just buy Counter-Strike Source already!" draggable="false">
            <img src="images/icons/88x31/bu12.gif" alt="THIS WEBSITE IS QUITE GAY ACTUALLY" draggable="false">
        </marquee>`

        const blogButtonPaths =
        `<marquee>
            <img src="../images/icons/88x31/nilten.gif" alt="Nilten" draggable="false">
            <img src="../images/icons/88x31/randnetdd.gif" alt="Viewable on RandnetDD." draggable="false">
            <img src="../images/icons/88x31/61.gif" alt="Hi-Res Colors!" draggable="false">
            <img src="../images/icons/88x31/148.gif" alt="Made with Microsoft Windows 98." draggable="false">
            <img src="../images/icons/88x31/149.png" alt="Viewable on Dreamcast Web Browser 2.0" draggable="false">
            <img src="../images/icons/88x31/66.gif" alt="AOL Instant Messanger" draggable="false">
            <img src="../images/icons/88x31/sprunk.gif" alt="Drink Sprunk!" draggable="false">
            <img src="../images/icons/88x31/transnow2.gif" alt="TRANS RIGHTS NOW!" draggable="false">
            <img src="../images/icons/88x31/sun.gif" alt="Nilten.com runs on Sun Microsystems." draggable="false">
            <img src="../images/icons/88x31/fuckAI.gif" alt="FUCK AI!" draggable="false">
            <img src="../images/icons/88x31/viva_zwei.gif" alt="Viva Zwei" draggable="false">
            <img src="../images/icons/88x31/button139.png" alt="Gameboy Advance" draggable="false">
            <img src="../images/icons/88x31/gc.gif" alt="Nintendo Gamecube" draggable="false">
            <img src="../images/icons/88x31/daytonaNOW.gif" alt="Daytona USA NOW!" draggable="false">
            <img src="../images/icons/88x31/delete_twitter.gif" alt="Delete Twitter! Make a Neocities!" draggable="false">
            <img src="../images/icons/88x31/hl.gif" alt="Half-Life" draggable="false">
            <img src="../images/icons/88x31/bestvieweddesktop.gif" alt="Best viewed on desktop!" draggable="false">
            <img src="../images/icons/88x31/braknow.gif" alt="Brak NOW!" draggable="false">
            <img src="../images/icons/88x31/cerealcat.png" alt="Cereal!" draggable="false">
            <img src="../images/icons/88x31/missingContent.gif" alt="Just buy Counter-Strike Source already!" draggable="false">
            <img src="../images/icons/88x31/bu12.gif" alt="THIS WEBSITE IS QUITE GAY ACTUALLY" draggable="false">
        </marquee>`

    if(document.getElementById("footerButtonsBlog"))
    {
        document.getElementById("footerButtonsBlog").innerHTML = blogButtonPaths;
    }
    else if(document.getElementById("footerButtons"))
    {
        document.getElementById("footerButtons").innerHTML = buttonPaths;
    }
    else
    {
        print("No button scrolling div found on this page.");
    }
    
}