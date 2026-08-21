let nombre = "Lucas"
// CUando declaro una variable suelta, osea que no esta en una funcion ni nada adentro
// se lo conoce como variable global
// no es una buena practica

// Esto que les comento, de donde vive una variable, se lo conoce como Scope
function saludo(){
    let nombre = "lautaro"
    let edad = 30
    if(true){
        let nombre = "Mateo"
    }
    return nombre
}
// console.log(edad);

// console.log(saludo());



function calcularEdad(){
    return edad
}


console.log(calcularEdad());
var edad = 30


