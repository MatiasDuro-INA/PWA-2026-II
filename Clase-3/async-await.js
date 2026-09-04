
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
            const usuario = usuariosDB[id];
            if (!usuario) {
                return reject("No existe el usuario " + id);
            }
            resolve(usuario);
        }, 300);
    });
}

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


// ASYNC - AWAIT

// async = sirve para declarar una funcion como asicrona
// await = sirve para esperar a que una promesa se complete


async function saludar(id) {



    try {

        const usuario = await obtenerUsuario(id)

        console.log("Hola, ", usuario.nombre);

    } catch (error) {
        console.log("error: ", error);
        

    }

}

// saludar(5)


async function mostrarPromedio(id){

    try {
        
    const usuario = await obtenerUsuario(id)
    const curso = await obtenerCurso(usuario.cursoId)
    const notas = await obtenerNotas(usuario.id)

    const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;
    console.log(usuario.nombre, "cursa", curso.nombre, "con promedio", promedio);

    } catch (error) {
        console.log("error: ", error );
        
    }

}

// mostrarPromedio(5)

// function llamarAHomero() {

//     const url = "https://thesimpsonsapi.com/api/characters"

//     return fetch(url).then((response) => {

        
//         return response.json()
//         })
//         .then((data) => {
//             console.log("aca que tengo: ", data.results[0].name);

//         })
//         .catch((error) => {
//             console.log("error: ", error);
//         })
// }

// console.log(llamarAHomero());


async function llamarAHomero() {

    try {
        
    const url = "https://thesimpsonsapi.com/api/characters"

    const response = await fetch(url)

    const data = await response.json()

    console.log("data: ", data.results[0].name);
    
    } catch (error) {
        
    }
}

console.log(llamarAHomero());
