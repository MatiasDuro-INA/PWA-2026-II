
// array se manejan  por index
//                  [0, 1, 2]
const  alumnos = ["Aye", "anahi", "yago"]


// console.log("alumnos: ", alumnos[2]);


// diferencia con los objetos
// el array tiene indices, vs el objeto que tiene llaves

const nombre = "Matias"


const familia = {
//  key:value
    cantidad: 4,
    padre: {
        nombre,
        edad: 30,
    },
    madre:{
        nombre: "Mar",
        edad: 30
    }
}


// familia["padre"]

// console.log("familia: ", familia["padre"]);
// console.log("familia: ", familia.padre);

let rol = "Cliente"

const usuario = {
    nombre: "Facu",
    apellido: "Azcurra",
    edad: 20,
    activo: true,
    familia,
    aprobados: null,
    presentar(){
        return `Hola, soy ${this.nombre}`
    },
    "Sistema Operativo": "Linux",
    rol: rol,
    [rol]: null
}



// console.log(usuario);

usuario.telefono = "12345"

console.log(usuario);

