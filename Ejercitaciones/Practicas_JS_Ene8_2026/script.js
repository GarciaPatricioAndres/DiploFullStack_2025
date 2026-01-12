//1) Imprime los números del 1 al 10

/* for(let i = 1; i <= 10; i++){
    console.log(i)
} */

//2) Imprime los números pares del 2 al 20

/* for(let i = 2; i <= 20; i = i+2){
    console.log(i)
} */

//3) Imprime los números impares del 1 al 19

/* for(let i = 1; i <= 19; i = i+2){
    console.log(i)
} */

//4) Imprime los números del 10 al 1 en orden inverso

/* for(let i = 10; i >= 1; i--){
    console.log(i)
} */

//5) Imprime los números del 1 al 10, pero se detiene al llegar al 5

/* for(let i = 1; i <= 5; i++){
    console.log(i)
} */

//6) Imprime los números del 1 al 10, pero salta el 5

/* for(let i = 1; i <= 10; i++){
    if(i!=5){
        console.log(i)
    }
} */

//7) Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre

/* function decirNombre(nombre){
    alert('Hola ' + nombre)
} */

//8) Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta

/* function saludar(nombre){
    return ('Hola '+ nombre)
}
alert(saludar('Pato')) */

//9) Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b

function sumar(a, b) {
    return a + b
}

//10) Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

function restar(a, b) {
    return a - b
}

//11) Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null 

function calcular(operacion, a, b) {
    if (operacion === "+") {
        return sumar(a, b)
    } else if (operacion === "-") {
        return restar(a, b)
    } else {
        return null
    }
}

//12) Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

function contarHasta(numero){
    for(i=1; i<=numero; i++){
        console.log(i)
    }
}

//13) Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.

function pedirInput(mensaje) {
    return prompt(mensaje)
}

function validarNumero(valor) {
    if (!valor || isNaN(valor)) {
        return false
    }
    else {
        return true
    }
}

function solicitarNumero(mensaje) {
    let valor = pedirInput(mensaje)
    while (!validarNumero(valor)) {
        valor = pedirInput(mensaje)
    }
    return Number(valor)
}

function solicitarOperando(mensaje){
    return String(pedirInput(mensaje))
}

/* let decision = prompt('Quiere utilizar la calculadora?')
while(decision!=null && decision.toUpperCase() === 'SI'){
    let a = solicitarNumero('Ingrese el primer numero')
    let b = solicitarNumero('Ingrese el segundo numero')
    let operacion = solicitarOperando('Ingrese el operando + o -')
    alert(calcular(operacion, a, b))
    decision = prompt('Quiere volver a utilizar la calculadora?')
}
alert('El programa ha finalizado') */

//14) Hacer un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…

/* let numero = 11
for(i=1;i<=25;i++){
    console.log(numero)
    numero = numero + 11
} */

//15) Hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares. Se ingresan valores por teclado.

function validarNumeroEntero(valor) {
    if (!valor || isNaN(valor) || Number(valor) !== parseInt(valor)) {
        return false
    }
    else {
        return Number(valor)
    }
}

function validarNumeroPar(valor){
    if(valor % 2 === 0){
        return true
    }
    return false
}

/* let par = 0
let impar = 0
for(i=1;i<=5;i++){
    let numero = validarNumeroEntero(pedirInput('Ingrese el numero '+i+' de 5 numeros enteros'))
    while(!numero){
        numero = validarNumeroEntero(pedirInput('Ingrese el numero '+i+' de 5 numeros enteros'))
    }
    if (validarNumeroPar(numero)){
        par = par + 1
    }else{
        impar= impar + 1
    }
}
alert('Total de numeros: 5. Cantidad de numeros pares: '+par+' / Cantidad de numeros impares: '+impar) */


//16) Hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. 

function validarNumeroEnteroPositivo(valor) {
    if (!valor || isNaN(valor) || Number(valor) !== parseInt(valor) || Number(valor) <= 0) {
        return false
    }
    else {
        return Number(valor)
    }
}

function promediar (total, cantidad){
    return (total/cantidad).toFixed(2)
}

/* let altura_total = 0
for(i=1;i<=5;i++){
    let temp = pedirInput('Ingrese la altura (en cm) de la persona '+i)
    while(!validarNumeroEnteroPositivo(temp)){
        temp = pedirInput('Ingrese la altura (en cm) de la persona '+i)
    }
    altura_total = altura_total + Number(temp)
}
alert('la altura promedio es de '+promediar(altura_total,5)+' cm') */


//17) Se cuenta con la siguiente información:
/* 	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor. */

/* const edades_manana = []
const edades_tarde = []
const edades_noche = []
let suma = 0
let promedio_manana = 0
let promedio_tarde = 0
let promedio_noche = 0 */

function sumaTotal(array){
    suma = 0
    for(const temp of array){
        suma = suma + Number(temp)
    }
    return suma
}

function edadesEstudiantes(array,cantidad,turno){
    for(i=1;i<=cantidad;i++){
        array[i-1] = pedirInput('Ingrese la edad numero '+i+' del turno '+turno+':')
        while(!validarNumeroEnteroPositivo(array[i-1])){
            array[i-1] = pedirInput('Ingrese la edad numero '+i+' del turno '+turno+':')
        }
    }
}

/* edadesEstudiantes(edades_manana,2,'mañana')
edadesEstudiantes(edades_tarde,2,'tarde')
edadesEstudiantes(edades_noche,2,'noche')
console.log(edades_manana)
console.log(edades_tarde)
console.log(edades_noche)

console.log(promediar(sumaTotal(edades_manana),edades_manana.length))

promedio_manana = promediar(sumaTotal(edades_manana),edades_manana.length)
promedio_tarde = promediar(sumaTotal(edades_tarde),edades_tarde.length)
promedio_noche = promediar(sumaTotal(edades_noche),edades_noche.length)

console.log('El promedio de edad del turno mañana, es: '+promedio_manana)
console.log('El promedio de edad del turno tarde, es: '+promedio_tarde)
console.log('El promedio de edad del turno noche, es: '+promedio_noche)

if(Number(promedio_manana) >= Number(promedio_tarde) && Number(promedio_manana) >= Number(promedio_noche)){
    alert('El promedio mas alto pertenece al turno mañana')
}else if(Number(promedio_tarde) >= Number(promedio_manana) && Number(promedio_tarde) >= Number(promedio_noche)){
    alert('El promedio mas alto pertenece al turno tarde')
}else{
    alert('El promedio mas alto pertenece al turno noche')
} */


//18) Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
/* a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.
d)	El valor acumulado de los números ingresados que son pares. */