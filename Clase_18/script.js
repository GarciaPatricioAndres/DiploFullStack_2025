/* 
DOM:
document es una variable global de tipo objeto que representa toda nuestra pagina (se guardan todas las propiedades en ella).
Nos permite interactuar con el HTML de nuestra pagina.
Aparece como un HTML en el console log, debido a propiedades del console log en si.
Por eso, usamos console.dir
*/

//console.dir(document)

/* const btnSaludar = document.getElementById('btn-saludar')
console.dir(btnSaludar)
btnSaludar.innerText = 'Chau mundo'

 */
const sesion = {
    id: 1,
    username: 'pepe',
    role: 'admin',
    email: 'pepe@gmail.com',
    pendingNotifications: 8,
}

const username = document.getElementById('main-welcome')
username.innerText = 'Bienvenido '+ sesion.username

const notif = document.getElementById('main-notification')
notif.innerText = 'Tienes '+ sesion.pendingNotifications + ' notificaciones, revisa tu casilla electronica: '+ sesion.email
