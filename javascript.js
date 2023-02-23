let togglemen = document.querySelector(".toggle");
let uls =document.querySelector("header nav ul");
let land = document.querySelector(".landing");
let cen = document.querySelector(".landing .text");


togglemen.onclick = function () {
    land.style.backgroundImage="none";
    land.style.backgroundColor="black";
    cen.style.display="none";
    if( togglemen.classList.toggle("active")) {
        uls.style.display="flex";
    }
    else {
        uls.style.display="none";
        land.style.backgroundImage="url('/images/mobile/image-hero.jpg')";
        cen.style.display="block";
    }
}
