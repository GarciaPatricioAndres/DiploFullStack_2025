let promedio = 0
let notaTotal = 0
let cantidadNotas = prompt('Ingrese un número que represente la cantidad de notas a promediar')

if (cantidadNotas && !isNaN(cantidadNotas) && Number(cantidadNotas) > 0) {
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

