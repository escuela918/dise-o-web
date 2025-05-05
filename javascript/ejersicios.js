const Numero= 57
const arr = [1,true,"hola como va",0,1,2];
if(Numero<10){
    console.log("el numero  es menor de 10")
}
else {
    console.log("el numero es mayor de 10 ")
}


const NUmero2 = 70
if(Numero<NUmero2){
    console.log(`el numero mayor es ${NUmero2}`);
}
else {
    console.log(`el numero mayor es ${Numero}`);
}


//1
// while
let number = 5;
let counter = 0;
while (counter <= number) {
  counter++;
  console.log(`el contador${counter}`);
}
//2

let suma = 0;
let numero4 = 1;
while (numero4 <= 4) {
  suma += numero4;
  numero4++;
  console.log(suma);
}

//for
//1

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

//2

let suma2 = 0;

for (let i = 0; i <= 4; i++) {
  suma2 += i;
  console.log("La suma de los números del 0 al 4 es:", suma2);
}
