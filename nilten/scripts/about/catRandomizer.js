// Pick a random cat image every 4 seconds

// unused for now, sadly! 
// aligning content in css can be pretty shitty!
// and i sure as hell do not want to deal with it atm!
// btw it's currently 2:51 am on new years day as of writing this
// happy 2025 everybody! world's getting more fucked up this year!

randCatImg();
setInterval(randCatImg, 4000);

function randCatImg()
{
    const imgPaths = [
        "../images/about/cats/maxwell.gif",
        "../images/about/cats/cuh.png",
        "../images/about/cats/boykisser.gif",
        "../images/about/cats/taokakaPet.gif",
        "../images/about/cats/wire.png",
        "../images/about/cats/seriouser.gif",
    ];

    const getIndex = Math.floor(Math.random() * imgPaths.length);
    document.getElementById('catRand').src = imgPaths[getIndex];
}

