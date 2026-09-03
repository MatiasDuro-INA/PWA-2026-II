

// Callback: una funcion que le pasas a otra como argumento


const suma = (a, b) => a + b
const resta = (a, b) => a - b

let primerNumero = 5
let segundoNUmero = 20

// console.log(suma(primerNumero, segundoNUmero));

function operacionMatematica(a, b, callback) {

    return callback(a, b)
}

// console.log(operacionMatematica(3, 4, suma)); // 7
// console.log(operacionMatematica(10, 5, resta)); // 5
// console.log(operacionMatematica(5, 3, (a, b) => a * b)); // 15


const numeros = [1, 2, 3, 4, 5]

// console.log(numeros.map((num) => num * 2));
// console.log(numeros.filter((num) => num > 3));

// map, filter, find, some, every, todos estos reciben callbacks
// error tipico seria llamar a una funcion asi
// console.log(operacionMatematica(3, 4, suma() ));
// con parentensis la llamas en lugar de pasarla


// Callback Asincronico

// lo de arriba se ejecuta al instante
// ahora vamos a intentar ejecutar algo asincronico

const usuariosDB = {
    1: { id: 1, nombre: "Ana", cursoId: 10 },
    2: { id: 2, nombre: "Facu", cursoId: 20 },
    3: { id: 3, nombre: "Lucia", cursoId: 10 },
};

const cursosDB = {
    10: { id: 10, nombre: "PWA", profesorId: 100 },
    20: { id: 20, nombre: "HTML", profesorId: 200 },
};

const profesoresDB = {
    100: { id: 100, nombre: "Matias" },
    200: { id: 200, nombre: "Vanina" },
};

const notasDB = {
    1: [8, 9, 7],
    2: [6, 10],
    3: [9, 9, 8],
};

// eL SetTImeout solo va a simular la demora de una consulta real a una base de datos


// Esto de crear un callback, donde el primer argumento es error, y el segundo lo que buscamos
// Es un patron, llamado error first
// Un patron no es mas que una forma de escribir codigo, que en su momento fue muy efectiva
// Y hoy en dia se considera un buen estandar


function obtenerUsuario(id, callback) {
    setTimeout(() => {
        const usuario = usuariosDB[id]
        if (!usuario) {
            // aca hay un error, porque no encontro usuario
            return callback("No existe el usuario", null)
        }
        callback(null, usuario)


    }, 300);
}

function obtenerCurso(cursoId, callback) {
    setTimeout(() => {
        const curso = cursosDB[cursoId];
        if (!curso) {
            return callback("No existe el curso " + cursoId, null);
        }
        callback(null, curso);
    }, 300);
}

function obtenerNotas(usuarioId, callback) {
    setTimeout(() => {
        const notas = notasDB[usuarioId];
        if (!notas) {
            return callback("No hay notas del usuario " + usuarioId, null);
        }
        callback(null, notas);
    }, 300);
}




function obtenerTodo(id) {
    console.log("--- callback hell ---");

    obtenerUsuario(id, (error, usuario) => {
        if (error) {
            return console.log("ERROR:", error);
        }

        obtenerCurso(usuario.cursoId, (error, curso) => {
            if (error) {
                return console.log("ERROR:", error);
            }

            obtenerNotas(usuario.id, (error, notas) => {
                if (error) {
                    return console.log("ERROR:", error);
                }

                const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;
                console.log(usuario.nombre, "cursa", curso.nombre, "con promedio", promedio);
            });
        });
    });
}

setTimeout(() => {

    obtenerTodo(2)
}, 2000);