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
        "Inspect element me. I DARE you!", // HIIIIIIIIIII :333333 UWWWUUWUWUWUWUWOOWWOWOWOWOWO!!!!!11!!11MEOW!1 Feel free to look at my code but just a heads up: MY CODE SUCKS.
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
    ];

    // this code sucks at randomness! it almost always displays the same 3 headers! trying figure out a fix. but looking at my math skills.... ehhhhh....
    const getIndex = Math.floor(Math.random() * headerText.length);
    document.getElementById('marqueeText').innerText = headerText[getIndex];
}