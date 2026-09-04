

// Las promesas estan en la misma cadena que callbacks

// el callback tenia 2 estados, error y resultado

// Las promesas tienen 3 estados
// 1- resolve - salio todo bien (promesa esta cumplida)
// 2- reject - algo salio mal (promesa fue rechazada)
// 3- pendiente - todavia el resultado, no salio

const usuariosDB = {
    1: { id: 1, nombre: "Ana", cursoId: 10 },
    2: { id: 2, nombre: "Pedro", cursoId: 20 },
    3: { id: 3, nombre: "Lucia", cursoId: 10 },
};

const cursosDB = {
    10: { id: 10, nombre: "PWA", profesorId: 100 },
    20: { id: 20, nombre: "Redes", profesorId: 200 },
};

const notasDB = {
    1: [8, 9, 7],
    2: [6, 10],
    3: [9, 9, 8],
};

function obtenerUsuario(id) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuariosDB[id]
            if (!usuario) {

                return reject(`No existe el usuario: ${id}`)
            }

            resolve(usuario)

        }, 300);
    })
}

// console.log("Usuario: ", obtenerUsuario(2))

// Como manejar las promesas
// 1- then -> "cuando salga bien, hace esto" (recibe lo que fue a resolve)
// 2- catch -> "cuando salga mal, hace esto" (recibe lo que fue al reject)
// 3- finally -> "Pase lo que pase, hace esto" (no recibe nada)


// sale bien
// obtenerUsuario(2)
//     .then((usuario) => console.log("OK, usuario: ", usuario.nombre))
//     .catch((error) => console.log("ERROR: ", error))
//     .finally(() => console.log("Termine, haya salido bien o mal"))

// sale mal
// obtenerUsuario(4)
//     .then((usuario) => console.log("OK, usuario: ", usuario.nombre))
//     .catch((error) => console.log("ERROR: ", error))
//     .finally(() => console.log("Termine, haya salido bien o mal"))


function obtenerCurso(cursoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const curso = cursosDB[cursoId];
            if (!curso) {
                return reject("No existe el curso " + cursoId);
            }
            resolve(curso);
        }, 300);
    });
}



function obtenerNotas(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const notas = notasDB[usuarioId];
            if (!notas) {
                return reject("No hay notas del usuario " + usuarioId);
            }
            resolve(notas);
        }, 300);
    });
}


function obtenerTodo(id) {
    let usuarioActual;
    let cursoActual;

    return obtenerUsuario(id)
        .then((usuario) => {
            usuarioActual = usuario;

            return obtenerCurso(usuario.cursoId)
        })
        .then((curso) => {
            cursoActual = curso;
            return obtenerNotas(usuarioActual.id)
        })
        .then((notas) => {
            const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;
            console.log(usuarioActual.nombre, "cursa", cursoActual.nombre, "con promedio", promedio);
        })
        .catch((error) => {
            console.log("ERROR: ", error);
        })

}


// setTimeout(() => {
// obtenerTodo(3)
// }, 1000);

function llamarAHomero() {

    const url = "https://thesimpsonsapi.com/api/characters"

    return fetch(url).then((response) => {

        
        return response.json()
        })
        .then((data) => {
            console.log("aca que tengo: ", data.results[0].name);

        })
        .catch((error) => {
            console.log("error: ", error);
        })
}

console.log(llamarAHomero());
