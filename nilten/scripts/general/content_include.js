var footer_one = document.getElementById("footer_include_one");

// footer01 for root pages
fetch('../../includes/footer01.html')
    .then((res) => res.text())
    .then((text) => document.getElementById("footer_include_one").innerHTML = text)
    .catch((e) => console.error(e));

// footer02 for pages outside of root, so that all the image paths arecrorgscectascfj2331lmaaothekeysarestuck
fetch('../../includes/footer02.html')
.then((res) => res.text())
.then((text) => document.getElementById("footer_include_two").innerHTML = text)
.catch((e) => console.error(e));