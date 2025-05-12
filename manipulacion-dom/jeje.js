//manipulacion del DOM
//nos permit einteractuar con un documentos,
// modificar su estructura, estilo y contenido 

//seleccion de elementos
//por ID 
let titulo= document.getElementById("titulo");
console.log(titulo.innerText);


//por clase (Query selector)
let parrafo= document.querySelector('.parrafo');

//modificacion de contenido 
titulo.innerHTML = "nuevo titulo";
parrafo.textContent = "nuevo texto en el parrafo";

//eventos(addEventListener, on CLick, onChage)

let boton = document.getElementById('boton');
boton.addEventListener('click', function(){
    alert("boton clickeado");
    titulo.innerHTML = "este es el titulo modificado ";
   
});
