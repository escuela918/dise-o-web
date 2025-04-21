
//lenguaje de programacion client-side
//actualmente oruentado a funciones 
// variables 
var miVariable='hola soy una variable con var ';//no se usa 
let miVariable2 = 'variable con let ';//solo vive en el scope declarado 
const miVariable3='constante no cambian los valores ';
const hola= 'holaa';
console.log(hola);//es el equivalente a print 

function myFuction(variable){
    console.log(variable);
    return variable;
}
//funcio con flecha 
const myarrowFuction = (variable) => variable;

//ejecucio de una funcion 
myFuction(3);

const variable = true 
//condicion con if 
if (variable){
    console.log(true);
} else{
    console.log(false);
}

//condicional ternario sirve solo para dos clausulas 
variable ? console.log(true) : console.log(false);

//arreglos o arrays 
//los arreglos son las listas de phyton 
const arr = [1,true,"hola como va",0,1,2];
console.log(`la posicion 1 del arreglo es ${arr[1]}`);
//objetos
//los objetos osn como los diccionarios de python  
const objeto = {
    clave: "valor",
};

//los objetos estan compuestos por la clave valor 
console.log(objeto.clave)