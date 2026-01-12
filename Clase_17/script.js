/* 
ARRAYS
Nos permiten listar datos de forma ordenada. El orden se determina por el indice de cada elemento. El indice se determina por la posicion.
Los elementos de un array pueden ser de cualquier tipo.

*/

/* const usuario1 = {
    "nombre": 'pepe',
    "edad": '20',
}

const usuario2 = {
    "nombre": 'juan',
    "edad": '33'
}

const usuarios = {
    usuario1, // indice 0, al estar primero
    usuario2, // indice 1, al estar segundo, y asi
} */

/* const usuarios = [
    {
    "nombre": 'pepe',
    "edad": '20',
    }, //indice 0
    {
    "nombre": 'juan',
    "edad": '33'
    } //indice 1
]

console.log('el segundo usuario se llama: ' + usuarios[1].nombre) */

/* 
Propiedades de una array:
Un array solo tiene una propiedad llamada Length, que nos permite saber la longitud, es decir, la cantidad de elementos que hay en el array (se cuenta desde 1) */

/* const nombres = ['pepe', 'juan', 'julieta']
console.log(nombres.length) */

// Recortar la longitud a 0, eliminando los registros mayores a 1
//nombres.lenght = 1
//nombres.lenght = 0 // Vaciar array

// Los objetos y arrays, al crearse, generan su propio identificador. Al asignar una variable a ese array, lo 

/* 
Metodos de array:
Los metodos de array son funcionalidades del array:
*/

// Agregar un elemento al final del array (mutable)
//nombres.push('Juan')

// Agregar un elemento al principio de un array (mutable)
//nombres.unshift('luis')

// Eliminar el ultimo elemento de un array (mutable)
//nombres.pop()

//Eliminar el primer elemento de un array (mutable)
//nombres.shift()

// Buscar el indice de un elemento
//nombres.indexOf('juan')

// Empalmar, que nos permite eliminar, agregar o reemplazar elementos por posicion
// Splice:
// 1er parametro - indica desde donde quiero empezar a eliminar
// 2do parametro - cuantos elementos quiero eliminar
// 3er parametro - elementos a agregar en la posicion

//let posicion_julieta = nombres.indexOf('julieta')

// Quiero eliminar a Julieta
//nombres.splice(posicion_julieta, 1)

// Quiero reemplazar a Maria con Marcos
//nombres.splice(posicion_julieta, 1, 'Marcos')

// Quiero agregar a alguien en el indice de Julieta
//nombres.splice(posicion_julieta, 0, 'Juancito')
/* 



const usuarios_2 = [
    {
        name: 'pepe',
        edad: 30,
        id: 5,
    },
    {
        name: 'juan',
        edad: 35,
        id: 6,
    },
    {
        name: 'pedro',
        edad: 60,
        id: 7,
    }
]

//1) crear una funcion llamada buscarPorNombre que recibira un nombre y buscara a los usuarios que coincidan con ese nombre y los retornara, en caso de no coincidir devolver array vacio.

function buscarPorNombre(nombre){
    const coincidencias = []
    for(const usuario of usuarios_2){
        if(usuario.name === nombre){
            coincidencias.push(nombre)
        }
    }
    return coincidencias
}

//2) crear una funcion llamada buscarPorRangoEdad que recibira 2 numeros (max y min) y buscara a todos los usuarios que tengan una edad dentro del rango. En caso de no coincidir devolver array vacio

function buscarPorRangoEdad(min,max){
    const coincidencias = []
    for(const usuario of usuarios_2){
        if(usuario.edad >= min && usuario.edad <= max){
            coincidencias.push(usuario)
        }
    }
    return coincidencias
}


console.log(buscarPorNombre('pedro'))
console.log(buscarPorRangoEdad(35,90))


const productos = [
    {precio: 40, id: 1, titulo: 'TV Samsung 43', stock: 50},
    {precio: 140, id: 2, titulo: 'TV Samsung 53', stock: 5},
    {precio: 190, id: 3, titulo: 'TV Samsung 63', stock: 89}
]

//3) Crear una funcion llamada calcularCostoTotal que recorrera la lista de productos y sumara el precio * stock de cada uno de los productos.

function calcularCostoTotal(array){
    const totalPorProducto = []
    for(const operacion of array){
        totalPorProducto.push(operacion.id,operacion.titulo,precioPorStock(operacion.precio,operacion.stock))
    }
    return totalPorProducto
}

function precioPorStock(precio, stock){
    return precio * stock
}

console.log(calcularCostoTotal(productos)) */

//4)

const carrito = [
    {id: 3, titulo: 'TV Samsung 43', precio: 40, cantidad: 3},
    {id: 8, titulo: 'TV Samsung 53', precio: 400, cantidad: 1},
    {id: 6, titulo: 'TV Samsung 63', precio: 400, cantidad: 10}
]

//agregarAlCarrito(titulo, precio, cantidad, id) Agrega un item al carrito

function agregarAlCarrito(titulo, precio, cantidad, id){
    if(confirmarIdNoExiste(carrito,id)){
        const objeto = {"id": id, "titulo": titulo, "precio": precio, "cantidad": cantidad}
        carrito.push(objeto)
    }
}

function confirmarIdNoExiste(array, id){
    for(const temp of array){
        if(temp.id === id){
            return false
            break
        }
    }
    return true
}

//calcularTotalCarrito() Retorna el costo total del carrito

function calcularTotalCarrito(){
    let total = 0
    for(const temp of carrito){
        total = total + temp.precio
    }
    return total
}

//eliminarItemCarrito(id) Busca por id y disminuye la cantidad, pero si es 1 debe eliminar el objeto del array

function eliminarItemCarrito(id){
    for(const temp of carrito){
        if(temp.id === id && temp.cantidad > 1){
            carrito[determinarIndice(temp)].cantidad -= 1
        }
        else if (temp.id === id && temp.cantidad === 1){
            carrito.splice(determinarIndice(temp),1)
        }
    }
}

function determinarIndice(objeto){
    return carrito.indexOf(objeto)
}


// Probando las funciones
agregarAlCarrito('Playstation 5',1500, 1, 11)
console.log(carrito)

console.log(calcularTotalCarrito())

eliminarItemCarrito(11)

console.log(carrito)