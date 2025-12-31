let notaTotal = 0
let cantidadNotas = prompt('Ingrese un número que represente la cantidad de notas a promediar.')

while (!cantidadNotas || isNaN(cantidadNotas) || Number(cantidadNotas) <= 0 || Number(cantidadNotas) !== parseInt(cantidadNotas)) {
    cantidadNotas = prompt('Número ingresado no válido. Ingrese nuevamente un número que represente la cantidad de notas a promediar.')
}

cantidadNotas = Number(cantidadNotas)
for (let i = 1; i <= cantidadNotas; i++) {
    let nota = prompt('Ingrese la nota número ' + i)

    while (!nota || isNaN(nota) || Number(nota) <= 0 || Number(nota) > 10) {
        nota = prompt('Nota ingresada no válida. Ingrese nuevamente la nota número ' + i + ':')
    }

    nota = Number(nota)
    notaTotal = notaTotal + nota
}

let promedio = notaTotal / cantidadNotas
console.log('El promedio de nota es: ' + promedio.toFixed(1))



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
