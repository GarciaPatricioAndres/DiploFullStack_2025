/* 
DESAFIO:
- solicitarNumero(mensaje) debera solicitar un numero por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado
    Ejemplo de uso:
    - let cantidad_notas_promedio = solicitarNumero('Ingresa un numero')

- solicitarNumeroPositivo(mensaje) debera solicitar un numero positivo por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado

- promediar(sumatoria, cantidad_numeros) retornara el promedio de la sumatoria

- validarNumeroPostivoEntero(valor) retornara un booleano dependiendo de si el valor cumple con la validacion

*/


function pedirInput(mensaje) {
    return prompt(mensaje)
}

function validarNumeroPositivoEntero(valor) {
    if (!valor || isNaN(valor) || Number(valor) <= 0 || Number(valor) !== parseInt(valor)) {
        return false
    }
    else {
        return true
    }
}

function validarNumeroPositivo(valor) {
    if (!valor || isNaN(valor) || Number(valor) <= 0 || Number(valor) > 10) {
        return false
    }
    else {
        return true
    }
}

function solicitarNumero(mensaje) {
    let valor = pedirInput(mensaje)
    while (!validarNumeroPositivo(valor)) {
        valor = pedirInput(mensaje)
    }
    return Number(valor)
}

function solicitarNumeroPositivo(mensaje) {
    let valor = pedirInput(mensaje)
    while (!validarNumeroPositivoEntero(valor)) {
        valor = pedirInput(mensaje)
    }
    return Number(valor)
}

function promediar(sumatoria, cantidad_numeros) {
    return sumatoria / cantidad_numeros
}


//CODIGO DEL ULTIMO EJERCICIO, PERO USANDO FUNCIONES

let nota_total = 0
let cantidad_notas = solicitarNumeroPositivo('Ingrese la cantidad de notas a promediar')

for (let i = 1; i <= cantidad_notas; i++) {
    let nota = solicitarNumero('Ingrese la nota número ' + i)
    nota_total = nota_total + nota
}

let promedio = promediar(nota_total, cantidad_notas)
console.log('El promedio es: ' + promedio.toFixed(2))