
const usuarios = [
    { nombre: "Ana", sexo: "F"},
    { nombre: "Facu", sexo: "M"},
    { nombre: "Sofia", sexo: "F"},
    { nombre: "Manuel", sexo: "M"},
    { nombre: "Martina", sexo: "F"},
    { nombre: "Lucas", sexo: "M"},
    { nombre: "Silvina", sexo: "F"},
]


const separarUsuarios = (usuario) => {

    let mujeres = []
    let hombres = []

    for (const user of usuarios) {
        
        if(user.sexo === "F"){
            mujeres.push(user)
        }else{
            hombres.push(user)
        }
    }

    return { mujeres, hombres}

}

const resultado = separarUsuarios(usuarios)

console.log(resultado);
// lo que deberia decir la respueta
// devolverme un objeto, con llaves mujeres y hombres
{
    mujeres: [{}, {}]
    hombres: [{}, {}]
}