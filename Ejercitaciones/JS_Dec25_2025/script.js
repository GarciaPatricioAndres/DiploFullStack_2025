let promedio = 0
let notaTotal = 0
let cantidadNotas = prompt('Ingrese un número que represente la cantidad de notas a promediar.')

while (!cantidadNotas || isNaN(cantidadNotas) || Number(cantidadNotas) <= 0) {
    alert('Número ingresado no válido. Pruebe nuevamente.')
    cantidadNotas = prompt('Ingrese un número que represente la cantidad de notas a promediar.')
}

cantidadNotas = Number(cantidadNotas)
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = prompt('Ingrese la nota número ' + i)

    while (!nota || isNaN(nota) || Number(nota) <= 0 || Number(nota) > 10) {
        alert('Nota ingresada no válida. Pruebe nuevamente.')
        nota = prompt('Ingrese la nota número ' + i + ':')
    }

    nota = Number(nota)
    notaTotal = notaTotal + nota
}

promedio = notaTotal / cantidadNotas
console.log('El promedio de nota es: ' + promedio)



/* if (cantidadNotas && !isNaN(cantidadNotas) && Number(cantidadNotas) > 0) {
    cantidadNotas = Number(cantidadNotas)
    for (let i = 1 ; i <= cantidadNotas ; i ++) {
        let nota = prompt('Ingrese la nota número ' + i + ':')
        if (nota && !isNaN(nota) && Number(nota) > 0) {
        nota = Number(nota)
        notaTotal = notaTotal + nota
        }
        else {
        alert('Número ingresado no válido')
        }
    }
    promedio = notaTotal / cantidadNotas
    alert('El promedio de nota es: ' + promedio)
}
else {
    alert('Número ingresado no válido.')
}
 */
