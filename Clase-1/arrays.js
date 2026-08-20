// Diferencia entre For y metodos de arrays
// for es un bucle especifico para recorrer arrays
// metodos, por otro lado, son funciones nativas de javascript, que permiten manipular arrays

// Indices o index de un array
//                0,       1,       2
const frutas = ["Uva", "Manzana", "Banana"]

// console.log(frutas);
// console.log(frutas[0]);

// Cuantos elementos tiene un array.
// De cuanta es la longitud de un array
// console.log(frutas.length);
// console.log(frutas[frutas.length - 1]);


// Si quisiera sumar un elemento al final del array
frutas.push("Pera")
// console.log(frutas);

// Si quisiera sacar un elemento al final del array
frutas.pop()
// console.log(frutas);


// Si  quisiera sumar un elemento al comienzo del array
frutas.unshift("Morron")
// console.log(frutas);

// Si  quisiera sacar el primer elemento de un array
frutas.shift()
// console.log(frutas);



const numeros = [1, 2, 3, 4]

// console.log(numeros);

// SI quisiera invertir el array, osea, darlo vuelta

let reverso = numeros.reverse()

// console.log(numeros);


// Si yo quisiera separar una palabra en un array

let palabra = "Parlante"

const letras = palabra.split("")

// console.log(letras[5]);

// Si yo quisiera unir un array a un string
const unidas = letras.join("")

// console.log(unidas);

let edad = "50"

edad > 30



// Metodos de Arrays Avanzados

// Problematica: Ver los mayores a 18, y guardarlos en un nuevo array
let numbers = [5, 7, 20, 3, 8, 27, 15, 27]
let mayores = []
for (let i = 0; i < numbers.length; i++) {
    const numero = numbers[i];
    
    // console.log(numero > 18);
    // if(numero > 18){
    //     mayores.push(numero)
    // }
    
}

numbers.forEach(number => {
    // console.log(number > 18);
    
});


let arrayMayores = numbers.map(number => {
    // console.log(number > 18);
    if(number > 18){
        return number
    }
})

// console.log(arrayMayores);

// let MayoresFiltrados = numbers.filter(number => {
//     return number > 18
// })

let MayoresFiltrados = numbers.filter(number => number > 18)

console.log(MayoresFiltrados);


// Si yo quisiera encontrar un valor en particular
const num = numbers.find(number => number == 27)

console.log("num: ", num);


// si yo quisiera preguntar, si todos cumplen con una condicion

const Mayores = numbers.every(number => number > 1)

console.log("Son mayores? ", Mayores);


// si yo quisiera preguntar, si alguno cumplen con una condicion

const alguno = numbers.some(number => number > 20)

console.log("Alguno es mayor? ", alguno);