/*
//alert() muestra una ventana emergente
alert("Hola mundo");
alert(1+9+41);
alert("1+9+41");*/

/*comentario en bloque*/
//comentario en linea//

// creo variable y la relleno


let saludo = "Holaaa";

//crear variable
let despedida;

//rellenar variable
despedida = "Adios";

//igualar una variable a otra
saludo = despedida;


/*
//operaciones numericas
alert(1+2); //Sumar
alert(1-2); //Restar
alert(12/2); //Dividir
alert(8*2); //Multiplicar
alert(8%2); //Resto de division
*/

let edad = 16;
edad = 17;
edad = edad + 7; //puedo sumar a la variable porque guarda un valor numérico
edad += 5;
edad++; //suma uno
edad--; //resta uno


//muestra lo que pongamos entre los parentesis en la consola
console.log(edad);


saludo = "hola";


let nombreUsuario = "Tatinesza";
saludo += nombreUsuario;
//alert(saludo+nombreUsuario); 
//alert(saludo);

//alert(saludo + " " + nombreUsuario); //puedo concatenar strings usando +
//alert(saludo);

//constantes
const SALUDO_USUARIO = "Hola de nuevo" + nombreUsuario; //"Hola de nuevo Tatisneza"
//no se puede cambiar el valor de las constantes

// Operadores Lógicos;
console.log(5 > 4); //mayor que
console.log(5 < 8); //menor que 

console.log(5 >= 6); //mayor o igual que
console.log(5 <= 7); //menor o igual que

console.log(5 == 5); //igual que
console.log( 5=== "5"); //estrictamente igual que (compara )
console.log(5 != 7); //no es igual

console.log("a" > "b");
console.log("Cortazar" > "Navarro");

let buleano = 4 <2; // el valor que devuelve es un boolean
console.log(buleano);

//Condicionales
if (edad >= 18) {
    //alert("Eres mayor de edad");

}
if (edad >= 18) {
    console.log("eres mayor de edad");
} else {
    console.log("no eres mayor de edad");
}

let premiun = true;

if (premiun) {
    console.log("tienes cuenta premiun"); //si es premiun
    alert("Bienvenido " + nombreUsuario)
} else if (edad >= 18) {
    console.log("puedes creaar una cuenta");
} else {
    console.log("no puedes crear una cuenta");
}


//interactuar con html DOM
//Selectores
//     recojo el elemento      // que hago //
document.getElementById("texto").innerHTML = "Holaaaaaa" + nombreUsuario;
document.getElementsByClassName("caja")
document.body.style.color = "blue";

//Funciones
function saludar () {
    alert("Bienvenido");
}
function modoNoche() {
    document.body.style.color = "white";
    document.body.style.backgroundColor ="black";
 }   
    function modoDia() {
        document.body.style.color ="black";
        document.body.style.backgroundColor = "white";
    
    }
    function saludarUsuario(){
      let imputUsuario = document.querySelector("#nombre-usuario").value
      alert("Hola buenos dias "+imputUsuario);  
    }

















