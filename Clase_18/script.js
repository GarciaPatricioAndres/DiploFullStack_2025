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
/* const sesion = {
    id: 1,
    username: 'pepe',
    role: 'admin',
    email: 'pepe@gmail.com',
    pendingNotifications: 8,
}

const username = document.getElementById('main-welcome')
username.innerText = 'Bienvenido ' + sesion.username

const notif = document.getElementById('main-notification')
notif.innerText = 'Tienes ' + sesion.pendingNotifications + ' notificaciones, revisa tu casilla electronica: ' + sesion.email


notificaciones.innerText = `Tienes ${sesion.pendingNotifications} notificaciones revisa tu casilla electronica ${sesion.email}`; */

const message1 = {
    id: 1,
    sender_name: 'pepe',
    text: 'Hola que tal',
    isVip: true,
    isPinned: true,
    attachment: [
        'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/480830852_1195733161920624_3504195831939762763_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF71kLQYUCR_Gi8O-0uY_QkpFjlGkaInKykWOUaRoicrJz-sO4IXu_EEggveYKPDWnrvcP2O_y1zlaECtB5_kdV&_nc_ohc=kJbeISkFpSsQ7kNvwHyrJeD&_nc_oc=AdmOhv4EIxdYVULy7zh9JXz3-gJU3I8Nj7rx7bAcUAdZQFkI5aD74bnSb3iuQnXbXSBeLzzaNhnLaHFVttC8nyHR&_nc_zt=23&_nc_ht=scontent.ffdo4-1.fna&_nc_gid=8iEY8252STYCLmQWhR82iQ&oh=00_Afor4NGAgAgLGbA2aSts3O_3OT7_xHa5Po1qEQe0FC9pFg&oe=696CC732','https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pygoscelis_papua.jpg/250px-Pygoscelis_papua.jpg',
    ]
}


const temp = document.getElementById('contenedor')

function renderImg(array){
    let tmp = ''
    for (const temp of array){
        tmp += `<img src="${temp}">`
    }
    return tmp
}

function test(message){
temp.innerHTML = `
    ${message.isPinned
        ?
        `<span>Marcado <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin" viewBox="0 0 16 16"><path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282"/></svg></span>`
        :
        ''}
    <br></br>
    <span class="italic">Enviado por ${message.sender_name}</span>
    <br></br>
    ${message.isVip
        ?
        `<span class="mensaje vip">${message.text}</span>`
        :
        `<span class="mensaje">${message.text}</span>`
    }
    <br></br>
    <div>${renderImg(message.attachment)}</div>
`
}

test(message1)

//Renderizar el mensaje dentro de un div.
//Si el mensaje es vip, deberia tener la clase "vip", que debe hacer algun cambio visual, por ejemplo el texto resaltado (text-shadow).
//Si isPinned es verdadero, el mensaje debera tener algun texto en alguna parte que indique que esta marcado (puede ser un icono o/y mas recomendable, un texto que diga 'marcado').
//(Opcional) hacer el renderizado de los attachments (archivos adjuntos) abajo del mensaje (Aclaracion: todos los attachments seran imagenes).

