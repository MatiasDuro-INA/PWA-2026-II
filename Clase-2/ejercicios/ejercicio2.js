
const inventario = [
    { nombre: "Teclado", cantidad: 10 },
    { nombre: "Mouse", cantidad: 0 },
    { nombre: "Monitor", cantidad: 7 },
    { nombre: "Cable HDMI", cantidad: 0 },
    { nombre: "Auriculares", cantidad: 4 },
    { nombre: "Webcam", cantidad: 0 },
]



const separarProductos = (productos) => {

    let enStock = []
    let agotados = []

    //   primero el singular, y despues el plural
    for (const product of productos) {

        if(product.cantidad > 0 ){
            enStock.push(product)
        }else{
            agotados.push(product)
        }
        
    }


    return {
        enStock, agotados
    }

}

let respuesta = separarProductos(inventario)



console.log(respuesta);

// {
    // enStock: [],
    // agotados: []
// }



// separar los productos en stock vs agotados