function toggleMenu(){

const menu = document.getElementById("menu");

if(menu.style.display === "flex"){

menu.style.display = "none";

}else{

menu.style.display = "flex";

}

}

const text=[
"LICENCIADO EN SISTEMAS",
"TÉCNICO OPERADOR EN COMPUTACIÓN",
"REDES, HARDWARE Y SOFTWARE",
"DESARROLLADOR WEB",
"SOPORTE TÉCNICO COMPUTADORAS Y CELULARES",
]

let i=0
let j=0

function typing(){

document.querySelector(".typing").innerHTML=
text[i].substring(0,j)

j++

if(j>text[i].length){

j=0
i++

if(i>=text.length){
i=0
}

}

setTimeout(typing,100)

}

typing()


function revealSections() {

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if (pageYOffset >= sectionTop - 200) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});

/*LOADER HACHER AL INICIAR LA WEB - JS*/

window.addEventListener("load", function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},3000);

});

/* CURSOR TECNOLOGICO */

document.addEventListener("DOMContentLoaded", function(){

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

});

/* EXPERIENCIA ORGANIZACIONES */

const botones = document.querySelectorAll(".cliente-btn");

botones.forEach(boton => {

boton.addEventListener("click", () => {

const info = boton.nextElementSibling;

if(info.style.display === "block"){
info.style.display = "none";
}else{
info.style.display = "block";
}

});

});