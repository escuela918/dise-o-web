//set Timeout()
//recibe por parametros una funcion y un valor numerico en milisegundos 
const button = document.getElementById('boton');
button.addEventListener("click", () =>  {
  setTimeout(() => {

        alert("fui presionado despues de 3 segundos ");
  },3000);

});

// setInterval()
/*let contador =0;
setInterval(() =>{
    contador ++;
    console.log("contador:", contador);
},1000);
*/
//asincronia
//metodos para consumir una api 
//get, post, put, delete 

//fetch
const array = fetch('https://rickandmortyapi.com/api/character')
 .then(data => data.json())
 .then(jaja=> console.log(jaja.results));

async function getCharacter(){
    try{
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()

        data.results.map((item) =>{
        console.log(item);
        });
}catch(error){
    console.log(error);

}
}
getCharacter();           





