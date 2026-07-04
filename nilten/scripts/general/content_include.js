var footer_one = document.getElementById("footer_include_one");

function execScriptsInFooter(text) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = text;

    let scripts = tempDiv.getElementsByTagName("script");
    for(let i = 0; i < scripts.length; i++) {
        console.log(scripts[i].src);
        fetch(scripts[i].src)
            .then((res) => res.text())
            .then((text) => eval(text));
    }
}

// footer01 for root pages
fetch('../../includes/footer01.html')
    .then((res) => res.text())
    .then((text) => document.getElementById("footer_include_one").innerHTML = text)
    .then((text) => execScriptsInFooter(text))
    .catch((e) => console.error(e));

// footer02 for pages outside of root, so that all the image paths arecrorgscectascfj2331lmaaothekeysarestuck
fetch('../../includes/footer02.html')
    .then((res) => res.text())
    .then((text) => document.getElementById("footer_include_two").innerHTML = text)
    .then((text) => execScriptsInFooter(text))
    .catch((e) => console.error(e));