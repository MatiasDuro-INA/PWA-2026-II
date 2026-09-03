
// una forma de simular asincronia, es por ejemplo con una funcion nativa de js
// setTimeout
// Javascript como lenguaje, utiliza un solo thread/ hilo
// al momento que yo ejecuto algo asincronico, lo mando a un subhilo, 
// para que este el hilo principal, y el otro hilo encargado de continuar con la tarea asincronica

// console.log("1")

setTimeout(() => {
    // console.log("2");
}, 10);

// console.log("3");

// console.log("3");

// salida real 1 3 4 2


setTimeout(() => {
//   console.log("5 - me agendaron con 0 ms y salgo ULTIMO igual");
}, 0);

// console.log("6 - yo estaba abajo del setTimeout de 0 ms");


let user

setTimeout(() => {
    user = {
        nombre: "Sofia"
    }
}, 0);

setTimeout(() => {
    
    // console.log("User: ", user);
}, 2);

// Muchos errores que podemos encontrar mas adelante, se deben a un mal manejo de la asincronia


const usuariosDB = {
  1: { id: 1, nombre: "Ana" },
  2: { id: 2, nombre: "Pedro" },
};


function obtenerUsuarioYa(id){
    return usuariosDB[id]
}

// console.log("usuario: ", obtenerUsuarioYa(1));

function obtenerUsuarioDeFormaRealista(id){
    // el return no se ejecuta antes de que se ejecute el console log de la linea 64
    console.log("Buscando usuario...");
    
    setTimeout(() => {
        console.log("Ya lo consegui, upss... tarde");
        
        return usuariosDB[id]

    }, 300);
}


console.log("usuario: ", obtenerUsuarioDeFormaRealista(1));
