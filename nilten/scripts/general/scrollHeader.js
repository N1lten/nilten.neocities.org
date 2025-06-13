// When loading the site, randomly select a Text to be displayed inside the srolling header.

genHeaderText();

function genHeaderText()
{
    const headerText = [
        "BREAKING NEWS: uhhhhhhhhuhhyhhuuhhyyh...... hi.",
        "I have way too much caffeine in my blood atm oh god",
        "Me likey Earthbound i'm literally a Mr. Saturn :333",
        "Hmmm... There really isn't any news to speak of today...",
        "Snake, what happened? Snake? SNAAAAAAAAAAKE?!",
        "I'm Ness.... It's been a long road getting here... Soon, i'll be... Soon, i'll be... Soon, i'll be... What will happen to us? W...what's happening? My thoughts are being written out on the wall... or are they?",
        "Garfield, you fat cat. You are so big and fat. Why are you so fat?",
        "\"Na na na na na na na na na na Katamari Damacy! ~\"",
        "Inspect element me. I DARE you!", // HIIIIIIIIIII :333333 !!!!1!1 Feel free to look at my code but just a heads up: MY CODE SUCKS.
        "Gooby Gibber Flibber Womb, Smeckle Tickle Zippy Zap, Gowanga Bowanga Fawiggle Womb.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec pulvinar tortor. Sed cursus, magna et suscipit porta, neque massa hendrerit felis, hendrerit varius tellus lorem in lorem. Donec feugiat, erat eget malesuada euismod, purus odio varius tellus, ut pretium justo arcu eget ante. Integer fringilla gravida urna ut porta. Proin fringilla interdum ex, in varius nibh sollicitudin ac. Pellentesque consectetur nunc id vulputate congue. Donec erat enim, pellentesque sed ex non, auctor vulputate mauris. Fusce ac ante nec lacus tempor vehicula vel ultrices mi. Vivamus lacus neque, convallis a hendrerit molestie, luctus eget tortor. Nullam eu vestibulum lorem. Suspendisse euismod ligula ex.",
        "I need a bigger desk mine is pretty small but alas, no mula DANG IT",
        "Why did Nobuo Uematsu go so hard on Dancing Mad i mean HOLY COW",
        "Sharon, please come back with the kids",
        "MEOW! MEOW! MEOW! MEOW! MEOW! MIAU! MEOW! MEOW! MEOW! MEOW! NYA! MEOW! MEOW! MEOW? meow. MEOW!",
        "Mori, who or what is an Azure ?",
        "MELON.", // FACADE REFERENCE WOOOOOO
        "\"So take me baaack in tiiiiiiiiimmme! ♪ To another world! ♪ When you caaaan beeee miiiiiiiiiine! ♪ We don't have to worry! ♪ When you're byyyyy myyy siiiiiiiiide! ♪ Theres nothing i don't know! ♪ Theres nothing tooooo deeeciiiiiiiide! ♪ Apart from where we want to gooooooo! ♪\"",
        "I have no idea what to draw aaaaaaaaaaaaa :[",
        "I know! I gotta believe!",
        "Fuck you, Baltimore!",
        "Roll up~ ! ♪ Roll up for the Mystery Tour! ♪",
        "All right, so here we are, in front of the elphants. The cool thing about these guys is that they have really, really, really long... uhm... trunks. And thats cool. And that's pretty much all there is to say.",
        "Once, there was an ugly barnacle. He was so ugly, that everyone died. The end! =3",
        "Why do they call it Oven, when you of in the cold food of out hot eat the food...",
        "RAM RANCH REALLY ROCKS!",
        "What would Brian Boitano do, if he was here today? I'm sure he'd kick an ass or two! That's what Brian Boitano do!",
        "\"♪ Da Coconut Nut is a giant nut, if you eat too much, you'll get very fat. (very fat ~) Now, da Coconut Nut is a big, big nut, but this delicious nut is not a nut ! It's a coco fruit. (it's a coco fruit ~) Of the coco tree. (of the coco tree ~) From the coco palm family ! ♪\"",
        "\"♪ Super Mario RPG ♪ Sonic the Hedgehog, Donkey Kong 3 ♪ Adventures of Lolo 1 and 2 ♪ King's Knight, Dig Dug, Chew Man Fu ♪ Harvest Moooooon~ ♪ League Puzzle Pokemoooon~ ♪ ToeJam & Earl in Panic on Funkotroooon~ ♪ Castlevania, Fatal Fury, Ninja JaJaMaru-kun ♪ ActRaiser, Blazing Lazers, Bases Loaded, Mega Turrican ♪ Cybernator, Rolling Thunder, Dynastic Hero ♪ Bubble Bobble, Double Dribble, Double Dragon, F-Zero ♪ F-Zero X ~ ♪ and Donkey Kong Jr. Maaaath ~ ! ♪ Ninja Gaiden 1 ♪ Ninja Gaiden 2 ♪ Ninja Gaiden 3 ♪ Crusin' USA ♪\"",
        "\"♪ Super Mario - oohh R-P-G! ♪ It is the only one just for me ♪ When i play the game, i get lost in a phase ♪ Then i find out I'm stuck in Geno's Maze ♪ There are many secrets in this game ♪ Many of which drive some peeps insane ♪ Why we try to cheat in a really good game? ♪ Just sounds like crap and it makes you look lame! ♪ Exiting the forest is super simple! ♪ All you do is follow these path tuuuurns~ ♪ For the reeessstt of yoouur gaming liiife~ ♪\"",
        "\"♪ I wanna flyyy skyyy hiiiigh~ ♪ Let's goooo together~ ♪ We are going this waaayyy~ ♪ At maximum speed on a wiiing~ ♪ We're flying ♪    ♪ ♪ ♪    ♪ I wanna flyyy skyy hiiiigh~ ♪ Let's goooo together~ ♪ You can even see the horizooon~ ♪ We driiiift together~ ♪ Forever ♪ Oooover the bridge~ ♪ Cut through the traffic ♪ Flyyyying hiiigh~ Feeeeliing goood~ ♪ Blue, blue skiiesss ♪ Blue, blue skiiesss I see~ ♪ Blue, blue skiiesss ♪ Blue, blue skiiesss I see~ ♪\"",
        "\"♪ ROOOLLING STAAAAAAART! ♪ ROOOLLING STAAAAAAART! ♪\"",
        "\"It is gud day to be not dead !\"",
    ];

    // this code sucks at randomness! it almost always displays the same 3 headers! trying figure out a fix. but looking at my math skills.... ehhhhh....
    const getIndex = Math.floor(Math.random() * headerText.length);
    document.getElementById('marqueeText').innerText = headerText[getIndex];
}