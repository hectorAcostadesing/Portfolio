let menuVisible = false
//Mostrar menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//Ocultar menu una vez seleccionado una opcion
function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//funcion de las animaciones de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("bootstrap5");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("adaptabilidad");
        habilidades[8].classList.add("liderazgo");
        habilidades[9].classList.add("servicio");
    }
}


//detectar el scrolling para aplicar la animacion en la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}