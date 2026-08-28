let user = {
    nombre: "Sofia",
    estado: true,
    materia: []
}

let listaCompras = [""]

if(listaCompras.length > 0){
    
}else{
    // console.log("El array esta vacio");

}

if(user.nombre){
    // console.log("EL nombre es: ", user.nombre);
    
}
else if(user.estado){
    // console.log("estado es positivo");
    
}
else{
    // console.log("No hay informacion");
    
}

if(!user.nombre){
    // console.log("falta el nombre del usuario");
    
}


let edad = 23
let respuesta

if(edad < 18){
    respuesta = "denegado"
} else if(edad < 21){
    respuesta = "aceptado con tutor"
}else{
    respuesta = "Licencia otorgada"
}

// console.log(respuesta);


// OPERADOR TERNARIO
let licencia = (edad >= 18) ? 'Permitida' : "Denegada"

let licencia2 = (edad < 18) ? "Denegado" : (edad < 21) ? "Permitido con tutor" : "Licencia Otorgada"

// console.log(licencia);
// console.log(licencia2)


// OPERADOR && (AND) ejecuta la derecha, solo si la izquierda es verdadera/positiva


let nombre = "Facu"

// nombre && console.log("el nombre es: ", nombre);


// si yo quiero evaluar que tenemos todos los datos, utilizo el &&
if(user.nombre && user.estado && user.materia.length > 0){
    // console.log("tenemos todos los datos, subamoslo al sistema");
    
}


// Operador OR o ||

// Devolver el primer valor positivo/verdadero

let alumno ={
    nombre: nombre || "Alumno Generico",
    edad: 0,
    estudiante: false
}

// console.log(alumno);

// si yo quiero evaluar que tenemos al menos uno de los datos
if(!user.nombre || !user.estado || !user.materia.length > 0){
    // console.log("Che, falta un dato");
    
}


// operador nullish ?? (si la condicion es null/undefined, ejecuta lo siguiente)

let userInput = "Marcos"

let conTernario = userInput ? userInput : "input vacio"
let conNullish = userInput ?? "Sin nombre"

// console.log(conNullish);

let usuario = {
    nombre: "facu"
}

// OPTIONAL CHAINING (?.) antes de la siguiente llave
// sirve para leer propiedades profundas, sin que rompa

// console.log(usuario.direccion?.calle?.altura)

// console.log("Me voy a consultar la base de datos");

// setTimeout(() => {
//     usuario.direccion = {
//         calle: {
//             altura: 583,
//             nombre: "La Plata"
//         }
//     }
//     // console.log("Volvi");
    
// }, 4000);

// setTimeout(() => {
//     // console.log("Termine");
    
//     // console.log("la calle es: ", usuario.direccion?.calle?.altura);
    
    
// }, 5000);

if(1 === true){
    console.log("es positivo");
    
}else{
    console.log("es negativo");
}