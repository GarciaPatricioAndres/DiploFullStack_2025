/* 
Objetos:
Los objetos los usamos para describir un elemento.

Ejemplo--
Describir un usuario.
En vez de crear una variable

let nombre_usuario = 'pepe'
let apellido_usuario = 'fernandez'
let edad_usuario = 20
*/

let usuario = {
    "nombre": 'pepe',
    "apellido": 'fernandez',
    "edad": 20
}

let usuario2 = {
    "nombre": 'pepe',
    "apellido": 'fernandez',
    "edad": 20,
    "mejor_amigo":{
        "nombre": 'juan',
        "apellido": 'perez',
        "edad": 18
    }
}



let pais_australia = {
    "continente": 'Oceania',
    "capital": 'Canberra',
    "poblacion": 26020805,
    "superficie": '7.741.220 km2',
    "moneda": 'Dolar australiano',
    "idioma": 'Ingles'
}

let pais_portugal = {
    "continente": 'Europa',
    "capital": 'Lisboa',
    "poblacion": 10411834,
    "superficie": '92.212 km2',
    "moneda": 'Euro',
    "idioma": 'Portugues'
}

let item_libro_hobbit = {
	"id": 1,
	"nombre": 'El Hobbit',
	"precio": 20000,
	"stock": 100,
	"descripcion": 'El Hobbit - J.R.R. Tolkien',
	"rareza": 'Normal'
}

let item_anillo_unico = {
	"id": 2,
	"nombre": 'El Anillo Unico',
	"precio": 10000000,
	"stock": 1,
	"descripcion": 'El Anillo Unico de Sauron',
	"rareza": 'Legendario'
}

const personaje_frodo = {
    "id": 1,
	"nombre": 'Frodo Baggins',
	"vida": 200,
	"ataque": 20,
	"defensa": 10
}

const personaje_gandalf = {
    "id": 2,
	"nombre": 'Gandalf el Gris',
	"vida": 100000,
	"ataque": 5000,
	"defensa": 3500
}