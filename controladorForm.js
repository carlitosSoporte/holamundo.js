let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let btnEnviar = document.getElementById("enviar");


btnEnviar.addEventListener("click",function(evento){

    evento.preventDefault();

    /*if(nombre.value=="" && apellido.value==""){
        nombre.classList.add("is-invalid");
        apellido.classList.add("is-invalid");
    }
    if(!nombre.value=="" && apellido.value==""){
            nombre.classList.remove("is-valid");
            nombre.classList.add("is-valid");
    }*/
    if(nombre.value=="" && !apellido.value==""){
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")

        nombre.classList.remove("is-valid")
        nombre.classList.add("is-invalid")
    }

    if(!nombre.value=="" && apellido.value==""){
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")

        apellido.classList.remove("is-valid")
        apellido.classList.add("is-invalid")
    }

    if(nombre.value=="" && apellido.value==""){
        nombre.classList.remove("is-valid")
        nombre.classList.add("is-invalid")

        apellido.classList.remove("is-valid")
        apellido.classList.add("is-invalid")
    }

    if(!nombre.value=="" && !apellido.value==""){
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")

        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid")
    }
    
})

