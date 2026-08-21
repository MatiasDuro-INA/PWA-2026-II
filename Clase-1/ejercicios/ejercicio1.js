// Identificar palabras Palindromas

let palabras = ["Casa", "Numero", "Oso", "Neuquen", "Reconocer", "Ojo", "Atun"]

const BuscarPalindromo = (palabras) => {

    let Palindromas = []

    // Debo recorrer el array de palabras
    // Devolver un array nuevo con las palabras Palindromas



    // paso previo: lograr hacer un console log, de cada palabra
    // verificar si se lee de atras hacia adelante igual, 
    // Pero hay una mayuscula distinta
    // no va a ser igual

    // Para evitar el problema de la mayuscula, hay que "Sanatizar"

    // Para pasar todo a mayuscula .toUpperCase()
    // para pasar todo a minuscula .toLowerCase()

    palabras.forEach(palabra => {
        let palabraSanatizada = palabra.toLowerCase()


        if(true){ // true hay que reemplazarlo por la condicion que evalua palabraSanatizada == palabraInvertida

            // agregar si cumple al array Palindromas
        }
    });
    // 1- Separar cada palabra en letras
    // 2- Invertir las palabras
    // 3- Volver a unir las palabras
    // 4- Compara palabraSanatizada == palabraInvertida


    return Palindromas
}

console.log(BuscarPalindromo(palabras));
