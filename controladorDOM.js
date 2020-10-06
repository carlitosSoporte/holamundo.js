let tituloTarjeta2 = document.getElementById('titulo2');
let audioVariable = document.getElementById('audio1');
let botonPista1 = document.getElementById('pista1');
let botonPista2 = document.getElementById('pista2');
let textoApp = document.getElementById("textoPrincipal")
let imagenTarjeta1 = document.getElementById("imagen1");
let imagenTarjeta2 = document.getElementById("imagen2");

tituloTarjeta2.textContent = "Banda Coldplay";
textoApp.textContent ="Bandas de rock";
imagenTarjeta1.src = "recursos/imagen2.jpg";
imagenTarjeta2.src = "recursos/imagen1.jpg";

function cargarPista1(){
    audioVariable.src="recursos/audio1.mp3";
}

function cargarPista2(){
    audioVariable.src= "recursos/audio2.mp3";
}
