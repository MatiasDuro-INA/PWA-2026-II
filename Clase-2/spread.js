// operador spread o ...

// en lugar de devolver el array entero, devuelve sus hijos
// devuelve cada elemento del array

let frutas = ["Frutilla", "Banana", "Uva"]

let carnes = ["Pollo", "Hamburguesa"]

let carrito = [...frutas, ...carnes]

console.log("Carrito: ", carrito);
