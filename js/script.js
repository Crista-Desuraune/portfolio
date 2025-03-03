function carrousel() {
    let nbr = 8;
    let p = 0;
    let container = document.getElementById("container");
    let g = document.getElementById("g");
    let d = document.getElementById("d");

    container.style.width = (600 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        let div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('../images/rachid/rachid" + i + ".jpg')";
        container.appendChild(div);
    }

    function afficherMasquer() {
        d.style.visibility = (p == -nbr + 1) ? "hidden" : "visible";
        g.style.visibility = (p == 0) ? "hidden" : "visible";
    }

    d.onclick = function () {
        if (p > -nbr + 1) p--;
        container.style.transform = "translate(" + p * 600 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
    }

    g.onclick = function () {
        if (p < 0) p++;
        container.style.transform = "translate(" + p * 600 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquer();
    }

    afficherMasquer();
}

function carrousseltel() {
    let nbr = 8;
    let p = 0;
    let container = document.getElementById("containertel");
    let gtel = document.getElementById("gtel");
    let dtel = document.getElementById("dtel");

    container.style.width = (300 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        let div = document.createElement("div");
        div.className = "photo";
        div.style.backgroundImage = "url('../images/rachid/rachid" + i + ".jpg')";
        container.appendChild(div);
    }

    function afficherMasquerTel() {
        dtel.style.visibility = (p == -nbr + 1) ? "hidden" : "visible";
        gtel.style.visibility = (p == 0) ? "hidden" : "visible";
    }

    dtel.onclick = function () {
        if (p > -nbr + 1) p--;
        container.style.transform = "translate(" + p * 300 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquerTel();
    }

    gtel.onclick = function () {
        if (p < 0) p++;
        container.style.transform = "translate(" + p * 300 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquerTel();
    }

    afficherMasquerTel();
}

function carrouselces() {
    let nbr = 12;
    let p = 0;
    let container = document.getElementById("containerces");
    let gces = document.getElementById("gces");
    let dces = document.getElementById("dces");

    container.style.width = (570 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        let div = document.createElement("div");
        div.className = "photoces";
        div.style.backgroundImage = "url('../images/ces/ces" + i + ".png')";
        container.appendChild(div);
    }

    function afficherMasquerCes() {
        dces.style.visibility = (p == -nbr + 1) ? "hidden" : "visible";
        gces.style.visibility = (p == 0) ? "hidden" : "visible";
    }

    dces.onclick = function () {
        if (p > -nbr + 1) p--;
        container.style.transform = "translate(" + p * 570 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquerCes();
    }

    gces.onclick = function () {
        if (p < 0) p++;
        container.style.transform = "translate(" + p * 570 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquerCes();
    }

    afficherMasquerCes();
}
function carrouselcesTel() {
    let nbr = 12;
    let p = 0;
    let container = document.getElementById("containercestel");
    let gcestel = document.getElementById("gcestel");
    let dcestel = document.getElementById("dcestel");

    container.style.width = (320 * nbr) + "px";
    for (let i = 1; i <= nbr; i++) {
        let div = document.createElement("div");
        div.className = "photoces";
        div.style.backgroundImage = "url('../images/ces/ces" + i + ".png')";
        container.appendChild(div);
    }

    function afficherMasquerCesTel() {
        dcestel.style.visibility = (p == -nbr + 1) ? "hidden" : "visible";
        gcestel.style.visibility = (p == 0) ? "hidden" : "visible";
    }

    dcestel.onclick = function () {
        if (p > -nbr + 1) p--;
        container.style.transform = "translate(" + p * 320 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquerCesTel();
    }

    gcestel.onclick = function () {
        if (p < 0) p++;
        container.style.transform = "translate(" + p * 320 + "px)";
        container.style.transition = "all 0.5s ease";
        afficherMasquerCesTel();
    }

    afficherMasquerCesTel();
}

// window.addEventListener("DOMContentLoaded", function () {
//     carrouselces();
//     carrousel();
//     carrousseltel();
// });

window.addEventListener("DOMContentLoaded", carrouselces);
window.addEventListener("DOMContentLoaded", carrousel);
window.addEventListener("DOMContentLoaded", carrousseltel);
window.addEventListener("DOMContentLoaded", carrouselcesTel);

