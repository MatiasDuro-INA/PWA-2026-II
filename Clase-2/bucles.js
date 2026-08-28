let numeros = [5, 6, 29, 10, 27]

for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    // console.log(element);
}

numeros.forEach(element => {
    // console.log(element);
    
});

// While:
// Se va a ejecutar, siempre que la condicion se cumpla

let n = 30
while(n < 20){
    console.log("N: ", n);
    n = n + 1
}

// do while, (se ejecuta al menos, una vez)


do {
    // console.log("N es: ", n);
    
    
} while (n < 20);


// For OF... Sirve para recorrer arrays o String

let frutas = ["Manzana", "Banana", "Durazno"]

//en el for of..

// el element viene antes que el array
for (const element of frutas) {
    // console.log(element);
    
}

let persona = {
    nombre: "facu",
    edad: 26,
    estado: true,
    materias: ["PWA"]
}



for (const key in persona) {
    
    console.log(key);
    
    const element = persona[key]
    
    console.log(element);
    
}



