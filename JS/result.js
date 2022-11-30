import {amigo, amigoR1, amigoR2, amigoR3} from './index.js';

let contadorAdmin = 0;
let inicio = 0;

let datos = document.getElementById("datos")
let imgInfo = document.getElementById("reglas")
let btnInfo = document.getElementById("info")
let btnNext = document.getElementById("next")

let credenciales = document.getElementById("credenciales")
let imgInfo2 = document.getElementById("reglas2")
let btnInfo2 = document.getElementById("info2")
let btnPlay = document.getElementById("start")

let resultado = document.getElementById("resultado")
let btnReset = document.getElementById("ver")

let config = document.getElementById("page2")
let btnAdmin = document.getElementById("fn")

//Sonidos
let winAudio = new Audio("resources/sounds/win.wav");
let clickAudio = new Audio("resources/sounds/click.wav");
let rightAudio = new Audio("resources/sounds/right.wav");
let wrongAudio = new Audio("resources/sounds/wrong.wav");

function startGame(){

    let NombreAmigo = document.getElementById("entrada").value = amigo;

    datos.style.display = "block";
    imgInfo.style.display = "none";
    btnInfo.addEventListener("click", viewInfo)
    btnNext.addEventListener("click", prueba1)

    credenciales.style.display = "none";
    imgInfo2.style.display = "none";
    btnInfo2.addEventListener("click", viewInfo2)
    btnPlay.addEventListener("click", prueba2)

    resultado.style.display = "none";
    btnReset.addEventListener("click", prueba3)

    config.style.display = "block"
    btnAdmin.addEventListener("click", pageAdmin)

}

function pageAdmin(){
    
    if(contadorAdmin==11){
        contadorAdmin=inicio;
        config.style.display = "none";
    }
    else if(contadorAdmin>10){
        contadorAdmin++;
    }
    else if(contadorAdmin==10){
        contadorAdmin++;
        config.style.display = "block";
        clickAudio.play();
    }
    else{
        contadorAdmin++;
    }

}

function viewInfo(){

    let timerInterval
    Swal.fire({
    title: 'Auto close alert!',
    html: 'I will close in milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()

        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })


    let vista = "none"
    if(imgInfo.style.display==vista){
        imgInfo.style.display = "block";
        clickAudio.play();
    }
    else{
        imgInfo.style.display = "none";
        clickAudio.play();
    }
}

function viewInfo2(){
    let vista = "none"
    if(imgInfo2.style.display==vista){
        imgInfo2.style.display = "block";
        clickAudio.play();
    }
    else{
        imgInfo2.style.display = "none";
        clickAudio.play();
    }
}

function prueba1(){
    datos.style.display = "none";
    resultado.style.display = "none";
    credenciales.style.display = "block";
    rightAudio.play();
}

function prueba2(){
    resultado.style.display = "block";
    datos.style.display = "none";
    credenciales.style.display = "none";
    winAudio.play();
}

function prueba3(){
    resultado.style.display = "none";
    datos.style.display = "block";
    credenciales.style.display = "none";
    wrongAudio.play();
}


window.addEventListener('load', startGame)
