function toggleMenu(){

const menu=document.getElementById("menu")

menu.style.display=
menu.style.display==="flex"?"none":"flex"

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