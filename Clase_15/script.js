/* Principios de la programacion

DRY: Don't repeat yourself
Single Responsability: una función solo deberia tener una responsabilidad.
 */


/* Funciones

Nos permiten guardar bloques de codigo en memoria */

//Declaracion
/* function saludar(){
    console.log('hola que tal')
}

//Invocacion
saludar() */

//No es reutilizable.
//No cumple con el principio de la programacion DRY
/* function sumar1mas1 (){
    console.log(1+1)
} */

/* function sumar1mas1 (a, b){
    console.log(a+b)
}

sumar1mas1(2, 4) */


function calcularIva(precio) {
    let iva = precio * 0.21
    return iva
}

//Con "return" directamente devuelvo el valor.

console.log(calcularIva(100))


