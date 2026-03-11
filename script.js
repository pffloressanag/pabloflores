function toggleMenu(){

const menu=document.getElementById("menu")

menu.style.display=
menu.style.display==="flex"?"none":"flex"

}

const text=[
"Licenciado en Sistemas",
"Soporte Técnico",
"Redes y Hardware",
"Desarrollador Web"
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