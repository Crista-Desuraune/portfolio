// const buttons = document.querySelectorAll(".btn");
// const slides = document.querySelectorAll(".slide");

// // Tableau d'image : [0, 1, 2]

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         const calcNextSlide = e.target.id === "next" ? 1 : -1;
//         const slideActive = document.querySelector(".active");

//         console.log(e.target.id);

//         newIndex = calcNextSlide + [...slides].indexOf(slideActive);

//         if (newIndex < 0) newIndex = [...slides].length - 1;
//         if (newIndex >= [...slides].length) newIndex = 0;
//         slides[newIndex].classList.add("active");

//         slideActive.classList.remove("active");
//     });
// });


// document.body.onload=function(){
//     nbr=8;
//     p=0;
//     container=document.getElementById("container");
//     g=document.getElementById("g");
//     d=document.getElementById("d");
//     container.style.width=(800*nbr)+"px";
//     for(i=1;i<=nbr;i++){
//         div=document.createElement("div");
//         div.className="photo";
//         div.style.backgroundImage="url('/images/rachid"+i+".jpg')";
//         container.appendChild(div);
//     }
//     afficherMasquer();
// }
// g.onclick=function(){
//     if(p>-nbr+1)
//         p--;
//     container.style.transform="translate("+p*600+"px)";
//     container.style.transition="all 0.5s ease";
//     afficherMasquer();
// }
// d.onclick=function(){
//     if(p<0)
//         p++;
//     container.style.transform="translate("+p*600+"px)";
//     container.style.transition="all 0.5s ease";
//     afficherMasquer();
// }
// function afficherMasquer(){
//     if(p==-nbr+1)
//         g.style.visibility="hidden";
//     else
//         g.style.visibility="visible";
//     if(p==0)
//         d.style.visibility="hidden";
//     else
//         d.style.visibility="visible";
// }
function carrousselces(){
    nbr=12;
    p=0;
    container=document.getElementById("containerces");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(570*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photoces";
        div.style.backgroundImage="url('../images/ces/ces"+i+".png')";
        container.appendChild(div);
    }
    afficherMasquer();
}
d.onclick=function(){
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*570+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
g.onclick=function(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*570+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if(p==-nbr+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
    if(p==0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
}

window.addEventListener("DOMContentLoaded", function (){
    carrousselces()
});